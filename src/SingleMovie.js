import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { API_ENDPOINT } from './context';
import useFetch from './useFetch';
import {
  Box,
  Button,
  Checkbox,
  CardContent,
  CardActions,
  CardMedia,
  Card,
  Collapse,
  IconButton,
  Typography,
  Switch,
  InputAdornment,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  ModeNight,
  Favorite,
  FavoriteBorder,
  Tv,
  LocalMovies,
  ExpandMore,
} from '@mui/icons-material';

const ExpandMoreA = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const SingleMovie = ({ setMode, mode }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const { id } = useParams();
  const { isLoading, error, data: movie } = useFetch(`&i=${id}`);
  console.log(movie);
  if (isLoading) {
    return <div className="loading"></div>;
  }
  if (error.show) {
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link to="/" className="btn">
          back to movies
        </Link>
      </div>
    );
  }
  const {
    Poster: poster,
    Title: title,
    Plot: plot,
    Year: year,
    Director: director,
    Actors: actors,
    Awards: awards,
    Country: country,
    Genre: genre,
    Type: type,
    Released: released,
    Ratings: ratings,
    totalSeasons,
  } = movie;
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      bgcolor={'background.default'}
      color={'text.primary'}>
      <Card
        color={'text.primary'}
        sx={{
          display: 'flex',
          width: '50%',
          alignSelf: 'center',
          justifySelf: 'center',
        }}>
        <CardMedia
          component="img"
          image={poster}
          alt={title}
          sx={{ flex: '30%' }}
        />
        <CardContent
          sx={{
            flex: '60%',
          }}>
          <Typography component="div" variant="h5">
            <span>{title}</span>{' '}
            {type == 'movie' ? (
              <span>
                <LocalMovies />
              </span>
            ) : (
              <span>
                <Tv />
              </span>
            )}
          </Typography>
          {type == 'series' ? (
            <Typography> {totalSeasons} seasons</Typography>
          ) : null}
          <Typography
            gutterBottom
            variant="subtitle1"
            color="text.secondary"
            component="div">
            {type == 'movie' ? released : year}
          </Typography>
          <hr />
          <Typography p={1} color="text.primary">
            <strong>Plot</strong>
            <ExpandMoreA
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more">
              <ExpandMore />
            </ExpandMoreA>
          </Typography>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph variant="body2" color="text.secondary">
                {plot}
              </Typography>
            </CardContent>
          </Collapse>
          <Typography p={1} color="text.primary">
            <strong>Country:</strong> {country}
          </Typography>
          <Typography p={1} color="text.primary">
            <strong>Director:</strong> {director}
          </Typography>
          <Typography p={1} color="text.primary">
            <strong>Actors:</strong> {actors}
          </Typography>
          <Typography p={1} color="text.primary">
            <strong>Genre:</strong> {genre}
          </Typography>
          <Typography p={1} color="text.primary">
            <strong>Awards:</strong> {awards}
          </Typography>
          {ratings.length > 0 ? (
            <Typography p={2}>
              <strong>Ratings:</strong>
              {ratings.map((r) => (
                <div>
                  {r.Source}: {r.Value}
                </div>
              ))}
            </Typography>
          ) : null}
          <CardActions>
            <Button size="small">
              <Link to="/">back to movies</Link>
            </Button>
            <IconButton aria-label="add to favorites">
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite sx={{ color: 'red' }} />}
              />
            </IconButton>
            <InputAdornment>
              <Switch
                onChange={(e) => setMode(mode === 'light' ? 'dark' : 'light')}
              />
              <ModeNight />
            </InputAdornment>
          </CardActions>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SingleMovie;

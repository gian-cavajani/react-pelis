import React from 'react';
import { useGlobalContext } from './context';
import {
  Box,
  Toolbar,
  Typography,
  FormControl,
  Switch,
  TextField,
  AppBar,
  InputAdornment,
} from '@mui/material';
import { ModeNight, Search } from '@mui/icons-material';

const SearchForm = ({ mode, setMode }) => {
  const { query, setQuery, error } = useGlobalContext();

  return (
    <Box sx={{ flexGrow: 1 }} className="box">
      <AppBar position="static" className="appbar">
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}>
            Gian movies
          </Typography>
          <FormControl onSubmit={(e) => e.preventDefault()}>
            <TextField
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </FormControl>
          <Typography>
            {error.show ? (
              <div className="error">{error.msg}</div>
            ) : (
              <div> </div>
            )}
          </Typography>
          <InputAdornment>
            <Switch
              onChange={(e) => setMode(mode === 'light' ? 'dark' : 'light')}
            />
            <ModeNight />
          </InputAdornment>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default SearchForm;

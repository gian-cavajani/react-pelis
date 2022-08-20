import React from 'react';
import { useGlobalContext } from './context';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import {
  FormControl,
  Input,
  InputLabel,
  Switch,
  TextField,
} from '@mui/material';
import { ModeNight } from '@mui/icons-material';
import InputAdornment from '@mui/material/InputAdornment';
import './style/searchForm.scss';

const SearchForm = ({ mode, setMode }) => {
  const { query, setQuery, error } = useGlobalContext();

  const Search = styled('form')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));

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
            Gian movies-db
          </Typography>
          <FormControl onSubmit={(e) => e.preventDefault()}>
            <TextField
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
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

// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(3),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: '20ch',
//     },
//   },
// }));

// function SearchForm() {
//   const { query, setQuery, error } = useGlobalContext();

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ display: { xs: 'none', sm: 'block' } }}>
//             Gian movies-db
//           </Typography>
//           <Search>
//             <form className="search-form" onSubmit={(e) => e.preventDefault()}>
//               <SearchIconWrapper>
//                 <SearchIcon />
//               </SearchIconWrapper>
//               <StyledInputBase
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 placeholder="Search…"
//                 inputProps={{ 'aria-label': 'search' }}
//               />
//             </form>
//           </Search>
//           <Typography>
//             {error.show && <div className="error">{error.msg}</div>}
//           </Typography>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }

// export default SearchForm;

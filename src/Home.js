import React from 'react';
import Form from './SearchForm';
import Movies from './Movies';
import {  Box } from '@mui/system';
const Home = ({ setMode, mode }) => {
  return (
    <Box
      bgcolor={'background.default'}
      color={'text.primary'}
      sx={{ height: '100%' }}>
      <Form setMode={setMode} mode={mode} />
      <Movies />
    </Box>
  );
};

export default Home;

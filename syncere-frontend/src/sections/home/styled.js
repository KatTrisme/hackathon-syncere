import { styled } from '@mui/material/styles';

const Container = styled('div')(() => ({
  height: '100vh',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
}));

export {
  Container
}
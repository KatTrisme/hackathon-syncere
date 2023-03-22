import React from 'react';
import {Button} from '@mui/material';
import CameraIcon from '@mui/icons-material/Camera'
import AddChartIcon from '@mui/icons-material/Addchart';
import FeedIcon from '@mui/icons-material/Feed'
import {Container} from './styled';
import { useNavigate } from 'react-router-dom';


function requestUpdateQrPage() {
  console.log('Take Me to Update Scan QR Code.')
}

export default function Home() {
  let navigate = useNavigate();

  return  (
    <Container>
      <Button variant="outlined" startIcon={<AddChartIcon/>} onClick={() => {
        navigate('/create-product');
      }}>Admin Create QR</Button>
      <Button variant="outlined" startIcon={<FeedIcon/>} onClick={() => {
        navigate('/update-product');
      }}>Admin Updated QR</Button>
      <Button variant="outlined" startIcon={<CameraIcon/>} onClick={() => {
        navigate('/scan-qr');
      }}>User Scan QR</Button>
    </Container>
  );
}
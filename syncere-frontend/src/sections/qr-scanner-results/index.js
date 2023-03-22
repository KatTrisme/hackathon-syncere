import {Container} from '../qr-scanner/styled';
import React, {useEffect} from 'react';
import {useLocation} from 'react-router';

export default function QrScannerResults() {
  const {state} = useLocation();
  useEffect(() => {
    console.log('LOGGING STATE')
    console.log(state.data.productData)
  }, [state]);
  return  (
    <Container>
      <p>Results DATA {state.data.productData}</p>
    </Container>
  );
}
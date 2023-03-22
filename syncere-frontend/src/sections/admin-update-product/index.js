import React from 'react';
import {Container} from './styled';
import QRScanner from '../../components/qr-scanner';

export default function AdminUpdateProduct() {

  return  (
    <Container>
      <QRScanner nextNavPath={'/update-product-form'} />
    </Container>
  );
}
import React from 'react';
import {Container} from './styled';
import {QrScannerDataProvider} from '../../contexts/qr-scanner';
import QRScanner from '../../components/qr-scanner';
import QRScanResults from '../../components/qr-scan-results';

export default function QrScanner() {

  return  (
    <Container>
      <QRScanner nextNavPath={'/qr-scan-results'} />
    </Container>
  );
}
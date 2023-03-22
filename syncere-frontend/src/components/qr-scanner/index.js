import React, {useEffect, useState} from 'react';
import QrReader from 'react-qr-scanner';
import {useQrScannerDataContext} from '../../contexts/qr-scanner';
import { useNavigate } from 'react-router-dom';

function sendScannedData(data) {

  return fetch('http://localhost:3000/client?' + new URLSearchParams({
    id: data.id,
    hash: data.hash
  })).then(res => res.json())
    .then(json => {
      console.log(json);
      return json
    })
}

export default function QRScanner({nextNavPath = ''}) {
  let navigate = useNavigate();
  const [delayScan , setDelayScan] = useState(500);
  const [scannedData, setScannedData] = useState(null);

  useEffect(() => {
    console.log('USE EFFECT');
    if(scannedData !== null) {
      console.log(scannedData);
      navigate(nextNavPath, {state: scannedData})
    }
  }, [scannedData]);
  // const { setScannedData } = useQrScannerDataContext();
  return <div>
    <QrReader
      delay={delayScan}
      style={{
        height: 240,
        width: 320}
      }
      onError={err => {
        console.error(err);
      }
      }
      onScan={data => {
        console.log('SCAN COMPLETED!!!')
        if (data !== null) {
          console.log('SCAN Found something.')
          setDelayScan(0)
          sendScannedData(JSON.parse(data.text))
            .then(json => {
              setScannedData(json);
            })
            .catch(err => {
              console.error(err);
            })
        }
      }
      }
    />
  </div>;
}
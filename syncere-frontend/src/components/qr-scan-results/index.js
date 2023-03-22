import {Dialog} from '@mui/material';
import React, {useEffect} from 'react';
import {useLocation} from 'react-router';


export default function QRScanResults() {
  const {state} = useLocation()

  useEffect(() => {
    console.log(state.data)
  }, [state.data]);

  return <>
    {state.data &&
        <Dialog open={true}>
          <p>Found: data</p>
        </Dialog>
    }
  </>
}
import React, {useState} from 'react';
import {Button, Dialog, TextField} from '@mui/material';

function submit() {
  console.log('Sending data');
}

function decodeBase64(data) {
  return atob(data)
}

export default function AdminCreateProduct() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [requestResults, setRequestResults] = useState('');

  return  (
    <>
      <form>
        <TextField
          value={title}
          label={'Title'}
          placeholder={'Product Title'}
          onChange={(event) => setTitle(event.target.value)}
        />
        <TextField
          value={date}
          label={'Exp Date'}
          placeholder={'Product Exp Date'}
          onChange={(event) => setDate(event.target.value)}
        />
        <Button variant="outlined" onClick={() => {
          submit()
          console.log('CURRENT SENT DATA')
          console.log(title)
          console.log(date)
          fetch('http://localhost:3000/admin',{
            headers: {'Content-Type': 'application/json'},
            method: 'POST',
            body: JSON.stringify({ title: title, expDate: date})
          }).then(res => res.json())
            .then(json => {
              console.log(decodeBase64(json.data.qrImgString));
              setRequestResults(decodeBase64(json.data.qrImgString));
            })
            .catch(err => {
              console.error(err);
            })
        }}>Submit</Button>
      </form>
      <Dialog open={requestResults !== ''}>
        <img height={350} width={350} src={`data:image/svg+xml;utf8,${encodeURIComponent(requestResults)}`} />
      </Dialog>
    </>
  );
}
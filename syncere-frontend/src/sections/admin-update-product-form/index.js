import {Button, Checkbox, Dialog, TextField} from '@mui/material';
import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router';

function decodeBase64(data) {
  return atob(data)
}

export default function AdminUpdateProductForm() {
  const [title, setTitle] = useState('');
  const [recalled, setRecalled] = useState(false);
  const [requestResults, setRequestResults] = useState('');
  const {state} = useLocation();
    
    
  useEffect(() => {
    console.log(state.data.productData.id)
  }, [state.data]);

  return (
    <>
      <form>
        <TextField
          value={title}
          label={'Title'}
          placeholder={'Product Title'}
          onChange={(event) => setTitle(event.target.value)}
        />
        <Checkbox onChange={(event) => setRecalled(event.target.checked)}/>
        <Button variant="outlined" onClick={() => {
          console.log('CURRENT SENT DATA')
          console.log(title)
          console.log(recalled)
          fetch('http://localhost:3000/admin',{
            headers: {'Content-Type': 'application/json'},
            method: 'PUT',
            body: JSON.stringify({ title: title, recalled: recalled, id: state.data.productData.id , hash: state.data.productData.hash})
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
  )
}
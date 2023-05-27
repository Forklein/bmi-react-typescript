import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

interface NameFormProps {
  onNameSubmit: (name: string) => void;
}

const NameForm: React.FC<NameFormProps> = ({ onNameSubmit }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNameSubmit(name);
  };

  return (
    <form className='d-flex flex-column align-items-center justify-content-center' onSubmit={handleSubmit}>
      <div className="col-12">
        <small>Per cominciare inserisci il tuo nome</small>
      </div>  
      <TextField className='mt-3' label="Name:" value={name} onChange={e => setName(e.target.value)} />
      <Button className="mt-3" type="submit" variant="contained" color="primary">Inserisci</Button>
    </form>
  );
};

export default NameForm;
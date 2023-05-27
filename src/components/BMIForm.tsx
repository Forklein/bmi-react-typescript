import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

interface BMIFormData {
  height: number;
  weight: number;
}

interface BMIFormProps {
  onSubmit: (data: BMIFormData) => void;
}

const BMIForm: React.FC<BMIFormProps> = ({ onSubmit }) => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(e.target.value);
  };

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData: BMIFormData = {
      height: parseFloat(height),
      weight: parseFloat(weight),
    };

    onSubmit(formData);
  };

  return (
    <form className='d-flex flex-column align-items-center' onSubmit={handleSubmit}>
      <TextField label="Height (cm):" value={height} onChange={handleHeightChange} />
      <TextField className='mt-3' label="Weight (kg):" value={weight} onChange={handleWeightChange} />
      <div className="col-12 mt-3">
        <Button variant="contained" color="primary" type="submit">Calcola</Button>
      </div>
    </form>
  );
};

export default BMIForm;

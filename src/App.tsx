import React, {useState, useEffect} from 'react';
import BMIForm from './components/BMIForm';
import NameForm from './components/NameForm';
import Loader from './components/Loader';
import ConfettiComponent from './components/Confetti';
import Button from '@mui/material/Button';
import './App.css';

interface FormData {
  height: number;
  weight: number;
}

function App() {
  const [name, setName] = useState<string>('');
  const [bmi, setBmi] = useState(Number);
  const [bmiResult, setBmiResult] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isNormopeso, setIsNormopeso] = useState<boolean>(false);

  const handleNameSubmit = (submittedName: string) => {
    setName(submittedName);
  };

  const handleFormSubmit = (data: FormData) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsNormopeso(false);
      setBmi(data.weight / ((data.height / 100) ** 2));
    }, 500);
  };

  const handleReset = () => {
    window.location.reload();
  };
  
  useEffect(() => {
    switch (true) {
      case bmi === 0:
        setBmiResult('');
        break;
      case bmi < 16:
        setBmiResult('Grave magrezza');
        break;
      case bmi >= 16 && bmi < 18.5:
        setBmiResult('Sottopeso');
        break;
      case bmi >= 18.5 && bmi < 25:
        setBmiResult('Normopeso');
        setIsNormopeso(true);
        break;
      case bmi >= 25 && bmi < 30:
        setBmiResult('Sovrappeso');
        break;
      case bmi >= 30:
        setBmiResult('Obeso');
        break;
      default:
        setBmiResult('Errore');
        break;
    }
  }, [bmi]);  


  if (!name) {
    return <NameForm onNameSubmit={handleNameSubmit} />;
  }

  return (
    <div className="App">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12">
            <p>Benvenuto <strong>{name}</strong>, calcola il tuo l'indice di massa corporea</p>
          </div>
          <div className="col-12 mb-2 mb-xl-5">
            <strong>{bmi.toFixed(2)}</strong>
            {isNormopeso && <ConfettiComponent />}
          </div>
          <div className="col-12 mb-3">
            <strong>{bmiResult}</strong>
          </div>
          <BMIForm onSubmit={handleFormSubmit} />
          <div className="col-6 mt-3">
            <Button variant="contained" color="primary" onClick={handleReset}>Reset</Button>
          </div>
        </div>
      </div>
      {isLoading && (
        <div id="loading">
          <Loader />
        </div>
      )}
    </div>
  );
}

export default App;
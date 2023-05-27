import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

interface LoaderProps {
  message?: string;
}

const Loader: React.FC<LoaderProps> = ({ message = 'Loading...' }) => {
    return(
        <div className='d-flex flex-column align-items-center justify-content-center'>
            <CircularProgress />
            <p className='text-white mt-3'>{message}</p>
        </div>
    )
};

export default Loader;

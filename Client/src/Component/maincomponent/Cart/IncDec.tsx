import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const CounterComponent = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <Button variant="contained" color="primary" onClick={handleDecrement}>
        <RemoveCircleOutlineIcon />
      </Button>
      <Typography variant="h5" component="span" style={{ margin: '0 16px' }}>
        {count}
      </Typography>
      <Button variant="contained" color="primary" onClick={handleIncrement}>
        <AddCircleOutlineIcon />
      </Button>
    </div>
  );
};

export default CounterComponent;

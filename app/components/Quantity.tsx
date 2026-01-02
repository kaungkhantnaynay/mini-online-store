import { Typography } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

function Quantity() {
  return (
    <div>
        <ButtonGroup variant="outlined" aria-label="Basic button group">
        <Button>-</Button>
        <Button>1</Button>
        <Button>+</Button>
      </ButtonGroup>
    </div>
  )
}

export default Quantity

import { useState } from 'react';
import React from "react";

import {Button, ButtonGroup} from "@mui/material";

import './Chart.css';

export const Chart = () => {
  const [active, setActive] = useState(1);
  return(
    <div className='header'>
      <div className='header_Info'>
      <div>Spending over time</div>
      <div className='info_block'>
        <div className='circle_EFTs'></div>
        EFTs
      </div>
      <div className='info_block'>
        <div className='circle_Payments'></div>
        Card payments
      </div>
      <div className='info_block'>
        <div className='circle_Wires'></div>
        International wires
      </div>
      </div>
      <div className='button_block'>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button className={ active === 1 ? 'year_active' : 'year'} onClick={() => setActive(1)}>12 months</Button>
          <Button className={ active === 2 ? 'months_active' : 'months'} onClick={() => setActive(2)}>30 days</Button>
          <Button className={ active === 3 ? 'week_active' : 'week'} onClick={() => setActive(3)}>7 days</Button>
        </ButtonGroup>
      </div>
    </div>

  )
}

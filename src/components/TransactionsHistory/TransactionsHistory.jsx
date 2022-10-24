import React from 'react';

import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import {Button, ButtonGroup} from "@mui/material";

import TransactionsList from "../TransactionsList/TransactionsList";

import './TransactionsHistory.css';

const buttons = [
  <Button className='header-button__select-date' key="viewAll">View All</Button>,
  <Button className='header-button__select-date' key="transfers">Transfers</Button>,
  <Button className='header-button__select-date' key="cards">Cards</Button>,
];

export const TransactionsHistory = () => {

  return (
    <div className="history__box">
      <div className="history__content">

        <div className="transactions-header">
          <span className="header-name">Recent transactions</span>
          <Button className='header-button__select-date' variant="outlined" color="primary" startIcon={<CalendarTodayOutlinedIcon />}>
            Select dates
          </Button>
        </div>

        <div className="transactions-filter">
          <ButtonGroup  size="small" aria-label="small button group">
            {buttons}
          </ButtonGroup>
        </div>

        <TransactionsList />

        <div className="transactions-history"></div>
      </div>
    </div>
  );
};

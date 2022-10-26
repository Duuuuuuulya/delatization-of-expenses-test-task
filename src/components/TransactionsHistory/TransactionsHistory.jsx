import React from 'react';
import { useState } from 'react';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import {Button, ButtonGroup} from "@mui/material";

import TransactionsList from "../TransactionsList/TransactionsList";

import './TransactionsHistory.css';


export const TransactionsHistory = () => {
  const [transactions, setTransactions] = useState(1);

  const buttons = [
    <Button key="viewAll" className={ transactions === 1 ? 'header-button__select-date_active' : 'header-button__select-date'} onClick={() => setTransactions(1)} style={{borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px'}}>View All</Button>,
    <Button className={ transactions === 2 ? 'header-button__select-date_active' : 'header-button__select-date'} onClick={() => setTransactions(2)} key="transfers">Transfers</Button>,
    <Button className={ transactions === 3 ? 'header-button__select-date_active' : 'header-button__select-date'} onClick={() => setTransactions(3)} key="cards" style={{borderTopRightRadius: '10px', borderBottomRightRadius: '10px'}}>Cards</Button>,
  ];

  return (
    <div className="history__box">
      <div className="history__content">
        <div className="transactions-header">
          <span className="header-name">Recent transactions</span>
          <Button className='header-button__select-date_solo' variant="outlined" color="primary" startIcon={<CalendarTodayOutlinedIcon htmlColor='black'/>}>
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

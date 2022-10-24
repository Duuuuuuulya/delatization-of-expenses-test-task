import React, { memo } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Avatar} from "@mui/material";

import SpotifyPNG from '../../images/spotify.png';

import './TransactionsList.css';

function createData(transactionImage, transaction, amount, date, cardImage, cardName, cardDate) {
  return { transactionImage, transaction, amount, date, cardImage, cardName, cardDate };
};

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const rows = [
  createData(
    SpotifyPNG,
    'Spotify',
    '-159',
    'Wed 7:00am',
    'https://usa.visa.com/dam/VCOM/regional/ve/romania/blogs/hero-image/visa-logo-800x450.jpg',
    'Visa 1234',
    'Expiry 06/2024',
  ),
  createData(
    '',
    'A Coffee',
    '-237',
    'Wed 7:00am',
    'https://usa.visa.com/dam/VCOM/regional/ve/romania/blogs/hero-image/visa-logo-800x450.jpg',
    'Visa 1234',
    'Expiry 06/2024',
  ),
  createData(
    'https://cdn.jim-nielsen.com/ios/512/stripe-dashboard-2015-06-12.png',
    'Stripe',
    '+88',
    'Wed 10:00pm',
    'https://cdn.vox-cdn.com/thumbor/UKSLdttYoIK2bv1gd231rqL4eiQ=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13674554/Mastercard_logo.jpg',
    'MasterCard 1234',
    'Expiry 06/2024'
  ),
  createData(
    'https://s3-alpha.figma.com/hub/file/697598809/ce5e0bb3-16b9-4d88-9bca-7d237fe725a8-cover.png',
    'Figma',
    '-305',
    'Mon 4:00pm',
    'https://usa.visa.com/dam/VCOM/regional/ve/romania/blogs/hero-image/visa-logo-800x450.jpg',
    'Visa 1234',
    'Expiry 06/2024',
  ),
  createData(
    '',
    'TFB Bakery',
    '-356',
    'Thu 2:45pm',
    'https://usa.visa.com/dam/VCOM/regional/ve/romania/blogs/hero-image/visa-logo-800x450.jpg',
    'Visa 1234',
    'Expiry 06/2024',
  ),
  createData(
    '',
    'Fresh F&V',
    '-126',
    'Thu 2:40pm',
    'https://usa.visa.com/dam/VCOM/regional/ve/romania/blogs/hero-image/visa-logo-800x450.jpg',
    'Visa 1234',
    'Expiry 06/2024',
  ),
  createData(
    'https://cdn.jim-nielsen.com/ios/512/stripe-dashboard-2015-06-12.png',
    'Stripe',
    '+88',
    'Thu 2:30pm',
    'https://cdn.vox-cdn.com/thumbor/UKSLdttYoIK2bv1gd231rqL4eiQ=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13674554/Mastercard_logo.jpg',
    'MasterCard 1234',
    'Expiry 06/2024',
  ),
];

const TransactionsList = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className='table-row-header'>
            <TableCell className='table-row__row' >Transaction</TableCell>
            <TableCell className='table-row__row'  align="start">Amount</TableCell>
            <TableCell className='table-row__row' align="start">Date</TableCell>
            <TableCell className='table-row__row' align="start">Card</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" width={'60%'}>
                <div className="table-cell">
                  <Avatar src={row.transactionImage ? row.transactionImage : row.transaction} alt={row.transaction} sx={{ width: 50, height: 50, bgcolor: 'white', color: '#585454' }}/>
                  <span className='table-cell__transaction'>{row.transaction}</span>
                </div>
              </TableCell>
              <TableCell className={row.amount.includes("+") ? 'table-cell__amount-change' : 'table-cell__amount'} align="start">{formatter.format(row.amount)}</TableCell>
              <TableCell className='table-cell__date' align="start">{row.date}</TableCell>
              <TableCell align="start">
                <div className="table-card">
                  <img src={row.cardImage} alt={row.transaction} height={48} width={80} />
                  <div>
                    <div className="card-name">{row.cardName}</div>
                    <div className="card-date">{row.cardDate}</div>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default memo(TransactionsList);

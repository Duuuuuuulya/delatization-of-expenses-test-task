import React, { useState } from "react";

import { SettingButton } from "../SettingButton/SettingButton";

import './Header.css';

export const Header = () => {
  const [buttonsMassive, setButtonsMassive] = useState(" Dashboard");
  const buttons =[{
    title:" Dashboard",
    active: false,
    id: 1,
  },{
    title:" Transactions",
    active: false,
    id: 2,
  },{
    title:" Transfer",
    active: false,
    id: 3,
  },{
    title:" Cards",
    active: false,
    id: 4,
  },{
    title:" Accounts",
    active: false,
    id: 5,
  }]
  
  return(
    <div className="header__box">
      <div className="button_area">
        {buttons.map((item) =>
        <button key={item.title} className={item.title === buttonsMassive ?'header_button_active':'header_button'} onClick={() => setButtonsMassive(item.title)}>{item.title}</button>
        )}
      </div>
      <button className='setting_button'>
          <SettingButton/>
        </button>
    </div>
  )
}

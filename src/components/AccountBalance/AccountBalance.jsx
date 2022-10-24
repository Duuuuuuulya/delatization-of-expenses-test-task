import Select, { components } from 'react-select';

import { TripleLineSVG } from '../../images/Flag/TripleLineSVG';
import CanadaFlagPNG from '../../images/canadaFlag.png';

import {Button} from "@mui/material";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

import './AccountBalance.css';


export const AccountBalance = () => {
  const DropdownIndicator = props => {
    return (
      components.DropdownIndicator && (
        <>
          <components.DropdownIndicator className='select__drop-down-indicator' {...props}>
            <TripleLineSVG />
          </components.DropdownIndicator>
        </>
      )
    );
  };

  const ValueContainer = props => {
    return (
      components.ValueContainer && (
        <>
          <components.ValueContainer className='select__value-container' {...props} />
        </>
      )
    );
  };

  const colorStyles = {
    control: styles => ({ ...styles, border: '1px solid #e4e7eb', borderRadius: '10px', marginLeft: '8px', height: '30px', width: '60px' }),
    menu: styles => ({ ...styles, textAlign: 'center' }),
    input: styles => ({ ...styles, position: 'absolute', width: '40px', height: '40px', color: 'transparent',
    textShadow: '0 0 0 black' }),
    valueContainer: styles => ({ ...styles, height: '40px', width: '40px' }),
    placeholder: styles => ({ ...styles, position: 'absolute' }),
  };

  const options = [
    { value: 'canada', label: <img className='canada-flag' alt='canada' src={CanadaFlagPNG}></img> },
  ]
  return(
    <>
      <div className="accountBalance_box">
        <div className="accountBalance_info">
          <div className="accountBalance_title">Account Balance</div>
          <Select
            className="accountBalance_chooseCurrency"
            components={{ DropdownIndicator, IndicatorSeparator:() => null, ValueContainer }}
            options={options}
            placeholder={<img className='canada-flag-placeholder' alt='canada' src={CanadaFlagPNG}></img>}
            styles={colorStyles}
          />
        </div>
      <div className="accountBalance_buttonBlock">
        <Button className="add_button" variant="outlined" startIcon={<AddOutlinedIcon />}>
          Add money
        </Button>
        <Button className="send_button" variant="outlined" startIcon={<ArrowForwardOutlinedIcon />}>
          Send money
        </Button>
      </div>
    </div>
    <div className='accountBalance_value'>
      $107,843.82 CAD
    </div>
    </>
  )
}

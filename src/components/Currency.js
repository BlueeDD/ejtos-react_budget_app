import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    
    const { dispatch, currency, setCurrency } = useContext(AppContext);

    const handleCurrencyChange = (currency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency
        });
        setCurrency(currency);
    };

    return ( 
         <select value={currency} className="form-control" style={{backgroundColor: '#c3e6cb', color: 'white', textAlign: 'center'}} onChange={(event) => handleCurrencyChange(event.target.value)}>
            <option value="£" style={{color: "black"}}>Currency (£ Pound)</option>
            <option value="$" style={{color: "black"}}>Currency ($ Dollar)</option>
            <option value="€" style={{color: "black"}}>Currency (€ Euro)</option>
            <option value="₹" style={{color: "black"}}>Currency (₹ Ruppee)</option>
        </select>    
    );
};

export default Currency;

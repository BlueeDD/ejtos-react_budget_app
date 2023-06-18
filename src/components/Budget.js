import React, { useState } from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const [budget, setBudget] = useState(2000);
  const { currency, expenses } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
}, 0);

  if (budget > 20000) {
    alert('Budget cannot exceed 20000');
    setBudget('');
    return null;
  }

  else if (budget < totalExpenses) { 
     alert('You cannot reduce the budget value lower than the spending');
     setBudget('');
     return null;
 }

  return (
    <div className='alert alert-secondary'>
      <span>
        Budget: {currency}
        <input
          required='required'
          type='number'
          id='budget'
          value={budget}
          style={{ marginLeft: '5px', size: 10 }}
          onChange={(event) => setBudget(event.target.value)}
        />
      </span>
    </div>
  );
};

export default Budget;

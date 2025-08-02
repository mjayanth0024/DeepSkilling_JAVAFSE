import React, { useState } from 'react';

const CurrencyConvertor = () => {
  const [rupees, setRupees] = useState('');
  const [euros, setEuros] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const converted = (parseFloat(rupees) / 90).toFixed(2);
    setEuros(converted);
  };

  return (
    <div>
      <h2>Currency Converter</h2>
      <form onSubmit={handleSubmit}>
        <label>Indian Rupees: </label>
        <input
          type="number"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
          required
        />
        <button type="submit">Convert</button>
      </form>
      {euros && <p>Euros: €{euros}</p>}
    </div>
  );
};

export default CurrencyConvertor;

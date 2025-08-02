import React from 'react';

const App = () => {
  const heading = <h1>Office Space Rental Listings</h1>;
  const imageUrl = 'https://via.placeholder.com/600x200?text=Office+Space';

  const offices = [
    { name: 'Space A', rent: 55000, address: 'MG Road, Bangalore' },
    { name: 'Space B', rent: 75000, address: 'Cyber City, Gurgaon' },
    { name: 'Space C', rent: 45000, address: 'Hitech City, Hyderabad' },
    { name: 'Space D', rent: 85000, address: 'Salt Lake, Kolkata' }
  ];

  const getRentStyle = (rent) => ({
    color: rent < 60000 ? 'red' : 'green'
  });

  return (
    <div>
      {heading}
      <img src={imageUrl} alt="Office Space" width="600" height="200" />
      <h2>Available Office Spaces</h2>
      <ul>
        {offices.map((office, index) => (
          <li key={index}>
            <strong>{office.name}</strong><br />
            <span style={getRentStyle(office.rent)}>Rent: ₹{office.rent}</span><br />
            Address: {office.address}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

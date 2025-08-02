import React from 'react';

const IndianPlayers = () => {
  const T20players = ['Virat', 'Rohit', 'Gill', 'Hardik', 'Pant'];
  const RanjiTrophy = ['Rahane', 'Pujara', 'Jadeja', 'Ashwin', 'Kuldeep'];

  const allPlayers = [...T20players, ...RanjiTrophy];

  const oddPlayers = allPlayers.filter((_, index) => index % 2 === 0);
  const evenPlayers = allPlayers.filter((_, index) => index % 2 !== 0);

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        {oddPlayers.map((player, idx) => (
          <li key={idx}>{player}</li>
        ))}
      </ul>
      <h2>Even Team Players</h2>
      <ul>
        {evenPlayers.map((player, idx) => (
          <li key={idx}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;

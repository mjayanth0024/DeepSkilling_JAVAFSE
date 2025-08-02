import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Virat', score: 90 },
    { name: 'Rohit', score: 65 },
    { name: 'Gill', score: 80 },
    { name: 'Iyer', score: 55 },
    { name: 'Hardik', score: 72 },
    { name: 'Pant', score: 69 },
    { name: 'Jadeja', score: 85 },
    { name: 'Bumrah', score: 50 },
    { name: 'Shami', score: 78 },
    { name: 'Kuldeep', score: 60 },
    { name: 'Chahal', score: 74 }
  ];

  const filteredPlayers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, idx) => (
          <li key={idx}>{player.name} - {player.score}</li>
        ))}
      </ul>
      <h2>Players with score below 70</h2>
      <ul>
        {filteredPlayers.map((player, idx) => (
          <li key={idx}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;

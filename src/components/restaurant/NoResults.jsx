import React from 'react';

const NoResults = ({ city }) => (
  <div style={{ textAlign: 'center', marginTop: '2rem' }}>
    <p>No restaurants found in <strong>{city}</strong>.</p>
  </div>
);

export default NoResults;
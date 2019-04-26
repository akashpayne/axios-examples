import React from 'react';

export default ({ children }) => (
  <div
    style={{
      width: '100vw',
      height: '100vh',
      overflow: 'auto',
      padding: '5em',
      fontSize: '12pt'
    }}
  >
    {children}
  </div>
);

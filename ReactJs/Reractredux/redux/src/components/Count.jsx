// Count.js
import React from 'react';
import { useSelector } from 'react-redux';

function Count() {
  const count = useSelector(state => state.count);

  return (
    <div>
      <h2>Count: {count}</h2>
    </div>
  );
}

export default Count;


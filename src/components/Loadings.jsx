import React, { useState } from 'react';

const Loadings = ({ isDarkTheme}) => {

  return (
    <div className={`spinner-border ${isDarkTheme ? 'text-white' : 'text-primary'}`} role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}

export default Loadings;
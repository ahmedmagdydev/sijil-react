import React from 'react';

function Box({ title, children, className }) {
  return (
    <div className={`bg-white p-3 rounded-2xl box-shadow mb-3 ${className ? className : ''}`}>
      {title ? <h5 className="ml-4 mb-3 font-weight-bold box-title">{title}</h5> : null}
      {children}
    </div>
  );
}

export default Box;

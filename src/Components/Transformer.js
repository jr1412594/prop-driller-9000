import React from 'react';

function Transformer(props) {
 const { proptimus } = props
  return (
    <img
      className = 'transformer'
      src = {proptimus.url}
      alt = {proptimus.name}
    />
  );
}

export default Transformer;

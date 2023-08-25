import React from 'react';

const ObjectList = ({ objectArray }) => {
  return (
    <ul>
      {objectArray.map((item) => (
        <li key={item.id}>
          <strong>Name:</strong> {item.name}, <strong>Price:</strong> ${item.price}
        </li>
      ))}
    </ul>
  );
};

export default ObjectList;
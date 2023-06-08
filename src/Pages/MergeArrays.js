import React, { useEffect, useState } from 'react';

export const MergeArrays = () => {
  const [mergedArray, setMergedArray] = useState([]);
  const [filteredArray, setFilteredArray] = useState([]);

  useEffect(() => {
    const array1 = Array.from({ length: 20 }, () => Math.floor(Math.random() * 20));
    const array2 = Array.from({ length: 20 }, () => Math.floor(Math.random() * 20));

    const mergedArray = array1.concat(array2);

    const filteredArray = mergedArray.filter((number) => number > 10);

    setMergedArray(mergedArray);
    setFilteredArray(filteredArray);
  }, []);

  return (
    <div>
      <h3>Merged Array:</h3>
      <ul>
        {mergedArray.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>

      <h3>Filtered Array (Numbers greater than 10):</h3>
      <ul>
        {filteredArray.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
};


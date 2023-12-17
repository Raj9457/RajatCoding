import React from 'react';

const PureFn = () => {
  let array = [1, 2, 3, 4, 5];

  const make_array = (array, number) => {
    array.push(number);
    return [...array, number];
  };

  let jack = make_array(array, 6);

  // Log the results to the console
  console.log(jack);
  console.log(array);

  // Display the code and output in the component
  const codeSnippet = `
    let array = [1, 2, 3, 4, 5];
    const make_array = (array, number) => {
      array.push(number);
      return [...array, number];
    };
    let jack = make_array(array, 6);
    console.log(jack);
    console.log(array);
  `;

  return (
    <div>
      <h1>Pure Function</h1>
      <p>Code:</p>
      <pre>{codeSnippet}</pre>
      <p>Output:</p>
      <pre>{`[${jack.join(', ')}]\n[${array.join(', ')}]`}</pre>
    </div>
  );
};

export default PureFn;

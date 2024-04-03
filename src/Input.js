import { useEffect } from 'react';
import { useState } from 'react';

function Input() {
  const [value, setValue] = useState('');

  useEffect(() => {
    // console.log({ value });
  }, [value]);

  const handleChangeInput = (event) => {
    // console.log({ event });
    setValue(event.target.value);
  };

  return (
    <div>
      <input
        data-test-id="test-input"
        type="text"
        style={{ width: '290px', height: '25px' }}
        value={value}
        onChange={handleChangeInput}
      />
    </div>
  );
}

export default Input;

import { useState, BaseSyntheticEvent } from 'react'; 

export const useFormInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: BaseSyntheticEvent) => {
    setValue(event.target.value);
  };

  return {
    value,
    onChange: handleChange
  }
}
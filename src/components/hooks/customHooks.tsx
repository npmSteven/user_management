import { useState } from 'react'; 

export const useFormInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  return {
    value,
    onChange: handleChange
  }
}
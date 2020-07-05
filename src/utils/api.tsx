import { toast } from 'react-toastify';

const domain = 'https://jsonplaceholder.typicode.com';

export const get = async (path: string) => {
  try {
    const response: Response = await fetch(`${domain}${path}`);
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    toast.error('Something went wrong when trying to call the api');
  }
};

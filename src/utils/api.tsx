import { toast } from 'react-toastify';

const domain = 'https://jsonplaceholder.typicode.com';

/**
 * Get api call
 * @param path endpoint
 */
export const get = async (path: string) => {
  try {
    const response: Response = await fetch(`${domain}${path}`);
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    toast.error('Something went wrong when trying to call the api - get');
  }
};

/**
 * Post api call
 * @param path endpoint
 * @param payload data we want to add
 */
export const postApi = async (path: string, payload: any) => {
  try {
    const response: Response = await fetch(`${domain}${path}`, {
      method: 'POST',
      body: JSON.stringify({
        ...payload
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    toast.error('Something went wrong when trying to call the api - post');
  }
};

/**
 * Delete api call
 * @param path what you want to delete ie (/posts/1 || /users/1)
 */
export const deleteApi = async (id: number | undefined, type: string) => {
  try {
    const response: Response = await fetch(`${domain}/${type}/${id}`, {
      method: 'DELETE'
    });
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    toast.error('Something went wrong when trying to call the api - post');
  }
};

/**
 * Post api call
 * @param path endpoint
 * @param payload data we want to update
 */
export const update = async (path: string, payload: any) => {
  try {
    const response: Response = await fetch(`${domain}${path}`, {
      method: 'PUT',
      body: JSON.stringify({
        ...payload
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    toast.error('Something went wrong when trying to call the api - put');
  }
};
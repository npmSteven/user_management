const domain = 'https://jsonplaceholder.typicode.com';

export const get = async (path: string) => {
  try {
    const response: Response = await fetch(`${domain}${path}`);
    if (response.ok) {
      const payload: any = await response.json();
      return payload;
    }
  } catch (error) {

  }
}

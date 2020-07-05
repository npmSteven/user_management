import md5 from 'md5';

export const getGravatar = (email: string) => {
  const hash = md5(email);
  const img = `https://www.gravatar.com/avatar/${hash}`;
  return img;
};

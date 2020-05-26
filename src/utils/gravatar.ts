import { createHash } from 'crypto';

const getGravatar = (email: string, size = 130) => {
  const hash = createHash('md5').update(email).digest('hex');
  return `https://www.gravatar.com/avatar/${hash}?s=${size}`;
};

export default getGravatar;

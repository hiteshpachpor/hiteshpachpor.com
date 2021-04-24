import { Social } from './Social';

export interface Profile {
  name: String,
  about: String,
  photo: String,
  location: String,
  contact: {
    email: String,
  },
  social: Social,
};

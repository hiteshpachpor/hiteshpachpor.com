import { Job } from "./Job";
import { Profile } from "./Profile";

export interface Portfolio {
  me: Profile,
  jobs: Array<Job>,
};

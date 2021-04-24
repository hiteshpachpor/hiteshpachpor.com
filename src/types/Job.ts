import { Company } from './Company';

export interface Job {
  company: Company,
  period: {
    from: Date|null,
    to: Date|null,
  },
  current: Boolean,
  position: String,
  keyResults: Array<String>,
  tags: Array<String>,
}

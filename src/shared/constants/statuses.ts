export enum Status {
  Failed = 'failed',
  Idle = 'idle',
  Loading = 'loading',
}

export type Statuses = Status.Failed | Status.Idle | Status.Loading;

export interface Article {
  role?: string;
  title: string;
  description?: string;
  date?: number | string | Date
}

export interface Event extends Article {
  event: string;
}

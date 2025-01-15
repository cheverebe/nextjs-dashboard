type ApiResponse<T> = {
  count: number;
  next?: string;
  previous?: string;
  results: T[];
  error?: string;
};

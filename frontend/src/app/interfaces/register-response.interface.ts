export interface RegisterResponse {
  // Define the expected fields in the response, for example:
  message: string;
  data: {
    userId: number;
    email: string;
    username: string;
  };
}

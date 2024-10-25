export interface VerifyOtpResponse {
  success: boolean;
  message: string;
  reset_token?: string;  // Optional since not all responses may include it
}

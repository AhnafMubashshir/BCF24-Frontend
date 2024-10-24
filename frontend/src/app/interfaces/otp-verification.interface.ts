export interface OTPVerification {
  email: string;
  otp: string;
}

export interface OTPVerificationResponse {
  detail: string;
  reset_token?: string;
}

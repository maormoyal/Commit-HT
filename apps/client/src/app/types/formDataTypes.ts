// Define an interface for your form data structure
export interface IFormData {
  userName: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}

export interface IFormDataState {
  data: IFormData | Record<string, never>;
}

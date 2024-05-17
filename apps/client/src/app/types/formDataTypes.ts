export interface IFormData {
  userName: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}

export type TUserData = Pick<IFormData, 'userName' | 'phoneNumber'>;

export interface IFormDataState {
  data: IFormData | Record<string, never>;
}

import { HandleAccessDataType } from '../types/common';

export interface SignIn {
  email: string;
  password: string;
}

export interface SignInProps {
  handleAccessData: HandleAccessDataType;
}

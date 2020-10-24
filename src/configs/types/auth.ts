import { HandleCommonFunc, AccessDataObject } from './common';

export interface SignIn {
  email: string;
  password: string;
}

export interface SignInProps {
  handleAccessData: HandleCommonFunc;
}

export interface SignUp {
  name: string;
  email: string;
  password: string;
  confirm: string;
}

export interface SignUpData {
  data: {
    name: string;
    email: string;
  };
}
export interface SignInData {
  data: {
    access: string;
    refresh: string;
  };
}

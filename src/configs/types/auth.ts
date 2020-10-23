import { HandleCommonFunc, AccessDataObject } from './common';

export interface SignIn {
  email: string;
  password: string;
}

export interface SignInProps {
  handleAccessData: HandleCommonFunc;
}

export interface SignUpProps {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export interface SignOutProps {
  handleAccessData: HandleCommonFunc;
}

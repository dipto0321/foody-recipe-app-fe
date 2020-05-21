export interface SignUpProps {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export interface SignIn {
  email: string;
  password: string;
}

export interface SignInProps {
  handleAccessData: Function;
}

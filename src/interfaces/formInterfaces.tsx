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

type HandleAccessDataType = (value: object) => void;
export interface SignInProps {
  handleAccessData: HandleAccessDataType;
}

import server from '../configs/api/server';
import { SignIn, SignUp, SignUpData, SignInData } from '../configs/types/auth';

const endPointPaths = {
  signUpPath: '/user/create/',
  signInPath: '/user/token/',
  refreshTokenPath: '/user/token/refresh/',
};

export const signUp = (data: SignUp): Promise<SignUpData> =>
  server.post(endPointPaths.signUpPath, data);

export const signIn = (data: SignIn): Promise<SignInData> =>
  server.post(endPointPaths.signInPath, data);

import { Dispatch } from '@reduxjs/toolkit';

export interface AppDispatch {
  dispatch: Dispatch;
}

export interface ApiAction {
  type: string;
  payload: {
    url: string;
    method: any;
    data: any;
    onStart: boolean;
    onSuccess: boolean;
    onError: boolean;
  };
}

export type NextFn = (arg0: any) => void;

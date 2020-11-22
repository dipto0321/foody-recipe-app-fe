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
    onStart: string;
    onSuccess: string;
    onError: string;
  };
}

export interface CreateAction {
  url: string;
  method: any;
  data: any;
  onStart: string;
  onSuccess: string;
  onError: string;
}

export type NextFn = (arg0: any) => void;

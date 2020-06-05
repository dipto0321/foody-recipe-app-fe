import {
  AccessDataObject,
  HandleAccessDataType,
  HandleDeleteFunc,
} from '../types/common';

export interface ProfileProps {
  accessData: AccessDataObject;
  handleAccessData: HandleAccessDataType;
}

export interface DeleteProps {
  userName: string;
  handleDelete: HandleDeleteFunc;
}

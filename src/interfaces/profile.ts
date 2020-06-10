import {
  AccessDataObject,
  HandleCommonFunc,
  ProfileDataObject,
  HandleUpdateProfileWithArgsFunc,
} from '../types/common';

export interface ProfileProps {
  accessData: AccessDataObject;
  handleAccessData: HandleCommonFunc;
}

export interface DeleteProps {
  userName: string;
  handleDelete: HandleCommonFunc;
}

export interface UpdateProps {
  profileData: ProfileDataObject;
  handleUpdate: HandleUpdateProfileWithArgsFunc;
}

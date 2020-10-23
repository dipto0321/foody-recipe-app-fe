import {
  AccessDataObject,
  HandleCommonFunc,
  ProfileDataObject,
  HandleUpdateProfileWithArgsFunc,
} from './common';

export interface ProfileProps {
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

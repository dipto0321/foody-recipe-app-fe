export type AccessDataObject = { refresh: string; access: string };
export type HandleCommonFunc = () => void;
export type ProfileDataObject = {
  name: string;
  email: string;
  avatarUrl: string;
};
export type HandleUpdateProfileWithArgsFunc = (data: ProfileDataObject) => void;

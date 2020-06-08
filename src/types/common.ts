export type AccessDataObject = { refresh: string; access: string };
export type HandleCommonFunc = () => void;
export type HandleWithArgsFunc = (data: ProfileDataObject) => void;
export type ProfileDataObject = {
  name: string;
  email: string;
  avatarUrl: string;
};

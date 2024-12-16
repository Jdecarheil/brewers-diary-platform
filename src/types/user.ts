export type UserMetaData = {
  firstName?: string | null;
  lastName?: string | null;
};

export type User = {
  activeMfaType: string | null;
  avatarUrl: string | null;
  createdAt: string | null;
  defaultRole: string | null;
  displayName: string | null;
  email: string | null;
  emailVerified: boolean | null;
  id: string | null;
  isAnonymous: boolean | null;
  locale: string | null;
  metadata: UserMetaData | null;
  phoneNumber: string | null;
  phoneNumberVerified: boolean | null;
  roles: string[] | null;
};

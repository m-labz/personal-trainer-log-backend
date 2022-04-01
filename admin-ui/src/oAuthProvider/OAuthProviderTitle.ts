import { OAuthProvider as TOAuthProvider } from "../api/oAuthProvider/OAuthProvider";

export const OAUTHPROVIDER_TITLE_FIELD = "key";

export const OAuthProviderTitle = (record: TOAuthProvider): string => {
  return record.key || record.id;
};

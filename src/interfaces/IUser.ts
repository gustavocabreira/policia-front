import IRole from "./IRole";

export default interface IUser {
  id: string,
  name: string | null,
  email: string,
  email_verified_at: string | number,
  two_factor_confirmed_at: string | number,
  current_team_id: number | string | null,
  profile_photo_path: number | null,
  created_at: string,
  updated_at: string,
  discord_id: number,
  username: string,
  global_name: string,
  avatar: string,
  mfa_enabled: boolean,
  access_token: string,
  refresh_token: string,
  profile_photo_url: string,
  roles: IRole[],
}
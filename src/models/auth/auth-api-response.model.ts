import type { UserDetail } from "./user-detail.model";
import type{ UserType } from "./user-type.model";

export class AuthApiResponse{
  message!: string;
  token!: string;
  isLoggedIn!: boolean;
  userType?: UserType;
  user?: UserDetail;
}
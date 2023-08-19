import { Gender } from "./gender.model";
import { UserType } from "./user-type.model";

export class MakeAdminUserDto {
  name: string = "";
  email: string = "";
  phone: string = "";
  gender: Gender = Gender.Male;
  userType: UserType = UserType.Customer
}

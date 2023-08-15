import { Gender } from "./gender.model";

export default class SignupDto {
  name: string = "";
  email: string = "";
  phone: string = "";
  password: string = "";
  confirmPassword: string = "";
  gender: Gender = Gender.Male;
}

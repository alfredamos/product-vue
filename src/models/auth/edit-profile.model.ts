import { Gender } from "./gender.model";

export default class EditProfileDto {
  name: string = "";
  email: string = "";
  phone: string = "";
  password: string = "";  
  gender: Gender = Gender.Male;
}
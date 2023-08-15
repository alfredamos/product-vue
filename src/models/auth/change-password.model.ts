export default class ChangePasswordDto{
  email!: string;
  oldPassword!: string;
  newPassword!: string;
  confirmPassword!: string;
}
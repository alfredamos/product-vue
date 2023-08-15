import Axios from "../interceptors/axios.interceptor";
import type LoginDto from "../models/auth/login.model";
import type SignupDto from "../models/auth/signup.model";
import type EditProfileDto from "../models/auth/edit-profile.model";
import { BehaviorSubject } from "rxjs";
import type ChangePasswordDto from "../models/auth/change-password.model";
import { AuthApiResponse } from "../models/auth/auth-api-response.model";
import { UserDetail } from "../models/auth/user-detail.model";

export const userSubInitial: AuthApiResponse = {
  message: "",
  token: "",
  isLoggedIn: false,
};

class AuthService {
  private authUserSubject = new BehaviorSubject<AuthApiResponse>(
    userSubInitial
  );
  authUser$ = this.authUserSubject.asObservable();

  constructor(public url: string) {
    const authUser = this.getLocalAuthUser();
    if (authUser) this.updateAuthUser$(authUser);
  }

  async changePassword(changePasswordDto: ChangePasswordDto) {
    const { data } = await Axios.patch<AuthApiResponse>(
      `${this.url}/change-password`,
      changePasswordDto
    );

    return data;
  }

  async currentUser() {
    const { data } = await Axios.get<UserDetail>(`${this.url}/current-user`);
    return data;
  }

  async editProfile(editProfileDto: EditProfileDto) {
    const { data } = await Axios.patch<AuthApiResponse>(
      `${this.url}/edit-profile`,
      editProfileDto
    );

    return data;
  }

  getLocalAuthUser(): AuthApiResponse {
    const userInfo = JSON.parse(
      localStorage.getItem("userInfo")!
    ) as AuthApiResponse;
    return userInfo;
  }

  getCurrentAuthUser(): AuthApiResponse {
    return this.authUserSubject.getValue();
  }

  async login(loginDto: LoginDto) {
    const { data } = await Axios.post<AuthApiResponse>(
      `${this.url}/login`,
      loginDto
    );
    this.setAuthUser(data);

    return data;
  }

  logout(value: AuthApiResponse) {
    this.setAuthUser(value);
    localStorage.removeItem("products");
  }

  removeAuthUser() {
    this.updateAuthUser$(userSubInitial);
    localStorage.removeItem("userInfo");
  }

  setAuthUser(value: AuthApiResponse) {
    this.updateAuthUser$(value);
    console.log({ value });
    localStorage.setItem("userInfo", JSON.stringify(value));
  }

  async signup(signupDto: SignupDto) {
    const { data } = await Axios.post<AuthApiResponse>(
      `${this.url}/signup`,
      signupDto
    );

    return data;
  }

  updateAuthUser$(value: AuthApiResponse) {
    this.authUserSubject.next(value);
  }
}

const authUrl = "/auth";
export const authService = new AuthService(authUrl);

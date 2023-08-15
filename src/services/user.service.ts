import Axios from "../interceptors/axios.interceptor";
import { BehaviorSubject } from "rxjs";
import UserDto from "../models/auth/user.model";
import { UserApiResults } from "../models/users/user-api-results.model";
import SignupDto from "../models/auth/signup.model";

export class UserService {
  private userApiResSubject = new BehaviorSubject<UserApiResults>(
    new UserApiResults()
  );
  userApiRes$ = this.userApiResSubject.asObservable();

  private currentUserIdSubject = new BehaviorSubject<string>("");
  currentUserId$ = this.currentUserIdSubject.asObservable();

  constructor(public url: string) {
    const users = this.getUsersFromLocalStorage();
    if (users && users.length > 0) this.onLoad();
  }

  async createUser(userDto: SignupDto) {
    return await Axios.post<UserApiResults>(`${this.url}`, userDto);
  }

  onLoad() {
    console.log("In onload!!!");
    this.getAllUsers()
      .then((data) => {
        this.updateUserApiRes$(data);
        console.log({ users: data.users });
        localStorage.setItem("users", JSON.stringify(data.users));
      })
      .catch((error) => console.log(error));
  }

  async editUser(userDto: UserDto) {
    const { data } = await Axios.patch<UserApiResults>(
      `${this.url}/${userDto.id}`,
      userDto
    );

    return data;
  }

  async deleteUser(id: string) {
    return await Axios.delete<UserApiResults>(`${this.url}/${id}`);
  }

  async getAllUsers() {
    const { data } = await Axios.get<UserApiResults>(this.url);

    return data;
  }

  async getUserById(id: string) {
    const { data } = await Axios.get<UserApiResults>(`${this.url}/${id}`);
    return data;
  }

  private getUsersFromLocalStorage(): UserDto[] {
    const users = JSON.parse(localStorage.getItem("users")!);
    return users;
  }

  updateUserApiRes$(value: UserApiResults) {
    this.userApiResSubject.next(value);
  }

  updateCurrentUserId$(value: string) {
    console.log("In user-service, id : ", value);
    this.currentUserIdSubject.next(value);
  }

  getUsers(): UserApiResults {
    return this.userApiResSubject.getValue();
  }
}

const userUrl = "/users";

export const userService = new UserService(userUrl);

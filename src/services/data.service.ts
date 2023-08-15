import type { AxiosResponse } from "axios";
import Axios from "../interceptors/axios.interceptor";

class DataService {
  async getAll<T>(url: string) {
    console.log("url in data-service : ", url)
    const {data} = await Axios.get<T>(url) as AxiosResponse<T>;
    console.log("data in data-service : ", data)
    
    return data
  }
}

export const dataService = new DataService();

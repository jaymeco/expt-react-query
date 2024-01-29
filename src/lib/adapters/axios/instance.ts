import axios, { AxiosInstance } from "axios";

export default class AxiosClient {
  private static instance: AxiosInstance;

  public static getInstance(): AxiosInstance {
    if(this.instance !== null) return this.instance;

    return axios.create({
      baseURL: 'http://api.github.com'
    });
  }
}

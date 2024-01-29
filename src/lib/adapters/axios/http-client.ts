import { AxiosInstance } from "axios";
import HttpClient from "../contracts/http-client";
import AxiosClient from "./instance";

export default class AxiosHttpClient implements HttpClient {
  private client: AxiosInstance;

  public constructor() {
    this.client = AxiosClient.getInstance();
  }

  public async get<Response = void>(url: string, options?: any): Promise<Response> {
    const { data } = await this.client.get<Response>(url, options);

    return data;
  }
}

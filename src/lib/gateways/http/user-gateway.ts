import HttpClient from "@/lib/adapters/contracts/http-client";
import UserGateway from "../contracts/user-gateway";
import User from "@/lib/interfaces/entities/user";

export default class UserHttpGateway implements UserGateway {
  public constructor(private readonly httpClient: HttpClient) { }

  public async getAll(): Promise<User[]> {
    return this.httpClient.get('/users');
  }
}

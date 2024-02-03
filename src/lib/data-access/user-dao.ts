import UserGateway from "../gateways/contracts/user-gateway";
import User from "../interfaces/entities/user";

export default class UserDao {
  constructor(private readonly useGateway: UserGateway) {
  }

  public async getAll(): Promise<User[]> {
    return this.useGateway.getAll();
  }
}

import User from "@/lib/interfaces/entities/user";

export default interface UserGateway {
  getAll(): Promise<User[]>;
}

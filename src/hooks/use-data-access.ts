import AxiosHttpClient from "@/lib/adapters/axios/http-client"
import UserDao from "@/lib/data-access/user-dao";
import UserHttpGateway from "@/lib/gateways/http/user-gateway";

export default function useDataAccess() {
  const httpClient = new AxiosHttpClient();

  return {
    useDao: () => new UserDao(new UserHttpGateway(httpClient))
  }
}

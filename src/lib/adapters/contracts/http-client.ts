export default interface HttpClient {
  get<Response = void>(url: string, options?: any): Promise<Response>;
}

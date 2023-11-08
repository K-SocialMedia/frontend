
import { HttpClientInterface } from "./http-client.interface";
import { HttpClientModel } from "./http-client.model";
import { API_ENDPOINT } from "../api.type";

// export instance of HttpClientModel (injector)
export const HttpClient: HttpClientInterface = new HttpClientModel({
  baseURL: API_ENDPOINT,
});

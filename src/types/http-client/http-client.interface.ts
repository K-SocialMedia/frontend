
import { HttpRequestParamsType } from "./http-client-params.type";

export interface HttpClientInterface{
    get<T>(parameters:HttpRequestParamsType): Promise<T>;
    post<T>(parameters:HttpRequestParamsType): Promise<T>;
    delete<T>(parameters:HttpRequestParamsType): Promise<T>;
}
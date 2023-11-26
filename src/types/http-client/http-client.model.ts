import axios, {
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
    CreateAxiosDefaults,
} from "axios";
import { HttpClientInterface } from "./http-client.interface";
import { HttpRequestParamsType } from "./http-client-params.type";
import { StorageKey } from "../storage-key";
import { DEFAULT_TOKEN_KEY } from "../api.type";

type HttpClientOption = CreateAxiosDefaults;

export class HttpClientModel implements HttpClientInterface {
    private axios: AxiosInstance;
    private DEFAULT_CONTENT_TYPE = "application/json";

    private getToken(): string {
        const ACCESS_TOKEN = localStorage.getItem(StorageKey.ACCESS_TOKEN);
        const VALID_TOKEN_KEY = ACCESS_TOKEN || DEFAULT_TOKEN_KEY;
        return VALID_TOKEN_KEY;
    }

    constructor(option?: HttpClientOption) {
        this.axios = axios.create(option);
    }

    public get<T>(parameters: HttpRequestParamsType): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            const { url, requiresToken } = parameters;
            const options: AxiosRequestConfig = {
                headers: {},
            };

            if (requiresToken && options.headers) {
                const token = this.getToken();
                options.headers.Authorization = `Bearer ${token}`;
            }

            this.axios
                .get(url, options)
                .then((response: AxiosResponse) => {
                    resolve(response.data as T);
                })
                .catch((error: AxiosResponse | any) => {
                    reject(error);
                });
        });
    }

    public post<T>(parameters: HttpRequestParamsType): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            const { url, requiresToken, payload, contentType } = parameters;

            const options: AxiosRequestConfig = {
                headers: {},
            };

            if (requiresToken && options.headers) {
                const token = this.getToken();
                options.headers.Authorization = `Bearer ${token}`;
                options.headers["Content-Type"] = contentType
                    ? contentType
                    : this.DEFAULT_CONTENT_TYPE;
            }

            this.axios
                .post(url, payload, options)
                .then((response: AxiosResponse) => {
                    resolve(response.data as T);
                })
                .catch((error: AxiosResponse | any) => {
                    reject(error);
                });
        });
    }

    public put<T>(parameters: HttpRequestParamsType): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            const { url, requiresToken, payload, contentType } = parameters;

            const options: AxiosRequestConfig = {
                headers: {},
            };

            if (requiresToken && options.headers) {
                const token = this.getToken();
                options.headers.Authorization = `Bearer ${token}`;
                options.headers["Content-Type"] = contentType
                    ? contentType
                    : this.DEFAULT_CONTENT_TYPE;
            }

            this.axios
                .put(url, payload, options)
                .then((response: AxiosResponse) => {
                    resolve(response.data as T);
                })
                .catch((error: AxiosResponse | any) => {
                    reject(error);
                });
        });
    }

    public delete<T>(parameters: HttpRequestParamsType): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            const { url, requiresToken } = parameters;

            const options: AxiosRequestConfig = {
                headers: {},
            };

            if (requiresToken && options.headers) {
                const token = this.getToken();
                options.headers.Authorization = `Bearer ${token}`;
            }

            this.axios
                .delete(url, options)
                .then((response: AxiosResponse) => {
                    resolve(response.data as T);
                })
                .catch((error: AxiosResponse | any) => {
                    reject(error);
                });
        });
    }
}

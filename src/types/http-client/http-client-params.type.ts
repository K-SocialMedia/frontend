import {AxiosRequestConfig} from 'axios';

export type HttpRequestParamsType<D= any> = AxiosRequestConfig<D> &{
    url: string,
    requiresToken: boolean,
    payload?: any,
    contentType?: string
}
import { LoginPayload, RegisterPayload } from "@/types/auth";
import { API_ENDPOINT } from "@/types/api.type";
import { HttpRequestParamsType } from "@/types/http-client/http-client-params.type";
import { HttpClient } from "@/types/http-client/http-client";

class Auth {
    public register(payload: RegisterPayload): Promise<RegisterPayload> {
        const params: HttpRequestParamsType = {
            requiresToken: false,
            url: `${API_ENDPOINT}/User`,
            payload: payload,
        };
        return HttpClient.post(params);
    }

    public login(payload: LoginPayload): Promise<LoginPayload> {
        const params: HttpRequestParamsType = {
            requiresToken: false,
            url: `${API_ENDPOINT}/login`,
            payload: payload,
        };
        return HttpClient.post(params);
    }

    public logout(): Promise<void> {
        const params: HttpRequestParamsType = {
            requiresToken: true,
            url: `${API_ENDPOINT}/logout`,
        };
        return HttpClient.post(params);
    }
}

export default new Auth();

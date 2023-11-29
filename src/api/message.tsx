import { API_ENDPOINT } from "@/types/api.type";
import { HttpRequestParamsType } from "@/types/http-client/http-client-params.type";
import { HttpClient } from "@/types/http-client/http-client";
class Message {
    public GetAllMessageById(payload: string): Promise<string> {
        const params: HttpRequestParamsType = {
            requiresToken: true,
            url: `${API_ENDPOINT}/Message?id=${payload}`,
        };
        return HttpClient.get(params);
    }
}

export default new Message();

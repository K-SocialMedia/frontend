import { API_ENDPOINT } from "@/types/api.type";
import { HttpRequestParamsType } from "@/types/http-client/http-client-params.type";
import { HttpClient } from "@/types/http-client/http-client";
import { MessageGroup } from "@/types/group-chat";
class Group {
    public GetAllMessageOfGroup(payload: string): Promise<MessageGroup> {
        const params: HttpRequestParamsType = {
            requiresToken: true,
            url: `${API_ENDPOINT}/MessageGroup/get-message?groupId=${payload}`,
        };
        return HttpClient.get(params);
    }

    public GetAllGroupOfOwn(): Promise<void> {
        const params: HttpRequestParamsType = {
            requiresToken: true,
            url: `${API_ENDPOINT}/MessageGroup`,
        };
        return HttpClient.get(params);
    }

    public GetGroupById(payload: string): Promise<string> {
        const params: HttpRequestParamsType = {
            requiresToken: true,
            url: `${API_ENDPOINT}/MessageGroup/get-group-by-id?id=${payload}`,
        };
        return HttpClient.get(params);
    }
}

export default new Group();

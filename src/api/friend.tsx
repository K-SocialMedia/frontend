import { API_ENDPOINT } from "@/types/api.type";
import { HttpRequestParamsType } from "@/types/http-client/http-client-params.type";
import { HttpClient } from "@/types/http-client/http-client";
import { HandleFriend } from "@/types/friend";
class Friend {
    public HandleFriend(payload: HandleFriend): Promise<HandleFriend> {
        const params: HttpRequestParamsType = {
            requiresToken: true,
            url: `${API_ENDPOINT}/Friend`,
            payload: payload,
        };
        return HttpClient.post(params);
    }
    public GetFriendPending(): Promise<void> {
        const params: HttpRequestParamsType = {
            requiresToken: true,
            url: `${API_ENDPOINT}/Friend/get-all-pending-friend-of-user`,
        };
        return HttpClient.get(params);
    }
    public GetFriend(): Promise<void> {
        const params: HttpRequestParamsType = {
            requiresToken: true,
            url: `${API_ENDPOINT}/Friend/get-all-friend-of-user`,
        };
        return HttpClient.get(params);
    }


}

export default new Friend();

import { API_ENDPOINT } from "@/types/api.type";
import { HttpRequestParamsType } from "@/types/http-client/http-client-params.type";
import { HttpClient } from "@/types/http-client/http-client";
import { Post } from "@/types/profile";
import { AddPost } from "@/types/post";
class PostProfile {
    public GetPostByUserId(): Promise<void>{
        const params: HttpRequestParamsType = {
            requiresToken: true,
            url: `${API_ENDPOINT}/Post`,
        };
        return HttpClient.get(params);
    }

    public GetPostById(): Promise<void> {
        const params: HttpRequestParamsType = {
            requiresToken: true,
            url: `${API_ENDPOINT}/Post`,
        };
        return HttpClient.get(params);
    }
    
    public GetAllPost(): Promise<void> {
        const params: HttpRequestParamsType = {
            requiresToken: true,
            url: `${API_ENDPOINT}/Post/get-all-post`,
        };
        return HttpClient.get(params);
    }

    public AddPost(payload:AddPost):Promise<AddPost>{
        const params: HttpRequestParamsType = {
            requiresToken: true,
            url: `${API_ENDPOINT}/Post`,
            payload: payload,
        };
        return HttpClient.post(params);
    }
}
export default new PostProfile();
import { API_ENDPOINT } from "@/types/api.type";
import { HttpRequestParamsType } from "@/types/http-client/http-client-params.type";
import { HttpClient } from "@/types/http-client/http-client";
import { Post } from "@/types/profile";
class PostProfile {
    public GetPostByUserId(payload: string): Promise<any> {
        const params: HttpRequestParamsType = {
            requiresToken: true,
            url: `${API_ENDPOINT}/User/get-post-by-user-id?userId=${payload}`,
        };
        return HttpClient.get(params);
    }

    public GetPostById(payload: string): Promise<Post> {
        const params: HttpRequestParamsType = {
            requiresToken: true,
            url: `${API_ENDPOINT}/User/get-post-by-user-id?userId=${payload}`,
        };
        return HttpClient.get(params);
    }
    
    public GetAllPost(): Promise<any> {
        const params: HttpRequestParamsType = {
            requiresToken: true,
            url: `${API_ENDPOINT}/User/get-all-post`,
        };
        return HttpClient.get(params);
    }
}
export default Post;
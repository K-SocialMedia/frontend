import { API_ENDPOINT } from "@/types/api.type";
import { HttpRequestParamsType } from "@/types/http-client/http-client-params.type";
import { HttpClient } from "@/types/http-client/http-client";
import { AddComment } from "@/types/post";
import { Comment } from "@/types/profile";
class CommentPost {     
    public AddComment(payload: AddComment): Promise<AddComment> {
        const params: HttpRequestParamsType = {
            requiresToken: true,
            url: `${API_ENDPOINT}/Comment/add-comment`,
            payload,
        };
        return HttpClient.post(params);
    }
    public GetCommentOfPost(payload:string):Promise<Comment>{
        const params: HttpRequestParamsType = {
            requiresToken: true,
            url: `${API_ENDPOINT}/Comment/get-comment/${payload}`,
            payload,
        };
        return HttpClient.get(params);
    }
}
export default new CommentPost();
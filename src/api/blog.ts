import { GetRequest } from "../plugins/https"

export const APIGetAllBlogs = ()=>{
    return GetRequest('/blog')
}

export const APIGetBlogsById = (id)=>{
    return GetRequest('/blog/'+id);
}
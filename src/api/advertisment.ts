import { GetRequest } from "../plugins/https"
import { PostRequest } from "../plugins/https"

export const APIGetAllAdvertisment = ()=>{
    return GetRequest('/advertisement')
}

export const APIGetAdvertismentById = (id)=>{
    return GetRequest('/advertisement/'+id);
}

//only god knows

export const APIPostAllAdvertisment = ()=>{
    return PostRequest('/advertisement')
}

export const APIPostAdvertismentById = (id)=>{
    return PostRequest('/advertisement/'+id);
}

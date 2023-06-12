import { GetRequest } from "../plugins/https"

export const APIGetAllMenus = ()=>{
    return GetRequest('/menu')
}

export const APIGetMenuById = (id)=>{
    return GetRequest('/menu/'+id);
}
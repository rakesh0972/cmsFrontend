import {GetRequest, PostRequest, PutRequest} from "../plugins/https";
import {ILoginUser, IRegisterUser, IUpdatePassword, IUserEmail} from "../utils/interfaces/LoginUser.interface";

export const APIAuthenticateUser = (data: ILoginUser)=>{
    return PostRequest('/authentication', data);
}

export const APIRegisterUser = (data: IRegisterUser)=>{
    return PostRequest('user', data);
}

export const APIForgetPassword = (data: IUserEmail)=>{
    return PutRequest('user/forget-password', data);
}

export const APIVerifyEmail = (data: IUserEmail)=>{
    return PostRequest('user/verify-email', data);
}

export const APIUpdatePassword = (data: IUpdatePassword)=>{
    return PutRequest('user/update-password',data);
}


export const APIGetSDOHQuestions = ()=>{
    return GetRequest('/patient/getAllSdh')
}

export const APICreatePatient = (data:any)=>{
    return PostRequest('/patient',data)
}

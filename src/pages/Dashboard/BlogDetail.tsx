import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { APIGetAllBlogs  } from "../../api/blog";

export const BlogDetail = () => {
    const [data,setData]= useState({});
    const {id} = useParams();
    useEffect(()=>{
        loadMenu().then(_=>{});
    },[]);
    const loadMenu=async ()=>{
        const res = await APIGetAllBlogs();
        setData(res.data ?? {})
    }
    return <div>BlogDetail</div>
}
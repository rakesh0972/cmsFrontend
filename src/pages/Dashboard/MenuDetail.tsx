import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { APIGetMenuById } from "../../api/menu";

export const MenuDetail = () => {
    const [data,setData]= useState({});
    const {id} = useParams();
    useEffect(()=>{
        loadMenu().then(_=>{});
    },[]);
    const loadMenu=async ()=>{
        const res = await APIGetMenuById(id);
        setData(res.data ?? {})
    }
    return <div>MenuDetail</div>
}

import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { APIGetAdvertismentById  } from "../../api/advertisment";

export const AdvertisementDetail = () => {

    const [data,setData]= useState({});
    const {id} = useParams();
    useEffect(()=>{
        loadMenu().then(_=>{});
    },[]);
    const loadMenu=async ()=>{
        const res = await APIGetAdvertismentById(id);
        setData(res.data ?? {})
    }
    return <div>AdvertisementDetail</div>
}
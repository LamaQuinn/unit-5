import React from "react";
import {useSelector} from 'react-redux';
import { selectLoading } from "../redux/slices/loadingSlice";

const Loading =()=>{
 const isLoading=useSelector(selectLoading);

 if(isLoading){
    return <h2>Loading...</h2>
 }
 return null
}

export default Loading;
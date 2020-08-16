import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Height from './Height'

function getData(){
axios.get("http://192.168.56.1:5000/api/hello").then(res=>{
    
    return (res)
});
}



const Client=(props)=>{
    const [ data,setData]=useState()
    useEffect(()=>{
        axios.get("http://192.168.56.1:5000/api/hello").then(res=>{
        setData(res.data)
        console.log(res.data);
});
       
    }, [])
    return(
        <div>
            <Height height={data ? data.Altitude: 0}/>
        </div>
        )
    }

    export default Client
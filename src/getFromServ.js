import React from 'react';

import axios from 'axios';

function getData(){
axios.get("http://192.168.56.1:5000/api/hello").then(res=>{
    return (res)
});
}

function Client(){
    return(
        <li>getData()</li>
        )
    }

    export default Client
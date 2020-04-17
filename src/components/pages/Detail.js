import React ,{useEffect,useState} from 'react';
import Axios from 'axios';
import {useParams} from 'react-router-dom'



const Article = () => {

    const {id} = useParams();
    const [data,dataState] = useState({});

    useEffect(() => {
        const url =`http://35.240.201.155:3000/api/v1/wanderlink/show/idn/destination/${id}`;

        Axios.get(url)
        .then (res =>{
            const list = res.data
            console.log(list)
            dataState(list)
        })

    },[id])
    
    const imgUrl = 'http://35.240.201.155:3000'
    
           
    
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                <div className="card" style={{width : "18rem"}}>
                <img src={`${imgUrl}/${data.images}`} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{data.destinationName}</h5>
                <p className="card-text">{data.description}</p>
            </div>
            </div>
                </div>
            </div>
        </div>
    )
}

export default Article; 
import React ,{useEffect,useState} from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom'



const Article = () => {

    const [data,dataState] = useState ([]);

    useEffect(() => {
        const url ="http://35.240.201.155:3000/api/v1/wanderlink/show/idn/destination";

        Axios.get(url)
        .then (res =>{
            const list = res.data
            console.log(list)
            dataState(list)
        })

    },[])
    
    const imgUrl = 'http://35.240.201.155:3000'
    let show = data.map((item,index) =>
        <div key={index}>
            <div className="card" style={{width : "18rem"}}>
                <img src={`${imgUrl}/${item.images}`} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{item.destinationName}</h5>
                <p className="card-text">{item.city}</p>
                <Link to={`/Article/${item._id}`} className="btn btn-primary">go somewhere</Link>
            </div>
            </div>
        </div>
    )
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col">{show}</div>
            </div>
        </div>
    )
}

export default Article; 
import React, { useEffect, useState } from 'react';
import MemeCard from '../components/MemeCard';
import { getAllMemes } from '../api/memes';

const HomePage=()=>{

    const [data,setData]=useState([]);

    useEffect(()=>{
        getAllMemes()
        .then((meme)=>{
            setData(meme.data.memes);
            console.log(meme);
        })
    },[]);

    return(
        <div className='row'>
            {
                data.map(el=> <MemeCard key={el.id} img={el.url} title={el.name}/>)
            }
        </div>
    );
}

export default HomePage;

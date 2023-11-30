import React,{useState,useEffect} from 'react'
import "./style.scss"
import {useNavigate} from"react-router-dom";
import useFetch from '../../../hooks/useFetch';


function HeroBanner() {
    const [background,setbackground]=useState("");
    const [query,setquery]=useState("");
    const navigate=useNavigate();

    const {data, loading}=useFetch("/movie/upcoming");
    useEffect(()=>{
        const bg=data?.results[Math.floor(Math.random()*20)]?.backdrop_path
        setbackground(bg);

    },[data])
    const searchqueryHandler=(event)=>{
        if(event.key==="Enter"&&query.length>0){
            navigate(`/search/${query}`)
        }
    }
  return (
    <div className='heroBanner'>
        <div className="wrapper">
            <div className="heroBannerContent">
                <span className='title'>Welcome.</span>
                <span className='subTitle'>
                    Millions of movies, TV shows and people
                    to discover,
                    Explore now
                </span>
                <div className="searchInput">
                    <input 
                        type='text'
                        placeholder='Search for movie or tv show....'
                        onKeyUp={searchqueryHandler}
                        onChange={(e)=>setquery(e.target.value)}
                    />
                    <button>Search</button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default HeroBanner
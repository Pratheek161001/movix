
import React, { useRef } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyloadimage/img"; 
import PosterFallback from "../../assets/no-poster.png";
import CircleRating from "../circlerating/CircleRating";

import "./style.scss";
const Carousel = ({ data , loading }) => {
    const carouselContainer = useRef();
    const {url}=useSelector((state)=>state.home);
    const navigate=useNavigate();
    const navigation =(dir)=>{
        
    }
    const skItem=()=>{
        return(
            <div className="skeletonItems">
                <div className="posterBlock">
                    <div className="textBlock">
                        <div className="title skeleton"></div>
                        <div className="date skeleton"></div>

                    </div>
                </div>
            </div>
        )
    }

  return (
    <div className="carousel">
        <ContentWrapper>
            <BsFillArrowLeftCircleFill
                className="carouselLeftNav arrow"
                onClick={()=>navigation('left')}
                />
                <BsFillArrowRightCircleFill
                className="carouselRighttNav arrow"
                onClick={()=>navigation('left')}
                />
                {!loading ? (
                    <div className="carouselItems">
                        {data?.map((item)=>{
                            const posterUrl = item.poster_path ? url.poster + item.poster_path : PosterFallback;
                            return(
                                <div className="carouselItem" key={item.id} >
                                    <div className="posterBlock">
                                        <Img src={posterUrl}/>
                                        <CircleRating rating={item.vote_average.toFixed(1)}/>
                                    </div>
                                    <div className="textBlock">
                                        <span className="title">{item.title || item.name}</span>
                                        <span className="date">{dayjs(item.release_Date).format("MMM D, YYYY")}</span>

                                    </div>
                                </div>
                            )
                        })}
                    </div>
                ) : (
                    <div className="loadingSkeleton">
                        {skItem()}
                        {skItem()}
                        {skItem()}
                        {skItem()}
                        {skItem()}
                    </div>
                )}
        </ContentWrapper>
    </div>
  )
}

export default Carousel
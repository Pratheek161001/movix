import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchtabs/SwitchTabs'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/carousel/Carousel'

const TopRated = () => {
    const [endpoint,Setendpoint]=useState("movie")
    const {data,loading}=useFetch(`/${endpoint}/top_rated`)
    const onTabChange=(tab)=>{
        Setendpoint(tab==='Movies'?'movie':'tv')
    }
  return (
    <div className='carouselSection'>
        <ContentWrapper>
            <span className='carouelTitle'>Top Rated</span>
            <SwitchTabs data={["Movies","TV Shows"]} onTabChange={onTabChange}/>
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading} endpoint={endpoint}/>

    </div>
  )
}

export default TopRated
import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchtabs/SwitchTabs'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/carousel/Carousel'

const Trending = () => {
    const [endpoint,Setendpoint]=useState("day")
    const {data,loading}=useFetch(`/trending/all/${endpoint}`)
    const onTabChange=(tab)=>{
        Setendpoint(tab==='Day'?'day':'week')
    }
  return (
    <div className='carouselSection'>
        <ContentWrapper>
            <span className='carouelTitle'>Trending</span>
            <SwitchTabs data={["Day","Week"]} onTabChange={onTabChange}/>
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading}/>

    </div>
  )
}

export default Trending
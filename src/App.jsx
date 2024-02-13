import { useState ,useEffect } from 'react'
import {BrowserRouter,Routes,Route}from "react-router-dom"
import {fetchDataFromApi} from './utils/api';
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration } from "./store/homeSlice";
import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import Home from "./pages/home/home.jsx"
import Details from "./pages/details/details"
import SearchResult from "./pages/searchResult/searchResult"
import Explore from "./pages/explore/explore"
import PageNotFound from "./pages/pageNotFound/pageNotFound"

function App() {
  const dispatch = useDispatch()
  const {url}=useSelector((state)=>state.home);
  console.log(url);
  
  useEffect(()=>{
    fetchapiconfig();
  },[]);

  const fetchapiconfig=()=>{
    fetchDataFromApi('/configuration')
      .then((res)=>{
        console.log(res);

        const url={
          backdrop:res.images.secure_base_url + "original",
          poster:res.images.secure_base_url + "original",
          profile:res.images.secure_base_url + "original",
        }

        dispatch(getApiConfiguration(url))
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  return (
    <BrowserRouter>
    {/* <Header/> */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/:mediaType:id' element={<Details/>} />
        <Route path='/search/:query' element={<SearchResult/>} />
        <Route path='/explore/:mediaType' element={<Explore/>} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;

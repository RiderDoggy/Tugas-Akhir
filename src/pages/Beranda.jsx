import React from 'react'
import Carousel from '../components/Carousel'
import Artikel from '../components/Artikel'
import Event from '../components/Event'
import VideoPromote from '../components/VideoPromote'
import Postingan from '../components/Postingan'


const beranda=()=>{
    return(
        <>
        <Carousel/>
        <Event/>
        <VideoPromote/>
        <Artikel/>
        <Postingan/>
        </>
    )
}

export default beranda
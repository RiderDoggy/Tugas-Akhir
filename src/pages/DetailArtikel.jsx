import React, {useEffect, useState} from "react"
import { Container} from "react-bootstrap";
import { getArticleListById } from "../api";
import { useParams } from "react-router-dom";
import "../style/detailPost.css"


const DetailArtikel =()=>{
    const [artikelDetail, setArtikelDetail] = useState([])
    const {id} = useParams()
    
    useEffect(()=>{
        getArticleListById(id).then(res =>
            setArtikelDetail(res.data.docs[0]))
    }, [])
    
    console.log(artikelDetail)
    return(
        <>
            <div className="detailPost">
                <img src={artikelDetail.image} alt="" className="fluid postImage"/>
                <Container>
                    <h3 className="postTitle">{artikelDetail.name}</h3>
                    <p className="postParagraph" dangerouslySetInnerHTML={{__html:artikelDetail.description}}></p>
                </Container>
            </div>
        </>
    )
}

export default DetailArtikel
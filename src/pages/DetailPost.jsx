import React, {useEffect, useState} from "react"
import { Container} from "react-bootstrap";
import { getPostListById } from "../api";
import { useParams } from "react-router-dom";
import "../style/detailPost.css"


const DetailPost =()=>{
    const [postDetail, setPostDetail] = useState([])
    const {id} = useParams()
    
    
    useEffect(()=>{
        getPostListById(id).then(res =>
            setPostDetail(res.data))
    }, [])
    
    console.log(postDetail)
    return(
        <>
            <div className="detailPost">
                <img src={postDetail.image} alt="" className="fluid postImage"/>
                <Container>
                    <h3 className="postTitle">{postDetail.name}</h3>
                    <p className="postParagraph" dangerouslySetInnerHTML={{__html:postDetail.description}}></p>
                </Container>
            </div>
        </>
    )
}

export default DetailPost
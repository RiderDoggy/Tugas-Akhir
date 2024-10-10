import React, { useState, useEffect } from "react";
import {Row, Col, Container} from 'react-bootstrap'
import Pagination from "./Pagination";
import '../style/postingan.css'
import { getPostList } from "../api";
import * as icons from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import moment from 'moment'

const Postingan=()=>{
    const [post, setpost] = useState([])

    const [isShow, setIsShow] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const postPerPage = 1
    const [page, setPage] = useState(1)  


    useEffect(()=>{
        setIsLoading(true)
        getPostList(page, postPerPage)
        .then( (response) =>{
          setpost(response.docs);
          if(response?.docs?.length === postPerPage) setIsShow(true)
          setIsLoading(false)
        })
      }, [isShow, page])

    return(
        <>
            <Container className="postingan-container">
                <h1 className="text-center mb-5 mt-5 postingan-title-section">POST</h1>
                { isLoading ? <div className="spinner"></div>:
                <Row className="justify-content-center">
                    {post.map((p, index) =>(
                        <div key={index} className="postingan-wrapper">
                            <Col xl="6"  className="image-postingan-wrapper">
                                <img className="postingan-image fluid" src={p.image} alt="" />
                            </Col>
                            <Col xl="6">
                                <h3 className="postingan-title">
                                    <Link to={`post/${p._id}`} ><h3>{p.name}</h3></Link>
                                </h3>
                                <p className="postingan-text" dangerouslySetInnerHTML={{ __html: p.description }}></p>
                                <div className="utils-postingan">
                                    <p className="created-time">{moment(p.createdAt).format("L")}</p>
                                    
                                    <p className="created-by"><icons.PeopleFill className="postIcons" />Admin</p>
                                </div>
                            </Col>
                        </div>                        
                    ))}
                </Row>
}
                { isShow ?
                    <div className="pagination-button text-center">
                        <Pagination isLoading={isLoading} currentPage={page} setPage={(page) => setPage(page)} totalPages={post?.totalPages} eventLength={post?.docs?.length} eventPerPage={postPerPage} setCurrentPage={post?.page}/>
                    </div>
                    : ""
                    }

            </Container>
        </>
    );
}
export default Postingan
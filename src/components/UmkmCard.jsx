import { useState, React, useEffect } from "react";
import { Container } from "react-bootstrap"
import Pagination from "./Pagination";
import '../style/UmkmCard.css'
import '../style/loadingOverlay.css'
import { getUmkmList } from "../api";
import { Link } from "react-router-dom";


const UmkmCard = () =>{
    const [umkm, setumkm] = useState([])
    const [isShow, setIsShow] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const umkmPerPage = 3
    const [page, setPage] = useState(1)    

    useEffect(()=>{
        setIsLoading(true)    
        getUmkmList(page, umkmPerPage).then((result) =>{
            setumkm(result)
            if(result?.docs?.length === umkmPerPage) setIsShow(true)
            setIsLoading(false)
        })
    }, [isShow, page])


    return(
        <>
            <div className="umkm-section">
                <Container className="pt-5 pb-5">
                    <h3 className="title-section">UMKM</h3>
                    { isLoading ? <div className="spinner">
                        </div> :  umkm?.docs?.map((umkm, i)=>(
                        <div key={i} className="umkmCard-wrapper">
                            <div className="umkmImage-wrapper">
                                <img className="umkmCardImage fluid" src={umkm.image[0]} alt="" />
                            </div>
                            <div className="umkmDeskripsi-wrapper">
                                <Link to={`umkmDetail/${umkm._id}`} ><h3>{umkm.name}</h3></Link>
                                
                                <p dangerouslySetInnerHTML={{__html:umkm.description}}></p>
                            </div>
                        </div>
                    ))}
                    {isShow ?
                    <div className="pagination-button text-center">
                        <Pagination isLoading={isLoading} currentPage={page} setPage={(page) => setPage(page)} totalPages={umkm?.totalPages} eventLength={umkm?.docs?.length} eventPerPage={umkmPerPage} setCurrentPage={umkm?.page}/>
                    </div>
                    : ""
                }
                
                </Container>
            </div>
        </>
    )
}

export default UmkmCard
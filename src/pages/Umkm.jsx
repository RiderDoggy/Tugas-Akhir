// import { useState, React, useEffect } from "react";
// import { Container } from "react-bootstrap"
// import Pagination from "../components/Pagination";
import '../style/UmkmCard.css'
import '../style/loadingOverlay.css'
// import { getUmkmList } from "../api";
// import { Link } from "react-router-dom";
import umkm1 from "../assets/H_Didit.jpg";
import umkm2 from "../assets/Tas.jpg";
import umkm3 from "../assets/SendalHakiki.jpg";
import React from "react";
import { Image, Col, Row, Container } from "react-bootstrap";
import "../style/profile-desa.css";


const Umkm = () =>{
    return (
        <>
          <div className="desaDescriptionContainer">
            <Container className="">
              <Row className="p-5 ms-4 me-4 desaDescriptionRow">
                <Col sm={4}>
                  <Image src={umkm1} className="img-fluid pt-2"></Image>
                </Col>
                <Col sm={8}>
                  <h3 className="desaDescriptionTitle">UMKM Pak Haji Didit</h3>
                  <p className="desaDescriptionParagraph">
                    UMKM Pak Haji Didit bergerak di bidang produksi furniture yang berbahan dasar kayu. <br />
                  </p>
                  <table style={{ border:0}}>
                    <tr>
                        <td>
                            Alamat
                        </td>
                        <td>
                            : 
                        </td>
                        <td>test</td>
                    </tr>
                    <tr>
                        <td>
                            Kontak
                        </td>
                        <td>
                            : 
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            E-Commerce &nbsp;
                        </td>
                        <td>
                            : &nbsp;
                        </td>
                        <td></td>
                    </tr>
                  </table>
                </Col>
              </Row>
            </Container>
          </div>

          <div className="desaDescriptionContainer">
            <Container className="">
              <Row className="p-5 ms-4 me-4 desaDescriptionRow">
                <Col sm={4}>
                  <Image src={umkm2} className="img-fluid pt-2"></Image>
                </Col>
                <Col sm={8}>
                  <h3 className="desaDescriptionTitle">UMKM Pak Olay</h3>
                  <p className="desaDescriptionParagraph">
                    UMKM Pak Olay bergerak di bidang produksi tas dengan beragam model. <br />
                  </p>
                  <table style={{ border:0}}>
                    <tr>
                        <td>
                            Alamat
                        </td>
                        <td>
                            : 
                        </td>
                        <td>test</td>
                    </tr>
                    <tr>
                        <td>
                            Kontak
                        </td>
                        <td>
                            : 
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            E-Commerce &nbsp;
                        </td>
                        <td>
                            : &nbsp;
                        </td>
                        <td></td>
                    </tr>
                  </table>
                </Col>
              </Row>
            </Container>
          </div>

          <div className="desaDescriptionContainer">
            <Container className="">
              <Row className="p-5 ms-4 me-4 desaDescriptionRow">
                <Col sm={4}>
                  <Image src={umkm3} className="img-fluid pt-2"></Image>
                </Col>
                <Col sm={8}>
                  <h3 className="desaDescriptionTitle">UMKM Hakiki Collection</h3>
                  <p className="desaDescriptionParagraph">
                    UMKM Hakiki Collection yang dimiliki oleh Pak Udin ini memproduksi sendal dengan berbagai macam model untuk semua kalangan. <br />
                  </p>
                  <table style={{ border:0}}>
                    <tr>
                        <td>
                            Alamat
                        </td>
                        <td>
                            : 
                        </td>
                        <td>test</td>
                    </tr>
                    <tr>
                        <td>
                            Kontak
                        </td>
                        <td>
                            : 
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            E-Commerce &nbsp;
                        </td>
                        <td>
                            : &nbsp;
                        </td>
                        <td></td>
                    </tr>
                  </table>
                </Col>
              </Row>
            </Container>
          </div>

          </>
          )
        }

    // const [umkm, setumkm] = useState([])
    // const [isShow, setIsShow] = useState(false)
    // const [isLoading, setIsLoading] = useState(true)
    // const umkmPerPage = 3
    // const [page, setPage] = useState(1)    

    // useEffect(()=>{
    //     setIsLoading(true)    
    //     getUmkmList(page, umkmPerPage).then((result) =>{
    //         setumkm(result)
    //         if(result?.docs?.length === umkmPerPage) setIsShow(true)
    //         setIsLoading(false)
    //     })
    // }, [isShow, page])


    // return(
    //     <>
    //         <div className="umkm-section">
    //             <Container className="pt-5 pb-5">
    //                 <h3 className="title-section">UMKM</h3>
    //                 { isLoading ? <div className="spinner">
    //                     </div> :  umkm?.docs?.map((umkm, i)=>(
    //                     <div key={i} className="umkmCard-wrapper">
    //                         <div className="umkmImage-wrapper">
    //                             <img className="umkmCardImage fluid" src={umkm.image[0]} alt="" />
    //                         </div>
    //                         <div className="umkmDeskripsi-wrapper">
    //                             <Link to={`/umkmDetail/${umkm._id}`} ><h3>{umkm.name}</h3></Link>
                                
    //                             <p dangerouslySetInnerHTML={{__html:umkm.description}}></p>
                                
    //                         </div>
    //                     </div>
    //                 ))}
    //                 {isShow ?
    //                 <div className="pagination-button text-center">
    //                     <Pagination isLoading={isLoading} currentPage={page} setPage={(page) => setPage(page)} totalPages={umkm?.totalPages} eventLength={umkm?.docs?.length} eventPerPage={umkmPerPage} setCurrentPage={umkm?.page}/>
    //                 </div>
    //                 : ""
    //             }
                
    //             </Container>
    //         </div>
    //     </>
    // )

export default Umkm
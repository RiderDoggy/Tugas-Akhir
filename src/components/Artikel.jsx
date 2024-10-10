import React, { useEffect, useState } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import Pagination from "./Pagination";
import "../style/artikel.css";
import { getArticleList } from "../api";
import { Link } from "react-router-dom";


const Artikel = () => {
  const[artikel, setArtikel] = useState([])

  const [currentPage, setCurrentPage] = useState(1);
  const [artikelPerPage] = useState(4);

  const lastartikels = currentPage * artikelPerPage;
  const firstartikels = lastartikels - artikelPerPage;
  const currentartikels = artikel.slice(firstartikels, lastartikels);

  const postPerPage = 1
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(1)  
  const [isShow, setIsShow] = useState(false)


  useEffect(()=>{
    getArticleList()
    .then( (response) =>{
      setArtikel(response.data.docs);
      if(response?.docs?.length === postPerPage) setIsShow(true)
      setIsLoading(false)
    })
    .catch( (error) =>{
      console.log(error);
    });
  }, [])


  const ArtikelCard = () => {

    
    return currentartikels.map((artikel, i) => {
      return (
        <Col key={i} md="6" className="pb-4">
          <Card className="p-4 d-flex artikelCardWrapper me-4">
            <Card.Img
              variant="start"
              src={artikel.image}
              className="artikelImage"
            />
            <Card.Body className="p-4">
              <Card.Text className="artikelCardAuthor">{artikel.name}</Card.Text>
              <Card.Title className="artikelCardTitle">
              <Link to={`artikel/${artikel._id}`} ><h3>{artikel.name}</h3></Link>
                </Card.Title>
              <Card.Text className="artikelCardParagraph">
                <span dangerouslySetInnerHTML={{ __html: artikel.description }}></span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      );
    });
  };
  return (
    <>
      <div className="artikelWrapper pt-5">
        <Container className="artikelContainer pt-5">
          <h2 className="text-center artikelTitleWrapper">Artikel</h2>
          {isLoading? <div className="spinner"></div>:
          <Row className="pt-5">
            <ArtikelCard />
          </Row>
}
{ isShow ?
                    <div className="pagination-button text-center">
                        <Pagination isLoading={isLoading} currentPage={page} setPage={(page) => setPage(page)} totalPages={artikel?.totalPages} eventLength={artikel?.docs?.length} eventPerPage={artikelPerPage} setCurrentPage={artikel?.page}/>
                    </div>
                    : ""
                    }
          <div className="pagination-button text-center paginationArtikel-btn">
            <Pagination
              eventLength={artikel.length}
              eventPerPage={artikelPerPage}
              setCurrentPage={setCurrentPage}
            ></Pagination>
          </div>
        </Container>
      </div>
    </>
  );
};
export default Artikel;

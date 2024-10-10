import React, { useState } from "react";
import { Image, Container, Row } from "react-bootstrap";
// import logo from "../assets/logo-kabupaten.png";
// import * as icons from "react-bootstrap-icons";
import "../style/umkmdetail.css";
import { useParams } from "react-router-dom";
import { getUmkmListById } from "../api";


// const images = [
//   {
//     url: "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
//     id: 1,
//   },
//   {
//     url: "https://images.unsplash.com/photo-1503424886307-b090341d25d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
//     id: 2,
//   },
//   {
//     url: "https://images.unsplash.com/photo-1495312040802-a929cd14a6ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
//     id: 3,
//   },
//   {
//     url: "https://images.unsplash.com/photo-1495312040802-a929cd14a6ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
//     id: 4,
//   },
// ];

const DetailUMKM = () => {
      const [umkmDetail, setUmkmDetail] = useState([])
      const {id} = useParams()
      

      getUmkmListById(id).then(res =>setUmkmDetail(res.data))

      
  return (
    <>
      <div className="detailUMKM">
        <Image className="bigImageUmkm" fluid src={umkmDetail.image}></Image>
        <Container>
          <h3 className="umkmTitle p-4 mt-5">{umkmDetail.name}</h3>

          <p className="umkmParagraph pt-2 ps-4 pb-4 pe-4" dangerouslySetInnerHTML={{__html:umkmDetail.description}}>
            
          </p>

          {umkmDetail?.image?.length>1 ?  <h3 className="umkmGalleryTitle pt-5">Gallery</h3> : ""}
         

          <Container className="umkmGalleryContainer">
            {umkmDetail?.image?.length>1 ? umkmDetail.image.map((image, i) => (
              <Row xs={3} key={i}>
                <Image
                  src={image}
                  className="umkmGalleryImage p-4"
                ></Image>
              </Row>
            )): ""}
          </Container>
        </Container>

        {/* <div className="contactContainer p-4">
          <h3 className="contactTitle p-2">Contact</h3>
          <Row>
            <Col md={4} className="contactImgCol p-4">
              <Image src={logo} fluid className="contactImage"></Image>
            </Col>
            <Col md={8} className="contactDescriptionCol">
              <Row md={6}className="contactDescriptionRow mt-2 ps-5">
                <icons.PeopleFill className="contactIcon"/>
                <icons.PeopleFill className="contactIcon"/>
                <icons.PeopleFill className="contactIcon"/>
                <icons.PeopleFill className="contactIcon"/>
              </Row>
            </Col>
          </Row>
        </div> */}
      </div>
    </>
  );
};
export default DetailUMKM;

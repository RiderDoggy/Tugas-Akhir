import React from "react";
import { Image, Col, Row, Container } from "react-bootstrap";
import "../style/profile-desa.css";
import baganDesa from "../assets/baganTanjungsari.svg";
import Topografi from "../components/Topografi";
import logoDesa from "../assets/logo-kabupaten.png";

const Profile = () => {
  return (
    <>
      <div className="desaDescriptionContainer">
        <Container className="">
          <Row className="p-5 ms-4 me-4 desaDescriptionRow">
            <Col sm={4}>
              <Image src={logoDesa} className="img-fluid pt-2"></Image>
            </Col>
            <Col sm={8}>
              <h3 className="desaDescriptionTitle">Desa Tanjungsari</h3>
              <p className="desaDescriptionParagraph">
              Desa Tanjungsari adalah salah satu Desa di wilayah Kecamatan Tanjungsari Kabupaten Bogor dengan Luas Wilayah kurang lebih 760,15 Ha. Dan secara Administrasi terbagi dalam 4 Dusun, 8 RW dan 18 RT. Desa Tanjungsari merupakan desa yang berada di dataran Sedang dengan ketinggian 200-500 m dpl. Sebagian besar wilayah Desa Tanjungsari adalah dataran, hanya sebagian kecil yang merupakan lereng itupun tidak terlalu terjal dengan kemiringan antara 15-40 derajat. Disebelah Selatan dibatasi oleh Gunung Batu dan disebelah Timur dibatasi oleh Jalan Raya Trans Yogi, di sebelah Barat dan Utara dibatasi oleh batas alam berupa kali kecil.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="pemerintahanDescriptionContainer p-4">
        <Container>
        <h3 className="pemerintahanTitle">
          Struktur Pemerintahan Desa Tanjungsari
        </h3>
          <Row className="p-5 ms-4 me-4 kepalaDesaRow">
            {/* <Col sm={8}>
              <h3 className="kepalaDesaTitle">Kepala Desa</h3>
              <p className="kepalaDesaParagraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident laborum rem velit alias doloribus iure eum quas.
                Eaque, corporis tempore a temporibus totam exercitationem itaque
                culpa, deserunt fugit dolore debitis ad molestiae eveniet
                repellat eius alias. Voluptatum repellat ea facere quibusdam
                magnam deleniti officiis quas esse, obcaecati aliquam nesciunt,
                totam eius quo nobis provident cupiditate sapiente assumenda qui
                sequi, ex ratione perferendis aut unde. Repellat expedita totam
                nobis voluptatem quae ut exercitationem aliquam quis inventore
                tenetur, soluta nisi assumenda commodi est dolorum itaque?
                Quaerat minus animi laudantium exercitationem, in quasi deleniti
                recusandae quis temporibus. Quisquam quibusdam odio consequuntur
                veritatis inventore.
              </p>
            </Col> */}
            {/* <Col
              sm={4}
              className="d-flex align-items-center justify-content-end"
            >
              <Image src={logoDesa} className="img-fluid kepalaDesaImg"></Image>
            </Col> */}
          </Row>
        </Container>
        <div className="baganImage">
          <Image src={baganDesa} className="img-fluid mx-auto d-block"></Image>
          {/* <p className="text-center baganAlt">
            Bagan Pemerintahan Desa Tanjungsari
          </p> */}
        </div>
      </div>
      {/* <div className="visiDanMisiContainer p-4">
        <Row className="visiDanMisiRow">
          <Col md={6}>
            <h3 className="text-center visiContainer">Visi Desa Tanjungsari</h3>
            <ul>
              <li>Foya</li>
              <li>Foya</li>
              <li>Foya</li>
              <li>Foya</li>
              <li>Foya</li>
            </ul>
          </Col>
          <Col md={6}>
            <h3 className="text-center misiContainer">Misi Desa Tanjungsari</h3>
            <ul>
              <li>Foya</li>
              <li>Foya</li>
              <li>Foya</li>
              <li>Foya</li>
              <li>Foya</li>
            </ul>
          </Col>
        </Row>
      </div> */}
      <Topografi />
    </>
  );
};

export default Profile;

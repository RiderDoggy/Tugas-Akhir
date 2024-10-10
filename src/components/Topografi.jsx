import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import * as icons from "react-bootstrap-icons";
import "../style/topografi.css";

const Topografi = () => {
  return (
    <div className="topografiContainer pt-4">
      <Container>
        <Row className="pt-4 pb-4 topografiContainerRow">
          <h3 className="text-center topografiTitle">
            Topografi Desa Tanjungsari
          </h3>
          <Col md={6} className="pt-4">
            <iframe
              title="Desa Tanjungsari"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63412.13944792734!2d107.10882783810534!3d-6.614744725395308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69a57e6a557fd7%3A0x6671068155bb67ea!2sKec.%20Tanjungsari%2C%20Kabupaten%20Bogor%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1678783079104!5m2!1sid!2sid"
              
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
          <Col md={6} className="pt-4 topografiIconWrapper">
            <Row className="p-4">
              <Col xs={6} className="text-center">
                <icons.PeopleFill className="topografiIcons" />
                <p className="m-0">6.743</p>
                <p>Penduduk</p>
              </Col>
              <Col xs={6} className="text-center">
                <icons.PeopleFill className="topografiIcons" />
                <p className="m-0">4</p>
                <p>Dusun</p>
              </Col>
            </Row>
            <Row className="p-4">
              <Col xs={6} className="text-center">
                <icons.PeopleFill className="topografiIcons" />
                <p className="m-0">8</p>
                <p>RW</p>
              </Col>
              <Col xs={6} className="text-center">
                <icons.PeopleFill className="topografiIcons" />
                <p className="m-0">18</p>
                <p>RT</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Topografi;

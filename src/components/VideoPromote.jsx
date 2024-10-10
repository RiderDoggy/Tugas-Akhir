import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import '../style/videopromote.css'

const VideoPromote = () => {
  return (
    <div className="videoPromoteWrapper p-5">
      <Container className="videoPromoteContainer">
        <Row className="videoPromoteRow">
          <Col className="xl-6 pt-4">
            <iframe
            className="pe-5 videoFrame responsive-iframe"
              src="https://www.youtube.com/embed/MreF02nlTO8"
            ></iframe>
          </Col>
          <Col className="xl-6 pt-3 videoTextWrapper">
            <h3 className="videoPromoteTitle">Cyber Security</h3>
            <p className="videoPromoteParagraph">Cyber security adalah tindakan untuk melindungi perangkat, jaringan, program, dan data dari ancaman siber dan akses ilegal. Ancaman ini biasanya dilakukan oleh oknum yang tidak bertanggungjawab untuk berbagai macam kepentingan yang merugikan korban.
                                                  Tidak hanya mengincar perusahaan besar, ancaman siber juga menyerang bisnis kecil hingga kalangan pribadi. Contohnya, seperti mengakses informasi sensitif, mengubah atau bahkan menghancurkan data-data penting. Berbagai jenis ancaman siber inilah yang membuat cyber security penting untuk dipahami setiap orang.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default VideoPromote;

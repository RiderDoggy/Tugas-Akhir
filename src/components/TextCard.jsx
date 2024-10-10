import React from "react";
import { Container } from "react-bootstrap";

const TextCard =(p)=>{
    return(
        <>
        <div className="textCard-wrapper p-4">
            <Container className="p-4 visi-misi-box">
              <h2>{p.title}</h2>
              <p>
                {p.text}
              </p>
            </Container>
          </div>
        </>
        
    );
}

export default TextCard;
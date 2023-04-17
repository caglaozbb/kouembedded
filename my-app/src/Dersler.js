import React from "react"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Nav, Navbar, Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

import { logo, backg4, ders } from "./media"
import { embeddedbrosur1 } from "./documents";

export const Dersler = () => {

  function handleEmailClick() {
    window.location.href = "mailto:kouembedded@gmail.com";
  }

return (   

  // NAVBAR
  <Container fluid className="my-container">
  <Navbar sticky="top" expand="lg" style={{backgroundColor: "#e9eef4"}}>
      <Navbar.Brand href="home" ><img className="navbar-logo" src={logo} alt="Gömülü Sistemler Laboratuvarı Logosu"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-styles">
            <Nav.Link href="home">Ana Sayfa</Nav.Link>
            <Nav.Link href="dersler">Dersler</Nav.Link>
            <Nav.Link href="arastirmalar" className="navbarunderline">Araştırmalar</Nav.Link>
            <Nav.Link href="ekibimiz" className="navbarunderline">Ekibimiz</Nav.Link>
            <Nav.Link href="isbirlikcilerimiz">İşbirlikçilerimiz</Nav.Link>
            <Nav.Link href={embeddedbrosur1} without rel="noopener noreferrer" target="_blank">Broşür</Nav.Link>
            <Button className="custom-btn" onClick={handleEmailClick}>Bize Ulaşın</Button>
          </Nav>
      </Navbar.Collapse>
  </Navbar>

  {/* Header (buradaki tüm child elementi için css olusturulmalı mı yoksa özel cssleri olması mı daha dogru olur?)*/}
  <div id="header" className="imageWrapper fontAll">
                <img src={backg4} style={{width:"100%"}} alt="ekibimiz sayfasının arka plan resmi" />
                <h2 className="font400" style={{fontSize:"2.1875vw",position:"absolute", marginLeft:"20%",marginTop:"8%",color:"whitesmoke"}}>DERSLER</h2>
                <h3 className="font900" style={{fontSize:"0.75vw",position:"absolute", marginLeft:"20%",marginTop:"12%",color:"#2c8e32"}}>İŞİMİZİ ÇOK SEVİYORUZ</h3>
                <p className="font300" style={{fontSize:"1vw",color:"whitesmoke",marginLeft:"70%",marginTop:"12%",position:"absolute"}}> Anasayfa / Dersler</p>
                </div>

                <div style={{marginTop:"100px"}} className="fontAll">
                <h3 className="font500" style={{fontSize:"3.125vw", display: "flex", justifyContent: "center"}}>DERSLER</h3>
                <div style={{marginTop:"5%"}}>
                    <CardGroup className="c mx-auto" style={{ display:"flex",width:"50%"}}>
                        <Card>
                          <Card.Img variant="top" src={ders} style={{borderRadius:"0"}}/>
                          <Card.Body style= {{color:"white", textAlign:"center",margin:"0px",padding:"2%"}}>
                           <Card.Text className="font300" style={{color:"#000000",textAlign:"center",fontSize:"1vw", fontStyle:"italic"}}>Gömülü Sistemler <br></br>Ders 1</Card.Text>
                          </Card.Body>
                        </Card>
                        <Card>
                          <Card.Img variant="top" src={ders}  style={{borderRadius:"0"}}/>
                          <Card.Body style= {{color:"white", textAlign:"center",margin:"0px",padding:"2%"}}>
                          <Card.Text className="font300" style={{color:"#000000",textAlign:"center",fontSize:"1vw", fontStyle:"italic"}}>Gömülü Sistemler <br></br>Ders 2</Card.Text>
                          </Card.Body>
                        </Card>
                        <Card>
                          <Card.Img variant="top" src={ders}  style={{borderRadius:"0"}}/>
                          <Card.Body style= {{color:"white", textAlign:"center",margin:"0px",padding:"2%"}}>
                          <Card.Text className="font300" style={{color:"#000000", textAlign:"center",fontSize:"1vw", fontStyle:"italic"}}>Gömülü Sistemler <br></br>Ders 3</Card.Text>
                          </Card.Body>
                        </Card>
                  </CardGroup>
                  </div> 
                  <div style={{marginTop:"5%"}}>
                    <CardGroup className="c mx-auto" style={{ display:"flex",width:"50%"}}>
                        <Card>
                          <Card.Img variant="top" src={ders} style={{borderRadius:"0"}}/>
                          <Card.Body style= {{color:"white", textAlign:"center",margin:"0px",padding:"2%"}}>
                           <Card.Text className="font300" style={{color:"#000000",textAlign:"center",fontSize:"1vw", fontStyle:"italic"}}>Gömülü Sistemler <br></br>Ders 1</Card.Text>
                          </Card.Body>
                        </Card>
                        <Card>
                          <Card.Img variant="top" src={ders}  style={{borderRadius:"0"}}/>
                          <Card.Body style= {{color:"white", textAlign:"center",margin:"0px",padding:"2%"}}>
                          <Card.Text className="font300" style={{color:"#000000",textAlign:"center",fontSize:"1vw", fontStyle:"italic"}}>Gömülü Sistemler <br></br>Ders 2</Card.Text>
                          </Card.Body>
                        </Card>
                        <Card>
                          <Card.Img variant="top" src={ders}  style={{borderRadius:"0"}}/>
                          <Card.Body style= {{color:"white", textAlign:"center",margin:"0px",padding:"2%"}}>
                          <Card.Text className="font300" style={{color:"#000000", textAlign:"center",fontSize:"1vw", fontStyle:"italic"}}>Gömülü Sistemler <br></br>Ders 3</Card.Text>
                          </Card.Body>
                        </Card>
                  </CardGroup>
                  </div> 
                  </div>


  {/* CONTACT */}
  <div className="contact" style={{marginTop:"5%", backgroundColor: "#e9eef4"}}>
             <CardGroup className="a" style={{justifyContent:"center", display:"flex",marginRight:"150px", marginLeft:"150px"}}>
                  <Card  style={{borderRadius:"0px", height:"150px",borderWidth:"0px",wordWrap:"break-word",marginBottom:"25px",marginTop:"10px"}} >
                    <Card.Body className="fontlight" style= {{color:"#2c8e32", textAlign:"center",fontSize:"15px",backgroundColor: "#e9eef4"}}>
                      <Card.Text  className="font500" style={{fontSize:"18px"}}>Adres</Card.Text>
                      <Card.Text  className="font300" style={{padding:"0px",margin:"0"}}>Kocaeli Üniversitesi<br></br>Mühendislik<br></br>B Fakültesi<br></br>İzmit / Kocaeli</Card.Text>
                    </Card.Body>
                  </Card>
                  <Card  style={{borderRadius:"0px", height:"150px",borderWidth:"0px",wordWrap:"break-word",marginBottom:"25px",marginTop:"10px"}}>
                  <Card.Body className="fontlight" style= {{color:"#2c8e32", textAlign:"center",fontSize:"15px",backgroundColor: "#e9eef4"}}>
                      <Card.Text  className="font500"  style={{fontSize:"18px"}}>Çalışma Saatleri</Card.Text>
                      <Card.Text  className="font300">08:00 - 17:30</Card.Text>
                      <Card.Text  className="font300">Pazartesi - Cuma</Card.Text>
                    </Card.Body>
                  </Card>
                  <Card style={{borderRadius:"0px", height:"150px",borderWidth:"0px",wordWrap:"break-word",marginBottom:"25px",marginTop:"10px"}}>
                  <Card.Body className="fontlight" style= {{color:"#2c8e32", textAlign:"center",fontSize:"15px",backgroundColor: "#e9eef4"}}>
                      <Card.Text  className="font500"  style={{fontSize:"18px",}}>E-Mail</Card.Text>
                      <Card.Text  className="font300" style={{padding:"0px", margin:"0px"}}>embedded@kocaeli.edu.tr</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
             </div>
             
  {/* Copyrights */}
             <div id="copyright" className="copyright">
              <h1>2022 KOU Embedded System Laboratory - All Rights Reserved.</h1>
              <h1>Developed by ...</h1>
             </div>
        </Container>
  );

};

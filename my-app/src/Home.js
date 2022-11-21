import React from "react";
import {  Container, Nav, Navbar, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/logo.png';
// import backg from './images/backg.png';
// import backg2 from './images/backg2.png';
import backg3 from './images/backg3.png';
import iconogrenci from './images/iconogrenci.png'
import iconproje from './images/iconproje.png'
import iconyayin from './images/iconyayin.png'
import './App.css';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Carousel from 'react-bootstrap/Carousel'


export const Home = () => {

return (   
        <div>
              <div className="Navbar fontAll">
                <Navbar sticky="top" expand="lg" style={{backgroundColor: "#e9eef4"}}>
                    <Navbar.Brand href="home"><img src={logo} className="d-inline-block align-top justify-content-start d-flex"  alt="Logo" style={{width:150, margin:10, marginLeft:20}}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Container>
                        <Nav className="me-auto justify-content-end fontAll" style={{fontSize: 14}} >
                          <Nav.Link href="#" style={{marginRight: 20}}>Ana Sayfa</Nav.Link>
                          <Nav.Link href="#" style={{marginRight: 20}}>Dersler</Nav.Link>
                          <Nav.Link href="#" style={{marginRight: 20,textDecorationLine:"underline", textDecorationColor:"#2c8e32",textDecorationThickness:1,textUnderlineOffset:10}}>Araştırmalar</Nav.Link>
                          <Nav.Link href="#" style={{marginRight: 20,textDecorationLine:"underline", textDecorationColor:"#2c8e32",textDecorationThickness:1,textUnderlineOffset:10}}>Ekibimiz</Nav.Link>
                          <Nav.Link href="#" style={{marginRight: 20}}>İşbirlikçilerimiz</Nav.Link>
                          <Nav.Link href="#" style={{marginRight: 20}}>Broşür</Nav.Link>
                          <Button variant="primary" style={{borderRadius:30, backgroundColor:"#2c8e32",borderWidth:0}}>Bize Ulaşın</Button>
                        </Nav>
                      </Container>
                    </Navbar.Collapse>
                </Navbar>
              </div>
              <div className="imageWrapper fontAll">
                <img src={backg3} className="background-image image" style={{width:"100%", height:"20%"}} alt="background" />
                <h2 className="imageTexth1" style={{fontWeight:"lighter"}}>KOCAELİ ÜNİVERSİTESİ</h2>
                <h3 className="imageTexth2"style={{fontWeight:"bolder"}}>GÖMÜLÜ SİSTEMLER LABORATUVARI</h3>
                <p className="imageTextp"> Gömülü ve Sensör Sistemleri Laboratuvarı, Kocaeli Üniversitesi Mühendislik Fakültesi çatısı altında faaliyet gösteren bir araştırma ve geliştirme laboratuvarıdır. Lisans, yüksek lisans ve doktora öğrencilerimizin mühendislik alanlarında deneyim kazanmaları ve uzmanlaşmaları hedeflenmektedir.</p>
                
             </div> 
             <div>
             <CardGroup className="a">
                  <Card  style={{ backgroundColor:"#2c8e32", borderRadius:"0", borderRightColor:"white", borderRightHeight:"5"}} >
                    <Card.Img variant="top" src={iconogrenci} style={{ width: 50, height: 50 , alignSelf:"center" , marginTop:12}}/>
                    <Card.Body style= {{color:"white", textAlign:"center"}}>
                      <Card.Text  style={{fontWeight:"lighter"}}>Yüksek Lisans ve Lisans Öğrencileri</Card.Text>
                      <Card.Text className="fontbold">
                      20+
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card  style={{backgroundColor:"#04a151" , borderRadius:"0", borderRightColor:"white"}}>
                    <Card.Img variant="top" src={iconyayin} style={{ width: 50, height:50 , alignSelf:"center" , marginTop:15}} />
                    <Card.Body style= {{color:"white", textAlign:"center"}}>
                      <Card.Text  style={{fontWeight:"lighter"}}>Yayınlar</Card.Text>
                      <Card.Text className="fontbold">
                        70+
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card style={{ backgroundColor:"#2c8e32" , borderRadius:"0" }}>
                    <Card.Img variant="top" src={iconproje} style={{ width: 35, height:50 , alignSelf:"center", marginTop:12}} />
                    <Card.Body style= {{color:"white", textAlign:"center"}}>
                      <Card.Text  style={{fontWeight:"lighter"}}>Tamamlanmış Proje</Card.Text>
                      <Card.Text className="fontbold">
                        10+
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
             </div>
             <div>
                  <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src="holder.js/800x400?text=First slide&bg=f5f5f5"
                          alt="First slide"
                        />
                        <Carousel.Caption>
                          <h5>First slide label</h5>
                          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src="holder.js/800x400?text=Second slide&bg=eee"
                          alt="Second slide"
                        />
                        <Carousel.Caption>
                          <h5>Second slide label</h5>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src="holder.js/800x400?text=Third slide&bg=e5e5e5"
                          alt="Third slide"
                        />
                        <Carousel.Caption>
                          <h5>Third slide label</h5>
                          <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                          </p>
                        </Carousel.Caption>
                    </Carousel.Item>
              </Carousel>
             </div>
        </div>
  );

};

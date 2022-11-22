import React from "react";
import {  Container, Nav, Navbar, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/logo.png';
import backg2 from './images/backg-2.png';
import backg3 from './images/backg3.png';
import iconogrenci from './images/iconogrenci.png'
import iconproje from './images/iconproje.png'
import iconyayin from './images/iconyayin.png'
import iconeye from './images/iconeye.png'
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
             {/* TODO: cardların arasını 0la ve aralarını beyaz cizgilerle belirle */}
             <div>
             <CardGroup className="a" style={{justifyContent:"center", display:"flex",marginRight:"150px", marginLeft:"150px"}}>
                  <Card  style={{ backgroundColor:"#2c8e32", borderRadius:"0", width:"250px", height:"225px",borderRightWidth:"1"}} >
                    <Card.Img variant="top" src={iconogrenci} style={{ width: 50, height: 50 , alignSelf:"center" , marginTop:12}}/>
                    <Card.Body style= {{color:"white", textAlign:"center"}}>
                      <Card.Text  style={{fontWeight:"lighter",fontSize:"22px"}}>Yüksek Lisans ve Lisans</Card.Text>
                      <Card.Text  style={{fontWeight:"lighter", alignSelf:"center",fontSize:"22px"}}>Öğrencileri</Card.Text>
                      <Card.Text className="fontnormal" style={{fontSize:"35px"}}>20+</Card.Text>
                    </Card.Body>
                  </Card>
                  <Card  style={{backgroundColor:"#04a151" , borderRadius:"0", width:"250px", height:"225px"}}>
                    <Card.Img variant="top" src={iconyayin} style={{ width: 50, height:50 , alignSelf:"center" , marginTop:15}} />
                    <Card.Body style= {{color:"white", textAlign:"center"}}>
                      <Card.Text  style={{fontWeight:"lighter",fontSize:"22px"}}>Yayınlar</Card.Text>
                      <Card.Text className="fontnormal" style={{fontSize:"35px"}}>70+</Card.Text>
                    </Card.Body>
                  </Card>
                  <Card style={{ backgroundColor:"#2c8e32" , borderRadius:"0", width:"250px", height:"225px" }}>
                    <Card.Img variant="top" src={iconproje} style={{ width: 35, height:50 , alignSelf:"center", marginTop:12}} />
                    <Card.Body style= {{color:"white", textAlign:"center"}}>
                      <Card.Text  style={{fontWeight:"lighter",fontSize:"22px"}}>Tamamlanmış Proje</Card.Text>
                      <Card.Text className="fontnormal" style={{fontSize:"35px"}}>10+</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
             </div>
             {/* TODO:Carousele 3 kart eklenecek icon ve yazıların yerleri düzeltilecek: */}
             <div>
                  <Carousel variant="dark" className="a" style={{justifyContent:"center", display:"flex",margin:"50"}}>
                    <Carousel.Item>
                        <img src={iconeye} alt="First slide" style={{width:"5%", display:"flex", margin:"auto"}}/>
                        <Carousel.Caption>
                          <h1>Bilgisayarlı Görü</h1>
                          <p>Farklı alanlardaki çeşitli ihtiyaçlar için derin öğrenme modellerine dayalı nesne tanımlama sistemleri geliştiriyoruz.
                            Bilgisayarlı görü ekibimiz, görüntü, video ve akış girdileri üzerindeki nesneleri algılamak ve tespit etmek için
                            çeşitli modüler çözümler geliştirmektir.
                          </p>
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
             {/* TODO: Contact kısmı doldurulacak */}
              <div className="imageWrapper fontAll">
                <img src={backg2} className="background-image image" style={{width:"100%", height:"20%"}} alt="background2"/>   
                <h3 className="imageprojeTexth1 font400 borderBottom" style={{fontSize:"75"}}>PROJELERİMİZ</h3>
             </div> 
             <div>
              <h1>contact</h1>
             </div>
             {/* FIXME: Divin uzunlugu arttıralacak, ve paragraflar arası bosluk azaltılacak. */}
             <div style={{backgroundColor:"#2c8e32"}}>
              <h3 style={{color:"white",justifyContent:"center", display:"flex",fontWeight:"lighter",fontSize:"20px"}}>2022 KOU Embedded System Laboratory - All Rights Reserved.</h3>
              <h3 style={{color:"white",justifyContent:"center", display:"flex",fontWeight:"lighter",fontSize:"20px"}}>Developed by ...</h3>
             </div>
        </div>
  );

};

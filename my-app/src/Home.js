import React from "react"
import {  Container, Nav, Navbar, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './images/logo.png'
import backg2 from './images/backg-2.png'
import backg3 from './images/backg3.png'
import iconogrenci from './images/iconogrenci.png'
import iconproje from './images/iconproje.png'
import iconyayin from './images/iconyayin.png'
import iconeye from './images/iconeye.png'
import './App.css'
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
                <p className="imageTextp"> Gömülü ve Sensör Sistemleri Laboratuvarı, Kocaeli Üniversitesi Mühendislik Fakültesi<br></br> çatısı altında faaliyet gösteren bir araştırma ve geliştirme laboratuvarıdır.<br></br> Lisans, yüksek lisans ve doktora öğrencilerimizin mühendislik alanlarında deneyim <br></br>  kazanmaları ve uzmanlaşmaları hedeflenmektedir.</p>
             </div> 
             {/* TODO: cardların arasını 0la ve aralarını beyaz cizgilerle belirle */}
             <div>
             <CardGroup className="a" style={{justifyContent:"center", display:"flex",marginRight:"150px", marginLeft:"150px"}}>
                  <Card  style={{ backgroundColor:"#2c8e32", borderRadius:"0", width:"250px", height:"225px",borderRightWidth:"1"}} >
                    <Card.Img variant="top" src={iconogrenci} style={{ width: 50, height: 50 , alignSelf:"center" , marginTop:12}}/>
                    <Card.Body style= {{color:"white", textAlign:"center"}}>
                      <Card.Text  style={{fontWeight:"lighter",fontSize:"22px",padding:"0px", margin:"0px"}}>Yüksek Lisans ve Lisans</Card.Text>
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
                        <img src={iconeye} alt="First slide" style={{width:"8%", display:"flex",margin:"100px",marginLeft:"400px",marginTop:"50px",marginBottom:"100px"}}/>
                        <div style={{marginTop:"145px"}}>
                        <Carousel.Caption >
                          <h1 style={{fontSize:"60px",margin:"100px",marginLeft:"300px",marginBottom:"0px",marginTop:"1000px"}} >Bilgisayarlı Görü</h1>
                          <div>
                          <p style={{textAlign:"left",marginLeft:"300px",fontSize:"20px"}}>Farklı alanlardaki çeşitli ihtiyaçlar için derin öğrenme <br></br> modellerine dayalı nesne tanımlama sistemleri geliştiriyoruz.<br></br>
                            Bilgisayarlı görü ekibimiz, görüntü, video ve akış girdileri<br></br> üzerindeki nesneleri algılamak ve tespit etmek için <br></br>çeşitli modüler çözümler geliştirmektir.
                          </p>
                          </div>
                        </Carousel.Caption>
                        </div>
                    </Carousel.Item>
              </Carousel>
             </div>
              <div className="imageWrapper fontAll">
                <img src={backg2} className="background-image image" style={{width:"100%", height:"20%"}} alt="background2"/>   
                <h3 className="imageprojeTexth1 font500" style={{fontSize:"70px"}}>PROJELERİMİZ</h3>
             </div> 
             <div>
             <CardGroup className="a" style={{justifyContent:"center", display:"flex",marginRight:"150px", marginLeft:"150px"}}>
                  <Card  style={{borderRadius:"0px", height:"150px",borderWidth:"0px",wordWrap:"break-word",marginBottom:"25px",marginTop:"10px"}} >
                    <Card.Body className="fontlight" style= {{color:"#2c8e32", textAlign:"center",fontSize:"15px"}}>
                      <Card.Text  className="font500" style={{fontSize:"18px"}}>Adres</Card.Text>
                      <Card.Text  className="font300" style={{textAlign:"start",padding:"0px",margin:"0",marginLeft:"100px"}}>Kocaeli Üniversitesi<br></br>Mühendislik<br></br>B Fakültesi<br></br>İzmit / Kocaeli</Card.Text>
                    </Card.Body>
                  </Card>
                  <Card  style={{borderRadius:"0px", height:"150px",borderWidth:"0px",wordWrap:"break-word",marginBottom:"25px",marginTop:"10px"}}>
                    <Card.Body className="fontlight" style= {{color:"#2c8e32", textAlign:"center",fontSize:"15px"}}>
                      <Card.Text  className="font500"  style={{fontSize:"18px"}}>Çalışma Saatleri</Card.Text>
                      <Card.Text  className="font300" style={{textAlign:"start",padding:"0px",margin:"0",marginLeft:"100px"}}>08:00 - 17:30</Card.Text>
                      <Card.Text  className="font300" style={{textAlign:"start",padding:"0px",margin:"0",marginLeft:"100px"}}>Pazartesi - Cuma</Card.Text>
                    </Card.Body>
                  </Card>
                  <Card style={{borderRadius:"0px", height:"150px",borderWidth:"0px",wordWrap:"break-word",marginBottom:"25px",marginTop:"10px"}}>
                    <Card.Body className="fontlight" style= {{color:"#2c8e32", textAlign:"center",fontSize:"15px"}}>
                      <Card.Text  className="font500"  style={{fontSize:"18px",}}>E-Mail</Card.Text>
                      <Card.Text  className="font300" style={{padding:"0px", margin:"0px"}}>embedded@kocaeli.edu.tr</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
             </div>
             <div style={{backgroundColor:"#2c8e32", width:"auto",paddingTop:"25px",paddingBottom:"20px"}}>
              <h3 style={{color:"white",justifyContent:"center", display:"flex",fontWeight:"lighter",fontSize:"22px"}}>2022 KOU Embedded System Laboratory - All Rights Reserved.</h3>
              <h3 style={{color:"white",justifyContent:"center", display:"flex",fontWeight:"lighter",fontSize:"22px"}}>Developed by ...</h3>
             </div>
        </div>
  );

};

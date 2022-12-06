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
import proje1 from './images/proje1.png'
import proje2 from './images/proje2.png'
import proje3 from './images/proje3.png'
import iconai from './images/iconai.png'
import iconpc from './images/iconpc.png'
import './App.css'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Carousel from 'react-bootstrap/Carousel'

// TODO: fotografları importlamak icin index.js doyası olusturup icinde exporlaman ve daha sonra kullanacagın dosyalarda topluca importlayabilirsin
export const Home = () => {

return (   

  // NAVBAR
        <div >
              <div className="Navbar fontAll">
                <Navbar sticky="top" expand="lg" style={{backgroundColor: "#e9eef4"}}>
                    <Navbar.Brand href="home"><img src={logo} className="d-inline-block align-top justify-content-start d-flex"  alt="Logo" style={{width:150, margin:10, marginLeft:20}}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Container>
                        <Nav className="me-auto justify-content-end fontAll" style={{fontSize: 14}} >
                          <Nav.Link href="#" style={{marginRight: 20}}>Ana Sayfa</Nav.Link>
                          <Nav.Link href="#" style={{marginRight: 20}}>Dersler</Nav.Link>
                          <Nav.Link href="#" className="navbarunderline">Araştırmalar</Nav.Link>
                          <Nav.Link href="#" className="navbarunderline">Ekibimiz</Nav.Link>
                          <Nav.Link href="#" style={{marginRight: 20}}>İşbirlikçilerimiz</Nav.Link>
                          <Nav.Link href="#" style={{marginRight: 20}}>Broşür</Nav.Link>
                          <Button variant="primary" style={{borderRadius:30, backgroundColor:"#2c8e32",borderWidth:0}}>Bize Ulaşın</Button>
                        </Nav>
                      </Container>
                    </Navbar.Collapse>
                </Navbar>
              </div>

  {/* LANDINGPAGE */}
              <div className="imageWrapper fontAll">
                <img src={backg3} className="image" style={{height:"20%"}} alt="background" />
                <h2 className="imageTexth1 fontlight" style={{fontSize:"2.8125vw"}}>KOCAELİ ÜNİVERSİTESİ</h2>
                <h3 className="imageTexth2 font900" style={{fontSize:"2.1875vw"}}>GÖMÜLÜ SİSTEMLER LABORATUVARI</h3>
                <p className="imageTextp font300" style={{fontSize:"1.25vw"}}> Gömülü ve Sensör Sistemleri Laboratuvarı, Kocaeli Üniversitesi Mühendislik Fakültesi çatısı altında faaliyet gösteren bir araştırma ve geliştirme laboratuvarıdır. Lisans, yüksek lisans ve doktora öğrencilerimizin mühendislik alanlarında deneyim kazanmaları ve uzmanlaşmaları hedeflenmektedir.</p>
                <div style={{position:"absolute",marginTop:"40%",width:"100%"}}>
                    <CardGroup style={{justifyContent:"center", display:"flex",marginRight:"15%",marginLeft:"15%"}}>
                      <Card style={{backgroundColor:"#2c8e32",height:"auto",borderRightColor:"whitesmoke",borderRightWidth:"2px"}} >
                        <Card.Img variant="top" src={iconogrenci} style={{width:"15%", alignSelf:"center" , marginTop:"10%"}}/>
                        <Card.Body style= {{color:"white", textAlign:"center"}}>
                          <Card.Text  style={{fontWeight:"lighter",fontSize:"1.375vw"}}>Yüksek Lisans ve Lisans <br></br>Öğrencileri</Card.Text>
                          <Card.Text className="fontnormal" style={{fontSize:"2.1875vw"}}>20+</Card.Text>
                        </Card.Body>
                      </Card>
                      <Card  style={{backgroundColor:"#04a151",height:"auto",borderRightColor:"whitesmoke",borderRightWidth:"2px"}}>
                        <Card.Img variant="top" src={iconyayin} style={{width:"15%", alignSelf:"center" , marginTop:"10%"}} />
                        <Card.Body style= {{color:"white", textAlign:"center"}}>
                          <Card.Text  style={{fontWeight:"lighter",fontSize:"1.375vw", marginTop:"5%"}}>Yayınlar</Card.Text>
                          <br></br>
                          <Card.Text className="fontnormal" style={{fontSize:"2.1875vw"}}>70+</Card.Text>
                        </Card.Body>
                      </Card>
                      <Card style={{backgroundColor:"#2c8e32",height:"auto"}}>
                        <Card.Img variant="top" src={iconproje} style={{width:"10%", alignSelf:"center", marginTop:"10%"}} />
                        <Card.Body style= {{color:"white", textAlign:"center"}}>
                          <Card.Text  style={{fontWeight:"lighter",fontSize:"1.375vw"}}>Tamamlanmış Proje</Card.Text>
                          <br></br>
                          <Card.Text className="fontnormal" style={{fontSize:"2.1875vw"}}>10+</Card.Text>
                        </Card.Body>
                      </Card>
                    </CardGroup>
                  </div>
             </div>

  {/* YAPILANLAR */}
  {/* FIXME: slide true yap  */}
             <div style={{height:"450px",width:"100%"}}>
                  <Carousel slide={true} indicators={false}  variant="dark" className="a" style={{justifyContent:"center", display:"flex",margin:"50px",marginTop:"200px",marginBottom:"0px"}}>
                    <Carousel.Item>
                        <img src={iconeye} alt="First slide" style={{width:"10%", display:"flex",marginLeft:"25%",marginTop:"5%"}}/>
                        <div style={{marginTop:"15%"}}>
                        <Carousel.Caption >
                          <h1 className="fontnormal" style={{fontSize:"3.125vw",marginBottom:"10%",marginLeft:"10%"}} >BİLGİSAYARLI GÖRÜ</h1>
                          <div>
                          <p style={{textAlign:"start",fontSize:"1.25vw",marginLeft:"10%",marginRight:"10%"}}>Farklı alanlardaki çeşitli ihtiyaçlar için derin öğrenme  modellerine dayalı nesne tanımlama sistemleri geliştiriyoruz.
                            Bilgisayarlı görü ekibimiz, görüntü, video ve akış girdileri üzerindeki nesneleri algılamak ve tespit etmek için çeşitli modüler çözümler geliştirmektir.
                          </p>
                          </div>
                        </Carousel.Caption>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={iconai} alt="First slide" style={{width:"10%", display:"flex",marginLeft:"25%",marginTop:"5%"}}/>
                        <div style={{marginTop:"15%"}}>
                        <Carousel.Caption >
                          <h1 className="fontnormal" style={{fontSize:"3.125vw",marginLeft:"15%",marginBottom:"10%"}} >YAPAY ZEKA ÇÖZÜMLERİ</h1>
                          <div>
                          <p style={{textAlign:"start",fontSize:"1.25vw",marginLeft:"10%",marginRight:"10%"}}>Gömülü sistemler laboratuvarı içerisinde yapay zekâ alanında Makine Öğrenmesi, Derin Öğrenme, Doğal Dil İşleme ve 
                          Bilgisayarlı Görü gibi alanlardaki bilgi birikimlerinden faydalanarak işletmelerin sorunlarına ve isterlerine ideal ve etkili çözümler üretilmektedir.
                          </p>
                          </div>
                        </Carousel.Caption>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={iconpc} alt="First slide" style={{width:"10%", display:"flex",marginLeft:"25%",marginTop:"5%"}}/>
                        <div style={{marginTop:"15%"}}>
                        <Carousel.Caption >
                          <h1 className="fontnormal" style={{fontSize:"3.125vw",marginLeft:"15%",marginBottom:"7%"}} >YAZILIM GELİŞTİRME</h1>
                          <div>
                          <p style={{textAlign:"start",fontSize:"1.25vw",marginLeft:"10%",marginRight:"10%",marginTop:"5%"}}>Yazılım geliştirme ekibimiz ile işletmelerin isteğine göre geliştirilecek projenin zamanını ve maliyetini tahmin etmekte ve sonrasında ürün tasarımı ve geliştirme 
                          aşamalarını gerçekleştirmekteyiz. Son aşamada ürünün test sürecini tamamlayıp projeyi teslime hazır hale getirmekteyiz.
                          </p>
                          </div>
                        </Carousel.Caption>
                        </div>
                    </Carousel.Item>
              </Carousel>
             </div>

  {/* PROJELER */}
  {/* TODO:kalan proje kartları eklenecek
      TODO:carousel indicator kaldırılacak
      TODO:detaylar kısmı düzeltilecek
      TODO:responsive yapılacak. 
      FIXME:sağ ve soldaki cardların koseleri duzeltilecek*/}
             <div className="imageWrapper fontAll">
                <img src={backg2} className="image" style={{height:"20%"}} alt="background2"/>   
                <h3 className="imageprojeTexth1 font500" style={{fontSize:"4.375vw"}}>PROJELERİMİZ</h3>
                <div style={{position:"absolute",marginTop:"20%",width:"100%"}}>
                <Carousel slide={true} indicators={false} className="a" style={{justifyContent:"center", display:"flex",width:"auto"}}>
                  <Carousel.Item>
                    <CardGroup className="a" style={{justifyContent:"center", display:"flex",marginRight:"150px", marginLeft:"150px"}}>
                        <Card className="backgroundcard">
                          <Card.Img variant="top" src={proje1} style={{alignSelf:"center"}}/>
                          <Card.Body style= {{color:"white", textAlign:"center"}}>
                           <Card.Text className="font500" style={{textAlign:"start",fontSize:"1.25vw",padding:"0px", margin:"0px"}}>YASAKLI ALAN <br></br> İHLALİ TESPİTİ<br></br></Card.Text>
                            <br></br>
                            <br></br>
                            <Card.Text className="font400" style={{fontSize:"1vw", textAlign:"start"}}>Fabrikadaki forklift kazalarını gidermek amacıyla...</Card.Text>
                            <Card.Text className="fontnormal" style={{fontSize:"1vw", textAlign:"end"}}>Detaylar &gt;</Card.Text>
                          </Card.Body>
                        </Card>
                        <Card className="backgroundcard">
                          <Card.Img variant="top" src={proje2} style={{alignSelf:"center"}} />
                          <Card.Body style= {{color:"white", textAlign:"center",opacity:"100%"}}>
                            <Card.Text className="font500" style={{textAlign:"start",fontSize:"1.25vw",padding:"0px", margin:"0px"}}>DİJİTAL GÖSTERGE<br></br></Card.Text>
                            <br></br>
                            <br></br>
                            <br></br>
                            <Card.Text className="font400" style={{fontSize:"1vw", textAlign:"start"}}>Günümüzde birçok sistem akıllı hale gelmişken yakıt olarak tüp...</Card.Text>
                            <Card.Text className="fontnormal" style={{fontSize:"1vw", textAlign:"end",paddingTop:"6px"}}>Detaylar &gt;</Card.Text>
                          </Card.Body>
                        </Card>
                        <Card className="backgroundcard">
                          <Card.Img variant="top" src={proje3} style={{alignSelf:"center"}}/>
                          <Card.Body style= {{color:"white", textAlign:"center"}}>
                            <Card.Text className="font500" style={{textAlign:"start",fontSize:"1.25vw",padding:"0px", margin:"0px"}}>TÜP KİRLİLİK TESTİ<br></br></Card.Text>
                            <br></br>
                            <br></br>
                            <br></br>
                            <Card.Text className="font400" style={{fontSize:"1vw", textAlign:"start"}}>Projede tüplerin üzerindeki kirli bölgelerin tespiti ve...</Card.Text>
                            <Card.Text className="fontnormal" style={{fontSize:"1vw", textAlign:"end",paddingTop:"6px"}}>Detaylar &gt;</Card.Text>
                          </Card.Body>
                        </Card>
                  </CardGroup>
                </Carousel.Item>
              </Carousel>
              </div>
             </div> 

  {/* CONTACT */}
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
                      <Card.Text  className="font300" style={{textAlign:"start",padding:"0px",margin:"0",marginLeft:"65px"}}>08:00 - 17:30</Card.Text>
                      <Card.Text  className="font300" style={{textAlign:"start",padding:"0px",margin:"0",marginLeft:"65px"}}>Pazartesi - Cuma</Card.Text>
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
  {/* SING */}
             <div style={{backgroundColor:"#2c8e32", width:"auto",paddingTop:"25px",paddingBottom:"20px"}}>
              <h3 style={{color:"white",justifyContent:"center", display:"flex",fontWeight:"lighter",fontSize:"22px"}}>2022 KOU Embedded System Laboratory - All Rights Reserved.</h3>
              <h3 style={{color:"white",justifyContent:"center", display:"flex",fontWeight:"lighter",fontSize:"22px"}}>Developed by ...</h3>
             </div>
        </div>
  );

};

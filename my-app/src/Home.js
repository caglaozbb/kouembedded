import React from "react"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card, CardGroup, Carousel, Container, Nav, Navbar } from 'react-bootstrap';


import { logo, backg1, backg2, iconogrenci, iconproje, iconyayin, iconeye, proje1, proje2, proje3, proje4, proje5, proje6, iconai, iconpc } from './images'
import { embeddedbrosur1 } from "./documents"

export const Home = () => {

  function handleEmailClick() {
    window.location.href = "mailto:kouembedded@gmail.com"
  }

return (   

  // navbar
        <Container fluid className="my-container">
                <Navbar sticky="top" expand="lg" style={{backgroundColor: "#e9eef4"}}>
                    <Navbar.Brand href="home" ><img className="navbar-logo" src={logo} alt="Embedded lab logo"/></Navbar.Brand>
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
                
  {/* landingpage */}
            {/* FIXME:GORSELLERIN BOYUTLARINI AYNI AYARLA! */}
            <Container fluid className="my-container imageWrapper fontAll">
              <img src={backg1} className="imageHome" alt="home background"/>
                <h2 className="homeTexth2">KOCAELİ ÜNİVERSİTESİ</h2>
                <h3 className="homeTexth3">GÖMÜLÜ SİSTEMLER LABORATUVARI</h3>
                <p className="homeTextp"> Gömülü ve Sensör Sistemleri Laboratuvarı, Kocaeli Üniversitesi Mühendislik Fakültesi çatısı altında faaliyet gösteren bir araştırma ve geliştirme laboratuvarıdır. Lisans, yüksek lisans ve doktora öğrencilerimizin mühendislik alanlarında deneyim kazanmaları ve uzmanlaşmaları hedeflenmektedir.</p>
  {/* stats */}
                <Container fluid className="my-container stat-container">
                    <CardGroup className="card-group-stats">
                      <Card className="card-stats">
                        <Card.Img variant="top" src={iconogrenci} className="card-img-top-stats"/>
                        <Card.Body className="card-body">
                          <Card.Text className="stats-card-text ">Yüksek Lisans ve Lisans <br></br>Öğrencileri</Card.Text>
                          <Card.Text className="statsFontNormal">20+</Card.Text>
                        </Card.Body>
                      </Card>
                      <Card className="card-stats">
                        <Card.Img variant="top" src={iconyayin} className="card-img-top-stats"/>
                        <Card.Body className="card-body">
                          <Card.Text className="stats-card-text ">Yayınlar</Card.Text>
                          <br></br>
                          <Card.Text className="statsFontNormal">70+</Card.Text>
                        </Card.Body>
                      </Card>
                      <Card className="card-stats">
                        <Card.Img variant="top" src={iconproje} className="card-img-top-stats"/>
                        <Card.Body className="card-body">
                          <Card.Text className="stats-card-text ">Tamamlanmış Proje</Card.Text>
                          <br></br>
                          <Card.Text className="statsFontNormal">10+</Card.Text>
                        </Card.Body>
                      </Card>
                    </CardGroup>
                  </Container>
             </Container>

  {/* YAPILANLAR */}
  {/* slide true animasyon */}
             <div style={{height:"450px",width:"100%"}}>
                  <Carousel slide={true} touch={true} indicators={false} variant="dark" className="a" style={{justifyContent:"center", display:"flex",margin:"50px",marginTop:"250px"}}>
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
                          <p style={{textAlign:"start",fontSize:"1.25vw",marginLeft:"10%",marginRight:"10%"}}>Yazılım geliştirme ekibimiz ile işletmelerin isteğine göre geliştirilecek projenin zamanını<br></br> ve maliyetini tahmin etmekte ve sonrasında ürün tasarımı ve geliştirme 
                          aşamalarını gerçekleştirmekteyiz. Son aşamada ürünün test sürecini tamamlayıp projeyi teslime<br></br> hazır hale getirmekteyiz.
                          </p>
                          </div>
                        </Carousel.Caption>
                        </div>
                    </Carousel.Item>
              </Carousel>
             </div>

  {/* PROJELER */}
  {/* TODO:kalan proje kartları eklenecek
      TODO:detaylar kısmı düzeltilecek
      TODO:responsive yapılacak. 
      FIXME:sağ ve soldaki cardların koseleri duzeltilecek*/}
             <div style={{marginTop:"200px"}}className="imageWrapper fontAll">
                <img src={backg2} className="image" style={{height:"20%"}} alt="background2"/>   
                <h3 className="imageprojeTexth1 font500" style={{fontSize:"4.375vw"}}>PROJELERİMİZ</h3>
                <div style={{position:"absolute",marginTop:"20%",width:"100%"}}>
                <Carousel slide={true} touch={true} indicators={false} className="a" style={{justifyContent:"center", display:"flex",width:"auto", marginLeft:"80px", marginRight:"80px"}}>
                  <Carousel.Item>
                    <CardGroup className="a" style={{justifyContent:"center", display:"flex",marginRight:"200px", marginLeft:"200px"}}>
                        <Card className="backgroundcard">
                          <Card.Img variant="top" src={proje1} style={{alignSelf:"center"}}/>
                          <Card.Body style= {{color:"white", textAlign:"center"}}>
                           <Card.Text className="font500" style={{textAlign:"start",fontSize:"1.25vw",padding:"0px", margin:"0px"}}>YASAKLI ALAN İHLALİ TESPİTİ<br></br></Card.Text>
                            <br></br>
                            <br></br>
                            <br></br>
                            <Card.Text className="font400" style={{fontSize:"1vw", textAlign:"start"}}>Fabrikadaki forklift kazalarını gidermek amacıyla...</Card.Text>
                            <Card.Text className="fontnormal" style={{fontSize:"1vw", textAlign:"end",paddingTop:"6px"}}>Detaylar &gt;</Card.Text>
                          </Card.Body>
                        </Card>
                        <Card className="backgroundcard">
                          <Card.Img variant="top" src={proje2} style={{alignSelf:"center"}} />
                          <Card.Body style= {{color:"white", textAlign:"center",opacity:"100%"}}>
                            <Card.Text className="font500" style={{textAlign:"start",fontSize:"1.25vw", padding:"0px", margin:"0px"}}>DİJİTAL GÖSTERGE<br></br></Card.Text>
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

                <Carousel.Item>
                    <CardGroup className="a" style={{justifyContent:"center", display:"flex",marginRight:"200px", marginLeft:"200px"}}>
                        <Card className="backgroundcard">
                          <Card.Img variant="top" src={proje4} style={{alignSelf:"center"}}/>
                          <Card.Body style= {{color:"white", textAlign:"center"}}>
                           <Card.Text className="font500" style={{textAlign:"start",fontSize:"1.25vw",padding:"0px", margin:"0px"}}>Müzeler İçin Akıllı Takip Sistemi<br></br></Card.Text>
                            <br></br>
                            <br></br>
                            <br></br>
                            <Card.Text className="font400" style={{fontSize:"1vw", textAlign:"start"}}>Eserlere ait bilgiler, eserlerin yanında bulunan tabletler üzerinde görsel...</Card.Text>
                            <Card.Text className="fontnormal" style={{fontSize:"1vw", textAlign:"end",paddingTop:"6px"}}>Detaylar &gt;</Card.Text>
                          </Card.Body>
                        </Card>
                        <Card className="backgroundcard">
                          <Card.Img variant="top" src={proje5} style={{alignSelf:"center"}} />
                          <Card.Body style= {{color:"white", textAlign:"center",opacity:"100%"}}>
                            <Card.Text className="font500" style={{textAlign:"start",fontSize:"1.25vw", padding:"0px", margin:"0px"}}>Hastane Arşiv Otomasyonu<br></br></Card.Text>
                            <br></br>
                            <br></br>
                            <br></br>
                            <Card.Text className="font400" style={{fontSize:"1vw", textAlign:"start"}}>Kocaeli Üniversitesi Araştırma Hastanesi'ne ait hasta dosyalarının...</Card.Text>
                            <Card.Text className="fontnormal" style={{fontSize:"1vw", textAlign:"end",paddingTop:"6px"}}>Detaylar &gt;</Card.Text>
                          </Card.Body>
                        </Card>
                        <Card className="backgroundcard">
                          <Card.Img variant="top" src={proje6} style={{alignSelf:"center"}}/>
                          <Card.Body style= {{color:"white", textAlign:"center"}}>
                            <Card.Text className="font500" style={{textAlign:"start",fontSize:"1.25vw",padding:"0px", margin:"0px"}}>Aygaz Tüp Yakası Okuma<br></br></Card.Text>
                            <br></br>
                            <br></br>
                            <br></br>
                            <Card.Text className="font400" style={{fontSize:"1vw", textAlign:"start"}}>Tüplerin yaka kısmında yer alan tüp kimlik verilerinin OCR tekniği...</Card.Text>
                            <Card.Text className="fontnormal" style={{fontSize:"1vw", textAlign:"end",paddingTop:"6px"}}>Detaylar &gt;</Card.Text>
                          </Card.Body>
                        </Card>
                  </CardGroup>
                </Carousel.Item>
              </Carousel>
              </div>
             </div> 

  {/* CONTACT */}
             <div className="contact" style={{backgroundColor: "#e9eef4"}}>
             <CardGroup className="a" style={{justifyContent:"center", display:"flex",marginRight:"150px", marginLeft:"150px"}}>
                  <Card  style={{borderRadius:"0px", height:"150px",borderWidth:"0px",wordWrap:"break-word",marginBottom:"25px",marginTop:"10px", backgroundColor: "#e9eef4"}} >
                    <Card.Body className="fontlight" style= {{color:"#2c8e32", textAlign:"center",fontSize:"15px"}}>
                      <Card.Text  className="font500" style={{fontSize:"18px"}}>Adres</Card.Text>
                      <Card.Text  className="font300" style={{padding:"0px",margin:"0"}}>Kocaeli Üniversitesi<br></br>Mühendislik<br></br>B Fakültesi<br></br>İzmit / Kocaeli</Card.Text>
                    </Card.Body>
                  </Card>
                  <Card  style={{borderRadius:"0px", height:"150px",borderWidth:"0px",wordWrap:"break-word",marginBottom:"25px",marginTop:"10px", backgroundColor: "#e9eef4"}}>
                    <Card.Body className="fontlight" style= {{color:"#2c8e32", textAlign:"center",fontSize:"15px"}}>
                      <Card.Text  className="font500"  style={{fontSize:"18px"}}>Çalışma Saatleri</Card.Text>
                      <Card.Text  className="font300">08:00 - 17:30</Card.Text>
                      <Card.Text  className="font300">Pazartesi - Cuma</Card.Text>
                    </Card.Body>
                  </Card>
                  <Card style={{borderRadius:"0px", height:"150px",borderWidth:"0px",wordWrap:"break-word",marginBottom:"25px",marginTop:"10px", backgroundColor: "#e9eef4"}}>
                    <Card.Body className="fontlight" style= {{color:"#2c8e32", textAlign:"center",fontSize:"15px"}}>
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

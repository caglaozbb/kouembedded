import React from "react"
import { Container, Nav, Navbar, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './images/logo.png'
import backg3 from './images/backg3.png'
import person1 from './images/person1.png'
import './App.css'
import embeddedbrosur1 from './images/embeddedbrosur1.pdf'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

// TODO: fotografları importlamak icin index.js doyası olusturup icinde exportlaman ve daha sonra kullanacagın dosyalarda topluca importlayabilirsin
export const Ekibimiz = () => {

return (   

  // NAVBAR
  //FIXME: navbar container tamamen sağa yasla
        <div>
              <div>
                <Navbar sticky="top" expand="lg" style={{backgroundColor: "#e9eef4"}}>
                    <Navbar.Brand href="home"><img src={logo} alt="Gömülü Sistemler Laboratuvarı Logosu" style={{width:"70%", marginLeft:"20px"}}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Container>
                        <Nav style={{fontSize:"14px", justifyContent:"end"}}>
                          <Nav.Link href="home" style={{marginRight: 20}}>Ana Sayfa</Nav.Link>
                          <Nav.Link href="dersler" style={{marginRight: 20}}>Dersler</Nav.Link>
                          <Nav.Link href="arastirmalar" className="navbarunderline">Araştırmalar</Nav.Link>
                          <Nav.Link href="ekibimiz" className="navbarunderline">Ekibimiz</Nav.Link>
                          <Nav.Link href="isbirlikcilerimiz" style={{marginRight: 20}}>İşbirlikçilerimiz</Nav.Link>
                          <Nav.Link href={embeddedbrosur1} without rel="noopener noreferrer" target="_blank" style={{marginRight: 20}}>Broşür</Nav.Link>
                          <Button variant="primary" style={{borderRadius:30, backgroundColor:"#2c8e32",borderWidth:0}}>Bize Ulaşın</Button>
                        </Nav>
                      </Container>
                    </Navbar.Collapse>
                </Navbar>
              </div>

  {/* Header (buradaki tüm child elementi için css olusturulmalı mı yoksa özel cssleri olması mı daha dogru olur?)*/}
              <div id="header" className="imageWrapper fontAll">
                <img src={backg3} style={{width:"100%"}} alt="ekibimiz sayfasının arka plan resmi" />
                <h2 className="font400" style={{fontSize:"2.1875vw",position:"absolute", marginLeft:"20%",marginTop:"8%",color:"whitesmoke"}}>EKİBİMİZ</h2>
                <h3 className="font900" style={{fontSize:"0.75vw",position:"absolute", marginLeft:"20%",marginTop:"12%",color:"#2c8e32"}}>İŞİMİZİ ÇOK SEVİYORUZ</h3>
                <p className="font300" style={{fontSize:"1vw",color:"whitesmoke",marginLeft:"70%",marginTop:"12%",position:"absolute"}}> Anasayfa / Ekibimiz</p>
                </div>

{/* TODO:CSS DUZENLE KİSİLERİN RESİMLERİNİ VE BİLGİLERİNİ EKLE */}
{/* ekibimiz */}
                <div style={{marginTop:"100px"}} className="fontAll">
                <h3 className="font500" style={{fontSize:"3.125vw", display: "flex", justifyContent: "center"}}>EKİP ÜYELERİ</h3>
                <div style={{marginTop:"5%"}}>
                    <CardGroup className="c mx-auto" style={{ display:"flex",width:"50%"}}>
                        <Card className="backgroundcardekip " >
                          <Card.Img variant="top" src={person1} style={{borderRadius:"0"}}/>
                          <Card.Body style= {{color:"white", textAlign:"center",margin:"0px",padding:"2%"}}>
                           <Card.Text className="font300" style={{textAlign:"center",fontSize:"1vw", fontStyle:"italic"}}>Doç. Dr. <br></br>Suhap ŞAHİN</Card.Text>
                           <Card.Text className="image-overlay" style={{textAlign:"center",fontSize:"1vw", fontStyle:"italic"}}>+90 0530 540 1163<br></br>suhapsahin@kocaeli.edu.tr</Card.Text>
                          </Card.Body>
                        </Card>
                        <Card className="backgroundcardekip">
                          <Card.Img variant="top" src={person1} style={{borderRadius:"0"}}/>
                          <Card.Body style= {{color:"white", textAlign:"center",margin:"0px",padding:"2%"}}>
                            <Card.Text className="font300" style={{textAlign:"center",fontSize:"1vw", fontStyle:"italic"}}>Asst. Prof. <br></br>Fidan KAYA GÜLAĞIZ</Card.Text>
                            <Card.Text className="image-overlay" style={{textAlign:"center",fontSize:"1vw", fontStyle:"italic"}}>+90 0530 540 1163<br></br>suhapsahin@kocaeli.edu.tr</Card.Text>
                          </Card.Body>
                        </Card>
                        <Card className="backgroundcardekip">
                          <Card.Img variant="top" src={person1} style={{borderRadius:"0"}}/>
                          <Card.Body style= {{color:"white", textAlign:"center",margin:"0px",padding:"2%"}}>
                            <Card.Text className="font300" style={{textAlign:"center",fontSize:"1vw", fontStyle:"italic"}}>Asst. Prof. <br></br>Mehmet Ali ALTUNCU</Card.Text>
                            <Card.Text className="image-overlay" style={{textAlign:"center",fontSize:"1vw", fontStyle:"italic"}}>+90 0530 540 1163<br></br>suhapsahin@kocaeli.edu.tr</Card.Text>
                          </Card.Body>
                        </Card>
                  </CardGroup>
                  </div> 
                  
                  <div  style={{marginTop:"5%"}}>
                    <CardGroup className="c mx-auto" style={{ display:"flex",width:"50%"}}>
                        <Card className="backgroundcardekip" >
                          <Card.Img variant="top" src={person1} style={{borderRadius:"0"}}/>
                          <Card.Body style= {{color:"white", textAlign:"center",margin:"0px",padding:"2%"}}>
                           <Card.Text className="font300" style={{textAlign:"center",fontSize:"1vw", fontStyle:"italic"}}>Doç. Dr. <br></br>Suhap ŞAHİN</Card.Text>
                           <Card.Text className="image-overlay" style={{textAlign:"center",fontSize:"1vw", fontStyle:"italic"}}>+90 0530 540 1163<br></br>suhapsahin@kocaeli.edu.tr</Card.Text>
                          </Card.Body>
                        </Card>
                        <Card className="backgroundcardekip">
                          <Card.Img variant="top" src={person1} style={{borderRadius:"0"}}/>
                          <Card.Body style= {{color:"white", textAlign:"center",margin:"0px",padding:"2%"}}>
                            <Card.Text className="font300" style={{textAlign:"center",fontSize:"1vw", fontStyle:"italic"}}>Asst. Prof. <br></br>Fidan KAYA GÜLAĞIZ</Card.Text>
                            <Card.Text className="image-overlay" style={{textAlign:"center",fontSize:"1vw", fontStyle:"italic"}}>+90 0530 540 1163<br></br>suhapsahin@kocaeli.edu.tr</Card.Text>
                          </Card.Body>
                        </Card>
                        <Card className="backgroundcardekip">
                          <Card.Img variant="top" src={person1} style={{borderRadius:"0"}}/>
                          <Card.Body style= {{color:"white", textAlign:"center",margin:"0px",padding:"2%"}}>
                            <Card.Text className="font300" style={{textAlign:"center",fontSize:"1vw", fontStyle:"italic"}}>Asst. Prof. <br></br>Mehmet Ali ALTUNCU</Card.Text>
                            <Card.Text className="image-overlay" style={{textAlign:"center",fontSize:"1vw", fontStyle:"italic"}}>+90 0530 540 1163<br></br>suhapsahin@kocaeli.edu.tr</Card.Text>
                          </Card.Body>
                        </Card>
                  </CardGroup>
                  </div>

                  <div  style={{marginTop:"5%"}}>
                    <CardGroup className="c mx-auto" style={{ display:"flex",width:"50%"}}>
                        <Card className="backgroundcardekip" >
                          <Card.Img variant="top" src={person1} style={{borderRadius:"0"}}/>
                          <Card.Body style= {{color:"white", textAlign:"center",margin:"0px",padding:"2%"}}>
                           <Card.Text className="font300" style={{textAlign:"center",fontSize:"1vw", fontStyle:"italic"}}>Doç. Dr. <br></br>Suhap ŞAHİN</Card.Text>
                           <Card.Text className="image-overlay" style={{textAlign:"center",fontSize:"1vw", fontStyle:"italic"}}>+90 0530 540 1163<br></br>suhapsahin@kocaeli.edu.tr</Card.Text>
                          </Card.Body>
                        </Card>
                        <Card className="backgroundcardekip">
                          <Card.Img variant="top" src={person1} style={{borderRadius:"0"}}/>
                          <Card.Body style= {{color:"white", textAlign:"center",margin:"0px",padding:"2%"}}>
                            <Card.Text className="font300" style={{textAlign:"center",fontSize:"1vw", fontStyle:"italic"}}>Asst. Prof. <br></br>Fidan KAYA GÜLAĞIZ</Card.Text>
                            <Card.Text className="image-overlay" style={{textAlign:"center",fontSize:"1vw", fontStyle:"italic"}}>+90 0530 540 1163<br></br>suhapsahin@kocaeli.edu.tr</Card.Text>
                          </Card.Body>
                        </Card>
                        <Card className="backgroundcardekip">
                          <Card.Img variant="top" src={person1} style={{borderRadius:"0"}}/>
                          <Card.Body style= {{color:"white", textAlign:"center",margin:"0px",padding:"2%"}}>
                            <Card.Text className="font300" style={{textAlign:"center",fontSize:"1vw", fontStyle:"italic"}}>Asst. Prof. <br></br>Mehmet Ali ALTUNCU</Card.Text>
                            <Card.Text className="image-overlay" style={{textAlign:"center",fontSize:"1vw", fontStyle:"italic"}}>+90 0530 540 1163<br></br>suhapsahin@kocaeli.edu.tr</Card.Text>
                          </Card.Body>
                        </Card>
                  </CardGroup>
                  </div>

                  <div  style={{marginTop:"5%"}}>
                    <CardGroup className="c mx-auto" style={{ display:"flex",width:"50%"}}>
                        <Card className="backgroundcardekip" >
                          <Card.Img variant="top" src={person1} style={{borderRadius:"0"}}/>
                          <Card.Body style= {{color:"white", textAlign:"center",margin:"0px",padding:"2%"}}>
                           <Card.Text className="font300" style={{textAlign:"center",fontSize:"1vw", fontStyle:"italic"}}>Doç. Dr. <br></br>Suhap ŞAHİN</Card.Text>
                           <Card.Text className="image-overlay" style={{textAlign:"center",fontSize:"1vw", fontStyle:"italic"}}>+90 0530 540 1163<br></br>suhapsahin@kocaeli.edu.tr</Card.Text>
                          </Card.Body>
                        </Card>
                        <Card className="backgroundcardekip">
                          <Card.Img variant="top" src={person1} style={{borderRadius:"0"}}/>
                          <Card.Body style= {{color:"white", textAlign:"center",margin:"0px",padding:"2%"}}>
                            <Card.Text className="font300" style={{textAlign:"center",fontSize:"1vw", fontStyle:"italic"}}>Asst. Prof. <br></br>Fidan KAYA GÜLAĞIZ</Card.Text>
                            <Card.Text className="image-overlay" style={{textAlign:"center",fontSize:"1vw", fontStyle:"italic"}}>+90 0530 540 1163<br></br>suhapsahin@kocaeli.edu.tr</Card.Text>
                          </Card.Body>
                        </Card>
                        <Card className="backgroundcardekip">
                          <Card.Img variant="top" src={person1} style={{borderRadius:"0"}}/>
                          <Card.Body style= {{color:"white", textAlign:"center",margin:"0px",padding:"2%"}}>
                            <Card.Text className="font300" style={{textAlign:"center",fontSize:"1vw", fontStyle:"italic"}}>Asst. Prof. <br></br>Mehmet Ali ALTUNCU</Card.Text>
                            <Card.Text className="image-overlay" style={{textAlign:"center",fontSize:"1vw", fontStyle:"italic"}}>+90 0530 540 1163<br></br>suhapsahin@kocaeli.edu.tr</Card.Text>
                          </Card.Body>
                        </Card>
                  </CardGroup>
                  </div>

                  <div  style={{marginTop:"5%"}}>
                    <CardGroup className="c mx-auto" style={{ display:"flex",width:"50%"}}>
                        <Card className="backgroundcardekip" >
                          <Card.Img variant="top" src={person1} style={{borderRadius:"0"}}/>
                          <Card.Body style= {{color:"white", textAlign:"center",margin:"0px",padding:"2%"}}>
                           <Card.Text className="font300" style={{textAlign:"center",fontSize:"1vw", fontStyle:"italic"}}>Doç. Dr. <br></br>Suhap ŞAHİN</Card.Text>
                           <Card.Text className="image-overlay" style={{textAlign:"center",fontSize:"1vw", fontStyle:"italic"}}>+90 0530 540 1163<br></br>suhapsahin@kocaeli.edu.tr</Card.Text>
                          </Card.Body>
                        </Card>
                        <Card className="backgroundcardekip">
                          <Card.Img variant="top" src={person1} style={{borderRadius:"0"}}/>
                          <Card.Body style= {{color:"white", textAlign:"center",margin:"0px",padding:"2%"}}>
                            <Card.Text className="font300" style={{textAlign:"center",fontSize:"1vw", fontStyle:"italic"}}>Asst. Prof. <br></br>Fidan KAYA GÜLAĞIZ</Card.Text>
                            <Card.Text className="image-overlay" style={{textAlign:"center",fontSize:"1vw", fontStyle:"italic"}}>+90 0530 540 1163<br></br>suhapsahin@kocaeli.edu.tr</Card.Text>
                          </Card.Body>
                        </Card>
                        <Card className="backgroundcardekip">
                          <Card.Img variant="top" src={person1} style={{borderRadius:"0"}}/>
                          <Card.Body style= {{color:"white", textAlign:"center",margin:"0px",padding:"2%"}}>
                            <Card.Text className="font300" style={{textAlign:"center",fontSize:"1vw", fontStyle:"italic"}}>Asst. Prof. <br></br>Mehmet Ali ALTUNCU</Card.Text>
                            <Card.Text className="image-overlay" style={{textAlign:"center",fontSize:"1vw", fontStyle:"italic"}}>+90 0530 540 1163<br></br>suhapsahin@kocaeli.edu.tr</Card.Text>
                          </Card.Body>
                        </Card>
                  </CardGroup>
                  </div>

                  <div  style={{marginTop:"5%"}}>
                    <CardGroup className="c mx-auto" style={{ display:"flex",width:"50%"}}>
                        <Card className="backgroundcardekip" >
                          <Card.Img variant="top" src={person1} style={{borderRadius:"0"}}/>
                          <Card.Body style= {{color:"white", textAlign:"center",margin:"0px",padding:"2%"}}>
                           <Card.Text className="font300" style={{textAlign:"center",fontSize:"1vw", fontStyle:"italic"}}>Doç. Dr. <br></br>Suhap ŞAHİN</Card.Text>
                           <Card.Text className="image-overlay" style={{textAlign:"center",fontSize:"1vw", fontStyle:"italic"}}>+90 0530 540 1163<br></br>suhapsahin@kocaeli.edu.tr</Card.Text>
                          </Card.Body>
                        </Card>
                        <Card className="backgroundcardekip">
                          <Card.Img variant="top" src={person1} style={{borderRadius:"0"}}/>
                          <Card.Body style= {{color:"white", textAlign:"center",margin:"0px",padding:"2%"}}>
                            <Card.Text className="font300" style={{textAlign:"center",fontSize:"1vw", fontStyle:"italic"}}>Asst. Prof. <br></br>Fidan KAYA GÜLAĞIZ</Card.Text>
                            <Card.Text className="image-overlay" style={{textAlign:"center",fontSize:"1vw", fontStyle:"italic"}}>+90 0530 540 1163<br></br>suhapsahin@kocaeli.edu.tr</Card.Text>
                          </Card.Body>
                        </Card>
                        <Card className="backgroundcardekip">
                          <Card.Img variant="top" src={person1} style={{borderRadius:"0"}}/>
                          <Card.Body style= {{color:"white", textAlign:"center",margin:"0px",padding:"2%"}}>
                            <Card.Text className="font300" style={{textAlign:"center",fontSize:"1vw", fontStyle:"italic"}}>Asst. Prof. <br></br>Mehmet Ali ALTUNCU</Card.Text>
                            <Card.Text className="image-overlay" style={{textAlign:"center",fontSize:"1vw", fontStyle:"italic"}}>+90 0530 540 1163<br></br>suhapsahin@kocaeli.edu.tr</Card.Text>
                          </Card.Body>
                        </Card>
                  </CardGroup>
                  </div>

                  <div  style={{marginTop:"5%"}}>
                    <CardGroup className="c mx-auto" style={{ display:"flex",width:"50%"}}>
                        <Card className="backgroundcardekip" >
                          <Card.Img variant="top" src={person1} style={{borderRadius:"0"}}/>
                          <Card.Body style= {{color:"white", textAlign:"center",margin:"0px",padding:"2%"}}>
                           <Card.Text className="font300" style={{textAlign:"center",fontSize:"1vw", fontStyle:"italic"}}>Doç. Dr. <br></br>Suhap ŞAHİN</Card.Text>
                           <Card.Text className="image-overlay" style={{textAlign:"center",fontSize:"1vw", fontStyle:"italic"}}>+90 0530 540 1163<br></br>suhapsahin@kocaeli.edu.tr</Card.Text>
                          </Card.Body>
                        </Card>
                        <Card className="backgroundcardekip">
                          <Card.Img variant="top" src={person1} style={{borderRadius:"0"}}/>
                          <Card.Body style= {{color:"white", textAlign:"center",margin:"0px",padding:"2%"}}>
                            <Card.Text className="font300" style={{textAlign:"center",fontSize:"1vw", fontStyle:"italic"}}>Asst. Prof. <br></br>Fidan KAYA GÜLAĞIZ</Card.Text>
                            <Card.Text className="image-overlay" style={{textAlign:"center",fontSize:"1vw", fontStyle:"italic"}}>+90 0530 540 1163<br></br>suhapsahin@kocaeli.edu.tr</Card.Text>
                          </Card.Body>
                        </Card>
                        <Card className="backgroundcardekip">
                          <Card.Img variant="top" src={person1} style={{borderRadius:"0"}}/>
                          <Card.Body style= {{color:"white", textAlign:"center",margin:"0px",padding:"2%"}}>
                            <Card.Text className="font300" style={{textAlign:"center",fontSize:"1vw", fontStyle:"italic"}}>Asst. Prof. <br></br>Mehmet Ali ALTUNCU</Card.Text>
                            <Card.Text className="image-overlay" style={{textAlign:"center",fontSize:"1vw", fontStyle:"italic"}}>+90 0530 540 1163<br></br>suhapsahin@kocaeli.edu.tr</Card.Text>
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

        </div>
  );

};

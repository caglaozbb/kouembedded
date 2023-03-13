import React from "react"
import { Container, Nav, Navbar, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './images/logo.png'
import embeddedbrosur1 from './images/embeddedbrosur1.pdf'
import './App.css'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import backg6 from './images/backg6.png'
import logo1 from './images/logo1.jpg'
import logo2 from './images/logo2.jpg'


// TODO: fotografları importlamak icin index.js doyası olusturup icinde exportlaman ve daha sonra kullanacagın dosyalarda topluca importlayabilirsin
export const Isbirlikcilerimiz = () => {

  function handleEmailClick() {
    window.location.href = "mailto:kouembedded@gmail.com";
  }

return (   
//FIXME: Sayfa geç yükleniyor resimlerin boyutları neden oluyor olabilir.
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

              <div id="header" className="imageWrapper fontAll">
                <img src={backg6} style={{width:"100%"}} alt="ekibimiz sayfasının arka plan resmi"/>
                <h2 className="font400" style={{fontSize:"2.1875vw",position:"absolute", marginLeft:"20%",marginTop:"8%",color:"whitesmoke"}}>İŞBİRLİKÇİLERİMİZ</h2>
                <h3 className="font900" style={{fontSize:"0.75vw",position:"absolute", marginLeft:"20%",marginTop:"12%",color:"#2c8e32"}}>İŞİMİZİ ÇOK SEVİYORUZ</h3>
                <p className="font300" style={{fontSize:"1vw",color:"whitesmoke",marginLeft:"70%",marginTop:"12%",position:"absolute"}}> Anasayfa / İşbirlikçilerimiz</p>
              </div>

              <div style={{marginTop:"100px"}} className="fontAll">
                <div style={{marginTop:"5%"}}>
                    <CardGroup className="c mx-auto" style={{ display:"flex",width:"50%"}}>
                        <Card>
                          <Card.Img variant="top" src={logo1} style={{borderRadius:"0"}}/>
                        </Card>
                        <Card>
                          <Card.Img variant="top" src={logo2}  style={{borderRadius:"0"}}/>
                        </Card>
                        <Card>
                          <Card.Img variant="top" src={logo1}  style={{borderRadius:"0"}}/>
                        </Card>
                        <Card>
                          <Card.Img variant="top" src={logo2}  style={{borderRadius:"0"}}/>
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

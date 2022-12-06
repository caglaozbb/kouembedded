npm install react-bootstrap bootstrap
npm i react-router-dom
yeşil #2c8e32  (bize ulaşın)
navbar #e9eef4
yayınlar #04a151 (yayınlar)
fonts: roboto thin medium regular bold

( react router dom
BrowserRouter
BrowserRouter is the router implementation that uses the HTML5 history API to keep your UI up to date with the browser URL.
It is BrowserRouter’s responsibility to store all the components and its routes as an object.
Switch
Switch components are used to render the default components once the app rendered, and it will switch between routes as needed.
Route
The route is a statement that holds the specific path of the app along with the component’s name and renders it once it matches the URL.
)

Routing for home page:
<!-- <BrowserRouter>
      <Routes>
      <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate replace to="/home" />} />    
      </Routes>
    </BrowserRouter> -->

2 common methods to write text on an image in React JS:

background-image align-top justify-content-start d-flex object-fit-cover
 import /isim.css and use it as className="imageTextwrapping" gibi

 google fonts roboto index.html css fontAll

 card import
 import Card from 'react-bootstrap/Card'
 import CardGroup from 'react-bootstrap/CardGroup'

  <!-- <Card>
        <Card.Img variant="top"  />
        <Card.Body>
          <Card.Title>Yüksek Lisans ve Lisans Öğrencileri</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card> -->

import Carousel from 'react-bootstrap/Carousel'

 <!-- <Carousel variant="dark" className="a" style={{justifyContent:"center", display:"flex",margin:"50"}}>
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
  </Carousel> -->

  Carousel iconları ortalamak için justifyContent:center ve display:flex kullanıldı.
  Card özellikleri degistirildi
  <!-- cardların ortalanması -->
  style={{justifyContent:"center", display:"flex",marginRight:"150px", marginLeft:"150px"}}
  <!-- textlerin özellikleri -->
  style={{fontWeight:"lighter",fontSize:"22px"}} 
  <!-- css fontların özellikleri degistirildi -->
  isimleri fontlight,fontnormal,fontbold yapıldı.

  underline width degistiremezsin bu yuzden borderbottom kullanman gerekir
  <!-- border-bottom: 1px solid red;
    padding: 0 0 4px; -->
  textDecorationLine:"underline", textDecorationColor:"white",textDecorationThickness:4,textUnderlineOffset:20
  width hicbir sekilde degistirilemiyor...

  developed by kısmı
  <!-- <div style={{backgroundColor:"#2c8e32", width:"auto",paddingTop:"20px",paddingBottom:"10px"}}> -->
  contact kısmı 3 parcaya bolmek icin card kullandım ve sınırları sildim 

paragrafları ve ya headerları birbirine yaklastırmak icin padding ve marginleri 0 verebilirsin 

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

fontfamily kaldırdım *{} altına koydum tüm yazılara roboto vermis oldum

<!-- <br> </br> alt satıra geçirir -->
navbar edited
yapılanlar carousel fixed
projelerimiz carousel backgrounddaki resmin üzerine yerleştirildi

carousel image
,margin:"100px",marginLeft:"350px",marginTop:"50px",marginBottom:"100px"
h1
margin:"100px",marginLeft:"240px",marginBottom:"0px"
p
textAlign:"start",marginLeft:"110px",fontSize:"1.25vw",marginTop:"60px"
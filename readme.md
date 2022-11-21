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

import TopBanner from"./Comonents/TopBanner"
import StuCard from './Comonents/StuCard';
import TopMenu from "./Comonents/TopMenu";
const App=()=>
{
  return(
    <>
   
      <TopMenu/>
      <TopBanner/>
      <StuCard/>
    </>
  )
}
export default App;
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// const App=()=>{
//   return( 
//     <>
    

//     <Container fluid>
//        <Row>
//         <Col md={2} className='bg-success'>1 of 1</Col>
//         <Col md={2} className='bg-primary'>1 of 1</Col>
//         <Col md={3} className='bg-secondary'>1 of 1</Col>
//         <Col md={5} className='bg-danger'>1 of 1</Col>
        
//       </Row>
//       <br />
//      <Row>
//      <Col md={2} className='bg-secondary'>1 of 1</Col>
//      <Col md={2} className='bg-primary'>1 of 1</Col>
//      <Col md={4} className='bg-secondary'>1 of 1</Col>
//      <Col md={2} className='bg-warning'>1 of 1</Col>
//      <Col md={2} className='bg-danger'>1 of 1</Col>
     

//      </Row>
//     </Container>


//     </>
//   )
// }
// export default App; 



 

// import Carousel from 'react-bootstrap/Carousel';

// import back from "./image/img1.jpg";
// import best from "./image/img2.jpg";
// import birthday from "./image/img3.jpg";

// const App=()=>{
//     return(
//         <>
       
        
//         <Carousel>
//       <Carousel.Item>
//       <img src={back} />
//         <Carousel.Caption>
          
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>

//       <img src={best} />
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>

//       <img src={birthday} />
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>

//         </>
//     )
// }
// export default App;
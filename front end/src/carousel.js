import './carousel.css'
import banner from './banner.jpg'
import banner1 from './banner1.jpg'
import banner2 from './banner2.jpg'
import { Carousel ,Button} from 'react-bootstrap';

function Carousels() {
  return (
    <Carousel className=' hotel'>
  <Carousel.Item interval={1000} className='carousel '>
    <img
      className="d-block w-100"
      src={banner}
      alt="First slide"
    />
    <Carousel.Caption className='posi'>
    <button className='sliderbutton'>Watch Now</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500} className='carousel'>
    <img
      className="d-block w-100"
      src={banner1}
      alt="Second slide"
    />
    <Carousel.Caption className='posi'>
    <button className='sliderbutton'>Watch Now</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className='carousel'>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Third slide"
    />
    <Carousel.Caption className='posi'>
    <button className='sliderbutton'>Watch Now</button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  );
}

export default Carousels;

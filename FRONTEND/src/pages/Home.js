import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import { Container, Image } from "react-bootstrap";
import "./Home.css";
const Home = () => {
  return (
    <>
      <Container class name="mt-3">
        <Carousel>
          <Carousel.Item>
            <Image
              className="image"
              src="../assets/images/capture.jpg"
              fluid
            ></Image>
          </Carousel.Item>

          <Carousel.Item>
            <Image
              className="image"
              src="../assets/images/Makanan/meat-monsta.webp"
              fluid
            ></Image>
            <Carousel.Caption>
              <h4>Meet Monsta.</h4>
              <h5>IDR 150.000</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="image"
              src="../assets/images/Makanan/frankfurter-bbq.webp"
              fluid
            ></Image>
            <Carousel.Caption>

              <h4>Frankfurter BBQ.</h4>
              <h5>IDR 140.000</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="image"
              src="../assets/images/Makanan/meat-lovers.webp"
              fluid
            ></Image>
            <Carousel.Caption>

              <h4>Meat Lovers.</h4>
              <h5>IDR 120.000</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="image"
              src="../assets/images/Makanan/cheeseburger.webp"
              fluid
            ></Image>
            <Carousel.Caption>
              <h4>Cheeseburger.</h4>
              <h5>IDR 150.000</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="image"
              src="../assets/images/Makanan/pepperoni.webp"
              fluid
            ></Image>
            <Carousel.Caption>
              <h4>Pepperoni Beef.</h4>
              <h5>IDR 175.000</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="image"
              src="../assets/images/Makanan/veggie-garden.webp"
              fluid
            ></Image>
            <Carousel.Caption>
              <h4>Veggie Garden.</h4>
              <h5>IDR 125.000</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="image"
              src="../assets/images/Makanan/cheese-lovers.webp"
              fluid
            ></Image>
            <Carousel.Caption>
              <h4>Cheese Lovers.</h4>
              <h5>IDR 145.000</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="image"
              src="../assets/images/Makanan/cheese-overload.webp"
              fluid
            ></Image>
            <Carousel.Caption>
              <h4>Cheese Overload.</h4>
              <h5>IDR 150.000</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="image"
              src="../assets/images/Makanan/tuna-melt.webp"
              fluid
            ></Image>
            <Carousel.Caption>
              <h4>Tuna Melt.</h4>
              <h5>IDR 135.000</h5>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
};

export default Home;

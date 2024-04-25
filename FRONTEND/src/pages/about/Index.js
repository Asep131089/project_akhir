import React from "react";
import { Container, Image } from "react-bootstrap";
import "../about/about.css";

function aboutUs() {
  return (
    <Container>
      <div className="heading">
        <h1>About Us</h1>
        <strong>
          <p1>
            Sekitar Tahun 2005 Kang Asep yang bekerja sebagai karyawan kantoran
            pada saat itu, mampu untuk mengumpulkan uang sebanyak 100 juta
            rupiah sebagai modal awal untuk mendirikan usaha PizzakangAsep ini.
            Para pelanggan yang datang menikmati kelezatan menu Pizza, pendatang
            setiap harinya berasal dari beragam lapisan umur (tua-muda), dan
            profesi (pelajar, mahasiswa, eksekutif muda). Sebagai komitmen untuk
            memberikan yang terbaik kepada para Pizza Lovers ini, PizzakangAsep
            pun selalu berinovasi tinggi dengan pizza berkelas bintang lima.
            Kini PizzaKangAsep berkomitmen untuk memberikan layanan yang prima
            untuk memenuhi kebutuhan dan kenyamanan konsumen. Bagi Para pecinta
            Pizza diseluruh negeri, kini PizzaKangAsep tersebar di berbagai
            daerah
          </p1>
        </strong>
      </div>
      <div className="container">
        <section className="about">
          <div className="about-image">
            <Image src="../assets/images/capture.jpeg" />
            <Image src="../assets/images/capture1.jpeg" />
            <Image src="../assets/images/capture2.jpeg" />
            <Image src="../assets/images/capture3.jpeg" />
          </div>
          <div className="about-content">
            {/* <h2>Warm embrace in a Pizza</h2> */}
            {/* <p>
            
            </p>
            <a href="" className="read-more">
              Read More
            </a> */}
          </div>
        </section>
      </div>
    </Container>
  );
}

export default aboutUs;

//import hook useState from react
import { useState, useEffect } from "react";

//import component Bootstrap React
import {
  Card,
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
  //   Select
} from "react-bootstrap";

//import axios
import axios from "axios";

//import hook history dari react router dom
import { useNavigate } from "react-router-dom";

const KeranjangCreate = () => {
  //state
  const [jumlah, setJumlah] = useState("");
  const [productId, setProductId] = useState("2");
  const [products, setProducts] = useState([]);
  const [total_harga, setTotal_harga] = useState("");

  //state validation
  const [validation, setValidation] = useState({});
  //history
  const navigate = useNavigate();
  // get categories
  useEffect(() => {
    //get semua categori
    fetchData();
  }, []);
  // get semua categori dan setCategories state
  const fetchData = () => {
    axios.get("http://127.0.0.1:5000/api/product").then((data) => {
      console.log(data);
      setProducts(data?.data);
    });
  };

  //method "storePost"
  const storeKeranjang = async (e) => {
    console.log(e);
    e.preventDefault();

    //send data to server
    await axios
      .post("http://127.0.0.1:5000/api/keranjang", {
        jumlah: jumlah,
        productId: productId,
        total_harga: total_harga,
      })
      .then(() => {
        //redirect
        // history.push('/category');
        navigate("/keranjang", { replace: true });
      })
      .catch((error) => {
        console.log(error.response);
        //assign validation on state
        setValidation(error.response.data);
      });
  };

  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col md="{12}">
            <Card className="border-0 rounded shadow-sm">
              <Card.Body>
                {validation.message && (
                  <Alert variant="danger">
                    <ul className="mt-0 mb-0">{validation.message}</ul>
                  </Alert>
                )}
                <Form onSubmit={storeKeranjang}>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Jumlah</Form.Label>
                    <Form.Control
                      type="text"
                      value={jumlah}
                      onChange={(e) => setJumlah(e.target.value)}
                      placeholder="masukkan jumlah beli"
                    />
                  </Form.Group>

                  <Form.Label>Product</Form.Label>
                  <Form.Select
                    value={productId}
                    onChange={(e) => setProductId(e.target.value)}
                  >
                    {products.map((item, i) => {
                      return <option value={item.id}>{item.nama}</option>;
                    })}
                  </Form.Select>

                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Total Harga</Form.Label>
                    <Form.Control
                      type="text"
                      value={total_harga}
                      onChange={(e) => setTotal_harga(e.target.value)}
                      placeholder="masukkan total harga"
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    SIMPAN
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default KeranjangCreate;

//import hook useState dan useEffect from react
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
} from "react-bootstrap";

//import axios
import axios from "axios";

//import hook history dan params dari react router dom
import { useNavigate, useParams } from "react-router-dom";

const KeranjangUpdate = () => {
  //state
  const [jumlah, setJumlah] = useState("");
  const [productId, setProductId] = useState("2");
  const [products, setProducts] = useState([]);
  const [total_harga, setTotal_harga] = useState("");

  //state validation
  const [validation, setValidation] = useState({});

  //history
  const navigate = useNavigate();

  //get ID from parameter URL
  const { id } = useParams();

  //hook useEffect
  useEffect(() => {
    //panggil function "getPOstById"
    getProductById();
    fetchData();
  }, []);
  // get semua product dan setProducts state
  const fetchData = () => {
    axios.get("http://127.0.0.1:5000/api/product").then((data) => {
      console.log(data);
      setProducts(data?.data);
    });
  };

  //function "getPostById"
  const getProductById = async () => {
    //get data from server
    const response = await axios.get(`http://localhost:5000/api/keranjang/${id}`);
    //get response data
    const data = await response.data;
    console.log(data);
    //assign data to state
    setJumlah(data.jumlah);
    setProductId(data.productId);
    setTotal_harga(data.total_harga);
  };

  //function "update Keranjang"
  const updateKeranjang = async (e) => {
    e.preventDefault();

    //send data to server
    await axios
      .put(`http://localhost:5000/api/keranjang/${id}`, {
        jumlah: jumlah,
        productId: productId,
        total_harga: total_harga,
      
      })
      .then(() => {
        //redirect
        navigate("/keranjang", { replace: true });
      })
      .catch((error) => {
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
                    <ul class="mt-0 mb-0"></ul>
                  </Alert>
                )}
                <Form onSubmit={updateKeranjang}>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Jumlah</Form.Label>
                    <Form.Control
                      type="text"
                      value={jumlah}
                      onChange={(e) => setJumlah(e.target.value)}
                      placeholder="edit jumlah beli"
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
                  <Form.Group className="mb-3" controlId="formBasicPrice">
                    <Form.Label>Total Harga</Form.Label>
                    <Form.Control
                      type="text"
                      value={total_harga}
                      onChange={(e) => setTotal_harga(e.target.value)}
                      placeholder="edit total harga"
                    />
                  </Form.Group>
                  
                  <Button variant="primary" type="submit">
                    UPDATE
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
export default KeranjangUpdate;

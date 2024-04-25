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

const PesananCreate = () => {
  //state
  const [customerId, setCustomerId] = useState(null);
  const [customers, setCustomers] = useState([]);
  const [productId, setProductId] = useState(null);
  const [products, setProducts] = useState([]);
  const [ProductById, setProductById] = useState();
  const [harga, setHarga] = useState(0);
  const [jumlah, setJumlah] = useState(0);
  const [total_harga, setTotal_harga] = useState(0);
  const [keterangan, setKeterangan] = useState("");
  const [total_bayar, setTotal_bayar] = useState(0);
  // const [status_bayar, setStatus_bayar] = useState("belum bayar");

  //state validation
  const [validation, setValidation] = useState({});
  //history
  const navigate = useNavigate();
  // get categories
  useEffect(() => {
    //get semua customer
    fetchDataCustomer();
    fetchDataProduct();
  }, []);
  // get semua customer dan setCustomers state
  const fetchDataCustomer = () => {
    axios.get("http://127.0.0.1:5000/api/customer").then((data) => {
      console.log(data);
      setCustomers(data?.data);
      setCustomerId(data?.data[0].id);
    });
  };
  // get semua product dan setProducts state
  const fetchDataProduct = () => {
    axios.get("http://127.0.0.1:5000/api/product").then((data) => {
      console.log(data);
      setProducts(data?.data);
      setProductId(data?.data[0].id);
    });
  };

  const getProductById = async (id) => {
    //get data from server
    const response = await axios.get(`http://localhost:5000/api/product/${id}`);
    //get response data
    const data = await response.data;
    console.log(data);
    //assign data to state
    setProductById(data);
    setHarga(data.harga);
    console.log(data.harga);
  };

  //method "storePost"
  const storePesanan = async (e) => {
    console.log(e);
    e.preventDefault();

    //send data to server
    await axios
      .post("http://127.0.0.1:5000/api/pesanan", {
        customerId: customerId,
        productId: productId,
        jumlah: jumlah,
        total_harga: total_harga,
        keterangan: keterangan,
        total_bayar: total_bayar,
        // status_bayar: status_bayar,
      })
      .then(() => {
        //redirect
        // history.push('/category');
        navigate("/pesanan", { replace: true });
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
                <Form onSubmit={storePesanan}>
                  <Form.Label>Customer</Form.Label>
                  <Form.Select
                    value={customerId}
                    onChange={(e) => setCustomerId(e.target.value)}
                  >
                    {customers.map((item, i) => {
                      return <option value={item.id}>{item.nama}</option>;
                    })}
                  </Form.Select>

                  <Form.Label>Product</Form.Label>
                  <Form.Select
                    value={productId}
                    onChange={(e) => {
                      setProductId(e.target.value);
                      getProductById(e.target.value);
                      console.log(`test`);
                    }}
                  >
                    {products.map((item, i) => {
                      return <option value={item.id}>{item.nama}</option>;
                    })}
                  </Form.Select>

                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Jumlah</Form.Label>
                    <Form.Control
                      type="text"
                      value={jumlah}
                      onChange={(e) => {
                        setJumlah(e.target.value);
                        setTotal_harga(e.target.value * harga);
                        setTotal_bayar(e.target.value * harga);
                      }}
                      placeholder=" jumlah beli"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Total Harga</Form.Label>
                    <Form.Control
                      type="text"
                      value={total_harga}
                      onChange={(e) => setTotal_harga(e.target.value)}
                      placeholder="Total Harga"
                      readOnly
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Keterangan</Form.Label>
                    <Form.Control
                      type="text"
                      value={keterangan}
                      onChange={(e) => setKeterangan(e.target.value)}
                      placeholder="masukkan keterangan"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Total Bayar</Form.Label>
                    <Form.Control
                      type="text"
                      value={total_bayar}
                      onChange={(e) => setTotal_bayar(e.target.value)}
                      placeholder="masukkan jumlah beli"
                      readOnly
                    />
                  </Form.Group>
                  {/* <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Status Bayar</Form.Label>
                    <Form.Control
                      type="text"
                      value={status_bayar}
                      onChange={(e) => setStatus_bayar(e.target.value)}
                      // placeholder="masukkan jumlah beli"
                    />
                  </Form.Group> */}

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

export default PesananCreate;

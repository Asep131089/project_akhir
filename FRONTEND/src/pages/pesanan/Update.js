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

const PesananUpdate = () => {
  //state
  const [customerId, setCustomerId] = useState(null);
  const [customers, setCustomers] = useState([]);
  const [productId, setProductId] = useState(null);
  const [products, setProducts] = useState([]);
  const [ProductById, setProductById] = useState();
  const [jumlah, setJumlah] = useState(0);
  const [total_harga, setTotal_harga] = useState(0);
  const [keterangan, setKeterangan] = useState("");
  const [total_bayar, setTotal_bayar] = useState(0);
  // State by Product
  const [harga, setHarga] = useState(0);

  //state validation
  const [validation, setValidation] = useState({});

  //history
  const navigate = useNavigate();

  //get ID from parameter URL
  const { id } = useParams();

  //hook useEffect
  useEffect(() => {
    //panggil function "getPOstById"
    getPesananById();

    fetchDataCustomer();
    fetchDataProduct();
  }, []);
  // get semua customers dan setCustomerId state
  const fetchDataCustomer = () => {
    axios.get("http://127.0.0.1:5000/api/customer").then((data) => {
      console.log(data);
      setCustomers(data?.data);
    });
  };

  // get semua product dan setProductId state
  const fetchDataProduct = () => {
    axios.get("http://127.0.0.1:5000/api/product").then((data) => {
      // console.log(data);
      setProducts(data?.data);
    });
  };

  const getProductById = async (idp) => {
    //get data from server
    const response = await axios.get(
      `http://localhost:5000/api/product/${idp}`
    );
    //get response data
    const data = await response.data;
    console.log(data);
    //assign data to state
    setHarga(data.harga);
  };

  //function "getPostById"
  const getPesananById = async () => {
    //get data from server
    const response = await axios.get(`http://localhost:5000/api/pesanan/${id}`);
    //get response data
    const data = await response.data;
    // console.log("tanda");
    // console.log(data);

    //assign data to state
    setCustomerId(data.customerId);
    setProductId(data.productId);
    setJumlah(data.jumlah);
    setTotal_harga(data.total_harga);
    setKeterangan(data.keterangan);
    setTotal_bayar(data.total_bayar);
    getProductById(data.productId);

    // console.log(data.harga);
  };

  //function "update Pesanan"
  const updatePesanan = async (e) => {
    e.preventDefault();

    //send data to server
    await axios
      .put(`http://localhost:5000/api/pesanan/${id}`, {
        customerId: customerId,
        productId: productId,
        jumlah: jumlah,
        total_harga: total_harga,
        keterangan: keterangan,
        total_bayar: total_bayar,
      })
      .then(() => {
        //redirect
        navigate("/pesanan", { replace: true });
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
                <Form onSubmit={updatePesanan}>
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
                    onChange={(e) => setProductId(e.target.value)}
                  >
                    {products.map((item, i) => {
                      return <option value={item.id}>{item.nama}</option>;
                    })}
                  </Form.Select>

                  <Form.Group className="mb-3" controlId="formBasicJumlah">
                    <Form.Label>Jumlah </Form.Label>
                    <Form.Control
                      type="text"
                      value={jumlah}
                      onChange={(e) => {
                        setJumlah(e.target.value);
                        setTotal_harga(e.target.value * harga);
                        setTotal_bayar(e.target.value * harga);
                        console.log(e.target.value);
                        console.log(harga);
                      }}
                      placeholder="edit jumlah beli"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicTotalHarga">
                    <Form.Label>Total Harga</Form.Label>
                    <Form.Control
                      type="text"
                      value={total_harga}
                      onChange={(e) => setTotal_harga(e.target.value)}
                      placeholder="edit total harga"
                      readOnly
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicKeterangan">
                    <Form.Label>Keterangan</Form.Label>
                    <Form.Control
                      type="text"
                      value={keterangan}
                      onChange={(e) => setKeterangan(e.target.value)}
                      placeholder="edit keterangan"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicTotalBayar">
                    <Form.Label>Total Bayar</Form.Label>
                    <Form.Control
                      type="text"
                      value={total_bayar}
                      onChange={(e) => setTotal_bayar(e.target.value)}
                      placeholder="edit Total Bayar"
                      readOnly
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
export default PesananUpdate;

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

const ProductsUpdate = () => {
  //state
  const [kode, setKode] = useState("");
  const [nama, setNama] = useState("");
  const [harga, setHarga] = useState("");
  const [categoryId, setCategoryId] = useState("2");
  const [categories, setCategories] = useState([]);
  const [is_ready, setIs_ready] = useState("");
  const [gambar, setGambar] = useState("");

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
  // get semua categori dan setCategories state
  const fetchData = () => {
    axios.get("http://127.0.0.1:5000/api/category").then((data) => {
      console.log(data);
      setCategories(data?.data);
    });
  };

  //function "getPostById"
  const getProductById = async () => {
    //get data from server
    const response = await axios.get(`http://localhost:5000/api/product/${id}`);
    //get response data
    const data = await response.data;
    console.log(data);
    //assign data to state
    setKode(data.kode);
    setNama(data.nama);
    setHarga(data.harga);
    setIs_ready(data.is_ready);
    setGambar(data.gambar);
    setCategoryId(data.categoryId);
  };

  //function "update Product"
  const updateProduct = async (e) => {
    e.preventDefault();

    //send data to server
    await axios
      .put(`http://localhost:5000/api/product/${id}`, {
        kode: kode,
        nama: nama,
        harga: harga,
        is_ready: is_ready,
        gambar: gambar,
        categoryId: categoryId,
      })
      .then(() => {
        //redirect
        navigate("/products", { replace: true });
      })
      .catch((error) => {
        //assign validation on state
        setValidation(error.response.data);
      });
  };

  return (
    <>
      <Container >
        <Row>
          <Col md="{12}">
            <Card className="border-0 rounded shadow-sm">
              <Card.Body>
                {validation.message && (
                  <Alert variant="danger">
                    <ul class="mt-0 mb-0"></ul>
                  </Alert>
                )}
                <Form onSubmit={updateProduct}>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Kode</Form.Label>
                    <Form.Control
                      type="text"
                      value={kode}
                      onChange={(e) => setKode(e.target.value)}
                      placeholder="masukan kode product"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Label>Nama</Form.Label>
                    <Form.Control
                      type="text"
                      value={nama}
                      onChange={(e) => setNama(e.target.value)}
                      placeholder="masukan description kategori"
                    />
                  </Form.Group>

                  <Form.Label>Category</Form.Label>
                  <Form.Select
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                  >
                    {categories.map((item, i) => {
                      return <option value={item.id}>{item.nama}</option>;
                    })}
                  </Form.Select>
                  <Form.Group className="mb-3" controlId="formBasicPrice">
                    <Form.Label>Harga</Form.Label>
                    <Form.Control
                      type="text"
                      value={harga}
                      onChange={(e) => setHarga(e.target.value)}
                      placeholder="masukkan Harga"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicStock">
                    <Form.Label>Is_Ready</Form.Label>
                    <Form.Control
                      type="text"
                      value={is_ready}
                      onChange={(e) => setIs_ready(e.target.value)}
                      placeholder="masukkan Is_Ready"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicStock">
                    <Form.Label>Gambar</Form.Label>
                    <Form.Control
                      type="text"
                      value={gambar}
                      onChange={(e) => setGambar(e.target.value)}
                      placeholder="masukkan Is_Ready"
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
export default ProductsUpdate;

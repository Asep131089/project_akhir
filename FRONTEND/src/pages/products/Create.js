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
  // Select
} from "react-bootstrap";

//import axios
import axios from "axios";

//import hook history dari react router dom
import { useNavigate } from "react-router-dom";

const ProductsCreate = () => {
  //state
  const [kode, setKode] = useState("");
  const [nama, setNama] = useState("");
  const [categoryId, setCategoryId] = useState("2");
  const [categories, setCategories] = useState([]);
  const [harga, setHarga] = useState("");
  const [is_ready, setIs_ready] = useState("");
  const [gambar, setGambar] = useState("");

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
    axios.get("http://127.0.0.1:5000/api/category").then((data) => {
      console.log(data);
      setCategories(data?.data);
    });
  };

  //method "storePost"
  const storeProduct = async (e) => {
    console.log(e);
    e.preventDefault();

    //send data to server
    await axios
      .post("http://127.0.0.1:5000/api/product", {
        kode: kode,
        nama: nama,
        categoryId: categoryId,
        harga: harga,
        is_ready: is_ready,
        gambar: gambar,
      })
      .then(() => {
        //redirect
        // history.push('/category');
        navigate("/products", { replace: true });
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
                    <ul className="mt-0 mb-0">
                      {
                       
                        validation.message
                      }
                    </ul>
                  </Alert>
                )}
                <Form onSubmit={storeProduct}>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Kode</Form.Label>
                    <Form.Control
                      type="text"
                      value={kode}
                      onChange={(e) => setKode(e.target.value)}
                      placeholder="masukkan kode"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nama</Form.Label>
                    <Form.Control
                      type="text"
                      value={nama}
                      onChange={(e) => setNama(e.target.value)}
                      placeholder="masukkan nama"
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
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Harga</Form.Label>
                    <Form.Control
                      type="text"
                      value={harga}
                      onChange={(e) => setHarga(e.target.value)}
                      placeholder="masukkan harga"
                    />
                  </Form.Group>
                  
                  <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Label>Is_Ready</Form.Label>
                    <Form.Control
                      type="text"
                      value={is_ready}
                      onChange={(e) => setIs_ready(e.target.value)}
                      placeholder="masukkan is_ready"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPrice">
                    <Form.Label>Gambar</Form.Label>
                    <Form.Control
                      type="text"
                      value={gambar}
                      onChange={(e) => setGambar(e.target.value)}
                      placeholder="masukkan gambar"
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

export default ProductsCreate;

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

const CustomerUpdate = () => {
  //state
  const [nama, setName] = useState("");
  const [jenis_kelamin, setJenis_kelamin] = useState("");
  const [alamat, setAlamat] = useState("");
  const [kota, setKota] = useState("");

  //state validation
  const [validation, setValidation] = useState({});

  //history
  const navigate = useNavigate();

  //get ID from parameter URL
  const { id } = useParams();

  //hook useEffect
  useEffect(() => {
    //panggil function "getPOstById"
    getCategoryById();
  }, []);

  //function "getPostById"
  const getCategoryById = async () => {
    //get data from server
    const response = await axios.get(
      `http://localhost:5000/api/customer/${id}`
    );
    //get response data
    const data = await response.data;
    console.log(data);
    //assign data to state
    setName(data.nama);
    setJenis_kelamin(data.jenis_kelamin);
    setAlamat(data.alamat);
    setKota(data.kota);
  };

  //function "update Category"
  const updateCustomer = async (e) => {
    e.preventDefault();

    //send data to server
    await axios
      .put(`http://localhost:5000/api/customer/${id}`, {
        nama: nama,
        jenis_kelamin: jenis_kelamin,
        alamat: alamat,
        kota: kota,
      })
      .then(() => {
        //redirect
        // history.push('/posts');
        navigate("/customer", { replace: true });
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
                <Form onSubmit={updateCustomer}>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nama</Form.Label>
                    <Form.Control
                      type="text"
                      value={nama}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="update nama customer"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Jenis Kelamin</Form.Label>
                    <Form.Control
                      type="text"
                      value={jenis_kelamin}
                      onChange={(e) => setJenis_kelamin(e.target.value)}
                      placeholder="update jenis kelamin customer"
                    />
                  <div>
                      <Form.Check
                      type="radio"
                      label="Laki-laki"
                      name="jenis_kelamin"
                      checked={jenis_kelamin === "laki-laki"}
                      onChange={() => setJenis_kelamin("laki-laki")}
                    />
                    <Form.Check
                      type="radio"
                      label="Perempuan"
                      name="jenis_kelamin"
                      checked={jenis_kelamin === "perempuan"}
                      onChange={() => setJenis_kelamin("perempuan")}
                    />
                    </div>

                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Alamat</Form.Label>
                    <Form.Control
                      type="text"
                      value={alamat}
                      onChange={(e) => setAlamat(e.target.value)}
                      placeholder="update alamat customer"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Kota</Form.Label>
                    <Form.Control
                      type="text"
                      value={kota}
                      onChange={(e) => setKota(e.target.value)}
                      placeholder="update kota customer"
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
export default CustomerUpdate;

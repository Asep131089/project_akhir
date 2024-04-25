//import hook useState from react
import { useState } from "react";

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

//import hook history dari react router dom
import { useNavigate } from "react-router-dom";

const CustomerCreate = () => {
  //state
  const [nama, setNama] = useState("");
  const [jenis_kelamin, setJenis_kelamin] = useState("");
  const [alamat, setAlamat] = useState("");
  const [kota, setKota] = useState("");

  //state validation
  const [validation, setValidation] = useState({});
  //history
  const navigate = useNavigate();

  //method "storePost"
  const storeCustomer = async (e) => {
    console.log(e);
    e.preventDefault();

    //send data to server
    await axios
      .post("http://127.0.0.1:5000/api/customer", {
        nama: nama,
        jenis_kelamin: jenis_kelamin,
        alamat: alamat,
        kota: kota,
      })
      .then(() => {
        //redirect
        // history.push('/category');
        navigate("/customer", { replace: true });
      })
      .catch((error) => {
        console.log(error);
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
                <Form onSubmit={storeCustomer}>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nama</Form.Label>
                    <Form.Control
                      type="text"
                      value={nama}
                      onChange={(e) => setNama(e.target.value)}
                      placeholder="masukkan nama"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Jenis Kelamin</Form.Label>
                    <Form.Control
                      type="text"
                      value={jenis_kelamin}
                      onChange={(e) => setJenis_kelamin(e.target.value)}
                      // placeholder="masukkan Jenis Kelamin"
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
                      placeholder="masukkan Alamat"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Kota</Form.Label>
                    <Form.Control
                      type="text"
                      value={kota}
                      onChange={(e) => setKota(e.target.value)}
                      placeholder="masukkan kota"
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

export default CustomerCreate;

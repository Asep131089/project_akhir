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

const CategoriesCreate = () => {
  //state
  const [nama, setNama] = useState("");

  //state validation
  const [validation, setValidation] = useState({});
  //history
  const navigate = useNavigate();

  //method "storePost"
  const storeCategory = async (e) => {
    console.log(e);
    e.preventDefault();

    //send data to server
    await axios
      .post("http://127.0.0.1:5000/api/category", {
        nama: nama,
       
      })
      .then(() => {
        //redirect
        // history.push('/category');
        navigate("/categories", { replace: true });
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
                    <ul className="mt-0 mb-0">
                      {
                        // validation.message.map((error,index)=>(
                        //         <li key={index}>
                        //                 {
                        //                         `${error.param} : ${error.msg}`
                        //                 }
                        //         </li>
                        // ))
                        validation.message
                      }
                    </ul>
                  </Alert>
                )}
                <Form onSubmit={storeCategory}>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nama</Form.Label>
                    <Form.Control
                      type="text"
                      value={nama}
                      onChange={(e) => setNama(e.target.value)}
                      placeholder="masukkan nama"
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

export default CategoriesCreate;

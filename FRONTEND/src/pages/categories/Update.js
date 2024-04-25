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

const CategoriesUpdate = () => {
  //state
  const [nama, setName] = useState("");

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
      `http://localhost:5000/api/category/${id}`
    );
    //get response data
    const data = await response.data;
    console.log(data);
    //assign data to state
    setName(data.nama);
  };

  //function "update Category"
  const updateCategory = async (e) => {
    e.preventDefault();

    //send data to server
    await axios
      .put(`http://localhost:5000/api/category/${id}`, {
        nama: nama,
      })
      .then(() => {
        //redirect
        // history.push('/posts');
        navigate("/categories", { replace: true });
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
                <Form onSubmit={updateCategory}>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nama</Form.Label>
                    <Form.Control
                      type="text"
                      value={nama}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="masukan nama kategori"
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
export default CategoriesUpdate;

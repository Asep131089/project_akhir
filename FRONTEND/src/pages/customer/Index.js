import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const Customer = () => {
  const [customers, setCustomer] = useState([]);

  useEffect(() => {
    //get semua Menu
    fetchData();
  }, []);

  // get semua product dan setProducts state
  const fetchData = () => {
    axios.get("http://127.0.0.1:5000/api/customer").then((data) => {
      console.log(data);
      setCustomer(data?.data);
    });
  };
  // delete category by id
  const deleteCustomer = async (id) => {
    //sending
    await axios.delete(`http://localhost:5000/api/customer/${id}`);
    // get semua category
    fetchData();
  };

  return (
    <Container>
      <Button as={Link} to="/customer/create" className="mb-3">
        Tambah Customer
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Jenis Kelamin</th>
            <th>Alamat</th>
            <th>Kota</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((item, i) => {
            return (
              <tr key={item.id}>
                <td>{i + 1}</td>
                <td>{item.nama}</td>
                <td>{item.jenis_kelamin}</td>
                <td>{item.alamat}</td>
                <td>{item.kota}</td>
                <td>
                  <Button as={Link} to={`/customer/update/${item.id}`} size="sm">
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() => deleteCustomer(item.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};
export default Customer;

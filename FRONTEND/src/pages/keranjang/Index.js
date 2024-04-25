import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const Keranjangs = () => {
  const [keranjangs, setKeranjang] = useState([]);

  useEffect(() => {
    //get semua products
    fetchData();
  }, []);

  // get semua product dan setProducts state
  const fetchData = () => {
    axios.get("http://127.0.0.1:5000/api/keranjang").then((data) => {
      console.log(data);
      setKeranjang(data?.data);
    });
  };
  // delete category by id
  const deleteKeranjang = async (id) => {
    //sending
    await axios.delete(`http://localhost:5000/api/keranjang/${id}`);
    // get semua category
    fetchData();
  };

  return (
    <Container>
      <Button as={Link} to="/keranjang/create" className="mb-3">
        Tambah Keranjang
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Jumlah</th>
            <th>Product</th>
            <th>Total Harga</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {keranjangs.map((item, i) => {
            return (
              <tr key={item.id}>
                <td>{i + 1}</td>
                <td>{item.jumlah}</td>
                <td>{item.products == null ? "null" : item.products.nama}</td>    
                <td>{item.total_harga}</td>
                <td>
                  <Button
                    as={Link}
                    to={`/keranjang/update/${item.id}`}
                    size="sm"
                  >
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() => deleteKeranjang(item.id)}
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
export default Keranjangs;

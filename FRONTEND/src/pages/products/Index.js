import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //get semua products
    fetchData();
  }, []);

  // get semua product dan setProducts state
  const fetchData = () => {
    axios.get("http://127.0.0.1:5000/api/product").then((data) => {
      console.log(data);
      setProducts(data?.data);
    });
  };
  // delete category by id
  const deleteProduct = async (id) => {
    //sending
    await axios.delete(`http://localhost:5000/api/product/${id}`);
    // get semua category
    fetchData();
  };

  return (
    <Container>
      <Button as={Link} to="/products/create" className="mb-3">
        Tambah Product
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Kode</th>
            <th>Nama</th>
            <th>Harga</th>
            <th>Is_Ready</th>
            <th>Gambar</th>
            <th>Kategori</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((item, i) => {
            return (
              <tr key={item.id}>
                <td>{i + 1}</td>
                <td>{item.kode}</td>
                <td>{item.nama}</td>
                <td>{item.harga}</td>
                <td>{item.is_ready}</td>
                <td>{item.gambar}</td>
                <td>{item.category == null ? "null" : item.category.nama}</td>
                <td>
                  <Button
                    as={Link}
                    to={`/products/update/${item.id}`}
                    size="sm"
                  >
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() => deleteProduct(item.id)}
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
export default Products;

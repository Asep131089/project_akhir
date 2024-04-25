import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Pesanans = () => {
  const [Pesanans, setPesanan] = useState([]);

  useEffect(() => {
    //get semua Menu
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get("http://127.0.0.1:5000/api/pesanan").then((data) => {
      console.log(data);
      setPesanan(data?.data);
    });
  };

  const bayarPesanan = async (id) => {
    await axios.put(`http://localhost:5000/api/pesanan/${id}`, { status_bayar: "sudah bayar" });
    fetchData();
  };


  // delete category by id
  const deletePesanan = async (id) => {
    //sending
    await axios.delete(`http://localhost:5000/api/pesanan/${id}`);
    // get semua category
    fetchData();
  };

  return (
    <Container>
      <Button as={Link} to="/pesanan/create" className="mb-3">
        Tambah Pesanan
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Customer</th>
            <th>Product</th>
            <th>Jumlah</th>
            <th>Total Harga</th>
            <th>Keterangan</th>
            <th>Total Bayar</th>
            <th>Status Bayar</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {Pesanans.map((item, i) => {
            return (
              <tr key={item.id}>
                <td>{i + 1}</td>
                {/* customer ini adalah as yang ada hubunganya dengan 1 to many di index backend atau yang di includenya apa di postman*/}
                <td>{item.customer == null ? "null" : item.customer.nama}</td>
                {/* products ini adalah as yang ada hubunganya dengan 1 to many di index backend atau yang di includenya apa di postman */}
                <td>{item.products == null ? "null" : item.products.nama}</td>
                <td>{item.jumlah}</td>
                <td>{item.total_harga}</td>
                <td>{item.keterangan}</td>
                <td>{item.total_bayar}</td>
                <td>{item.status_bayar}</td>
                <td>
                  <Button as={Link} to={`/pesanan/update/${item.id}`} size="sm">
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() => deletePesanan(item.id)}
                  >
                    Delete
                  </Button>

                  <Button
                    size="sm"
                    variant="success"
                    as={Link}
                    to={`/bayar`}
                    onClick={() => bayarPesanan(item.id)}
                    
                  >
                      <FontAwesomeIcon
                  icon={faShoppingCart}
                  style={{ marginRight: "1rem" }}
                />
                    <strong>Bayar</strong>
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
export default Pesanans;

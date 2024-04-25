import axios from "axios";
import React, {useState,useEffect} from "react";
import { Button, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const Categories =()=>{
    const [categories,setCategories]=useState([]);

    useEffect(()=>{
        //get semua categori
        fetchData();
    },[]);

    // get semua categori dan setCategories state
    const fetchData =()=>{
        axios.get("http://127.0.0.1:5000/api/category").then((data)=>{
            console.log(data);
            setCategories(data?.data);
        });
    }
    // delete category by id
    const deleteCategory = async (id) => {

        //sending
        await axios.delete(`http://localhost:5000/api/category/${id}`);
        // get semua category
        fetchData();
    }

    return (
        <Container>
            <Button as={Link} to="/categories/create" className="mb-3" >Tambah Kategori</Button>
            <Table striped bordered hover>
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Nama</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                {categories.map((item,i)=>{
                    return (
                    <tr key={item.id}>
                        <td>{i+1}</td>
                        <td>{item.nama}</td>
                        <td>
                        <Button as={Link} to={`/categories/update/${item.id}`} size="sm" >Edit</Button>
                        <Button size="sm" variant="danger" onClick={()=>deleteCategory(item.id)} >Delete</Button>
                        </td>
                    </tr>
                    );
                })}
            </tbody>

            </Table>
        </Container>

    );
}
export default Categories;
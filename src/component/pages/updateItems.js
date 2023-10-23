import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { Form, Button } from "react-bootstrap";
import apiItems from "../api/apiItems";

const UpdateItems = () => {
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: +0,
    stock: +0,
  });

  const navigateTo = useNavigate();
  const params = useParams();

  const getInfoItems = () => {
    const { id } = params;
    apiItems.getDetails(id, (result) => {
      setForm({
        name: result.name,
        category: result.category,
        price: result.price,
        stock: result.stock,
      });
      console.log(result);
    });
  };

  useEffect(() => {
    getInfoItems();
  }, []);

  const submitHandler = async () => {
    apiItems.updateItems(params.id, form);
    navigateTo("/items");
    await Swal.fire("Item edited!");
  };

  return (
    <>
      <h1>Edit Items</h1>
      <h4>{/* Place your item name or identifier here */}</h4>
      <Form>
        <Form.Group>
          <Form.Label>Name :</Form.Label>
          <Form.Control type="text" className="form-control" onChange={(e) => setForm({ ...form, name: e.target.value })} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Type :</Form.Label>
          <Form.Control type="text" className="form-control" onChange={(e) => setForm({ ...form, category: e.target.value })} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Price :</Form.Label>
          <Form.Control type="text" className="form-control" onChange={(e) => setForm({ ...form, price: e.target.value })} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Stock :</Form.Label>
          <Form.Control type="text" className="form-control" onChange={(e) => setForm({ ...form, stock: e.target.value })} />
        </Form.Group>

        <Button variant="primary" onClick={submitHandler}>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default UpdateItems;

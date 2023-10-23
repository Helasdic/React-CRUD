import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import apiItems from "../api/apiItems";

const AddItems = () => {
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: +0,
    stock: +0,
  });

  const navigateTo = useNavigate();

  const submitHandler = async () => {
    apiItems.addItems(form);
    navigateTo("/items");
    await Swal.fire("Item added!");
  };

  return (
    <div>
      <h1>Add Items</h1>
      <Form>
        <Form.Group>
          <Form.Label>Name :</Form.Label>
          <Form.Control type="text" className="form-control" onChange={(e) => setForm({ ...form, name: e.target.value })} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Category :</Form.Label>
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
    </div>
  );
};

export default AddItems;

// import React from "react";
// import { Button, Container, Form } from "react-bootstrap";

// const AddItems = () => {
//   //   const [items, setItems] = useState([]);

//   return (
//     <div>
//       <h2 className="text-uppercase text-center">Tambah Item</h2>
//       <Container>
//         <row>
//           <Form>
//             <Form.Group className="mb-3" controlId="formName">
//               <Form.Label>Name</Form.Label>
//               <Form.Control type="name" placeholder="Enter name" />
//               <Form.Text className="text-muted"></Form.Text>
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formCategory">
//               <Form.Label>Category</Form.Label>
//               <Form.Control type="category" placeholder="Category" />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formPrice">
//               <Form.Label>Price</Form.Label>
//               <Form.Control type="price" placeholder="Price" />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formImage">
//               <Form.Label>Image</Form.Label>
//               <Form.Control type="text" placeholder="Image" />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicCheckbox">
//               <Form.Check type="checkbox" label="Check me out" />
//             </Form.Group>
//             <Button variant="danger" type="submit">
//               Submit
//             </Button>
//           </Form>
//         </row>
//       </Container>
//     </div>
//   );
// };

// export default AddItems;

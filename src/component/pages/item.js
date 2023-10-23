import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import apiItems from "../api/apiItems";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import DeleteItems from "./DeleteItems";

const Item = () => {
  const [items, setItems] = useState([]);

  const getData = async () => {
    const result = await apiItems.findall();
    console.log(result.data);
    setItems(result.data);
  };

  const navigateTo = useNavigate();

  const deleteHandler = (id) => {
    DeleteItems(id);
    getData();
    navigateTo("/items");
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((data, i) => {
            const { id, name, category, price, stock } = data;
            return (
              <tr key={id}>
                <td>{i + 1}</td>
                <td>{name}</td>
                <td>{category}</td>
                <td>{price}</td>
                <td>{stock}</td>
                <td>
                  <button
                    onClick={() => {
                      deleteHandler(id);
                    }}
                    className="btn btn-sm btn-danger"
                  >
                    <MdDeleteOutline className="me-2" />
                    Delete
                  </button>
                  <Link to={`/items/update/${id}`}>
                    <button className="btn btn-sm btn-info">
                      <MdOutlineEdit />
                      Edit
                    </button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Item;

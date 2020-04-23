import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Table } from "react-bootstrap";
const Index = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const URL = "https://heroesme.herokuapp.com/heroes/get";
    axios.get(URL).then((res) => {
      const data = res.data.data;
      setData(data);
    });
  }, []);
  const showData = data.map((item, index) => (
    <tr key={index}>
      <td>{item.name}</td>
      <td>{item.born}</td>
      <td>{item.dead}</td>
      <td>{item.description}</td>
      <td>{item.establishment}</td>
    </tr>
  ));
  return (
    <Container>
      <h1 style={{textAlign:"center"}}> LIST OF HEROES </h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr style={{textAlign:"center"}} >
            <th>Heroes Name</th>
            <th>Born</th>
            <th>Dead</th>
            <th>Description</th>
            <th>Establishment</th>
          </tr>
        </thead>
        <tbody>{showData}</tbody>
      </Table>
    </Container>
  );
};
export default Index;

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Project() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Project Title </Card.Title>
        <Card.Text>
         Something about the project 
        </Card.Text>
        <Button variant="primary">Next Project?</Button>
      </Card.Body>
    </Card>
  );
}

export default Project;

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function Project(props) {
  return (
    <Col className="col">
    <Card className="project">
      <Card.Img variant="top" src={props.projectImage} />
      <Card.Body>
        <Card.Title>{props.projectName}</Card.Title>
        <Card.Text>{props.projectDescription}</Card.Text>
        <a variant="primary" href={props.projectUrl} target="_blank">
          Launch Site
        </a>
      </Card.Body>
    </Card>
    </Col>
  );
}

export default Project;

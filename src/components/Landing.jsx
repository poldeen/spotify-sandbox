import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Card, Col, Image, Row, Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "../App.css";
import AuthService from "../services/spotifyAuth.service";
import SpotifyService from "../services/spotifyUse.service";

const Landing = () => {
  const [message, setMessage] = useState("");

  const [data, setData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    AuthService.login().then(
      () => {
        console.log("IT WORKED!");
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setMessage(resMessage);
      }
    );
  };

  const handleGet = () => {
    const id = "6GkJh85o22LfD2vgL9DP6f?si=BEh3tEUPQ5iNMpKQQXc6og";

    retrieveArtist(id);
  };

  const retrieveArtist = (id) => {
    SpotifyService.getArtist(id)
      .then((response) => {
        console.log(response);
        setData(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  function Artist() {
    console.log("IN HERE!!!!");
    return (
      <Card.Body>
        <h3>ARTIST NAME: {data.name}</h3>
        <p>FOLLOWERS: {data.followers.total}</p>
        <Image src={data.images[0].url} rounded />
      </Card.Body>
    );
  }

  return (
    <>
      <h1>Spotify App</h1>
      <Card className="text-bg-secondary">
        <Card.Header>
          <Row>
            <Col>
              <Button
                variant="primary"
                className="me-2 mb-1"
                onClick={handleSubmit}
              >
                Start Spotify
              </Button>
              <Button
                variant="secondary"
                className="me-2 mb-1"
                onClick={handleGet}
              >
                Get Artist
              </Button>
            </Col>
          </Row>
        </Card.Header>
        <div>{data === null ? null : <Artist />}</div>
      </Card>

      <Table responsive>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th className="text-end" scope="col">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ricky Antony</td>
            <td>ricky@example.com</td>
            <td className="text-end">
              <Button
                icon="edit"
                title="Edit"
                variant="action"
                className="p-0 me-2"
              />
              <Button
                icon="trash-alt"
                title="Delete"
                variant="action"
                className="p-0"
              />
            </td>
          </tr>
          <tr>
            <td>Emma Watson</td>
            <td>emma@example.com</td>
            <td className="text-end">
              <Button
                icon="edit"
                title="Edit"
                variant="action"
                className="p-0 me-2"
              />
              <Button
                icon="trash-alt"
                title="Delete"
                variant="action"
                className="p-0"
              />
            </td>
          </tr>
          <tr>
            <td>Rowen Atkinson</td>
            <td>rown@example.com</td>
            <td className="text-end">
              <Button
                icon="edit"
                title="Edit"
                variant="action"
                className="p-0 me-2"
              />
              <Button
                icon="trash-alt"
                title="Delete"
                variant="action"
                className="p-0"
              />
            </td>
          </tr>
          <tr>
            <td>Antony Hopkins</td>
            <td>antony@example.com</td>
            <td className="text-end">
              <Button
                icon="edit"
                title="Edit"
                variant="action"
                className="p-0 me-2"
              />
              <Button
                icon="trash-alt"
                title="Delete"
                variant="action"
                className="p-0"
              />
            </td>
          </tr>
          <tr>
            <td>Jennifer Schramm</td>
            <td>jennifer@example.com</td>
            <td className="text-end">
              <Button
                icon="edit"
                title="Edit"
                variant="action"
                className="p-0 me-2"
              />
              <Button
                icon="trash-alt"
                title="Delete"
                variant="action"
                className="p-0"
              />
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default Landing;

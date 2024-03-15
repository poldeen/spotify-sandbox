import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
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
      <Card>
        <h3>ARTIST NAME: {data.name}</h3>
        <p>FOLLOWERS: {data.followers.total}</p>
        <Image src={data.images[0].url} rounded />
      </Card>
    );
  }

  return (
    <>
      <h1>Spotify App</h1>
      <div className="card">
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
      </div>
      <div>{data === null ? null : <Artist />}</div>
    </>
  );
};

export default Landing;

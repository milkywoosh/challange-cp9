import { useEffect, useState } from "react";
import { Container, Row, Button, Col, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import firebase from "../Services/firebase";

const ProfilePage = () => {
  const [info, setInfo] = useState([]);
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [desc, setDesc] = useState();
  const [player, setPlayer] = useState();

  // fetch operation as soon as
  useEffect(() => {
    Fetchdata();
    // profileAsync();
  }, [info]);

  // const profileAsync = async () => {
  //   const data = await info;
  //   data.find((element) => {
  //     if (element.Email === localStorage.getItem("username")) {
  //       setUsername(element.Username);
  //       setEmail(element.Email);
  //       setDesc(element.Description);
  //     }
  //   });
  // };

  // Fetch the required data using the get() method
  const Fetchdata = () => {
    firebase
      .firestore()
      .collection("players")
      .get()
      .then((querySnapshot) => {
        // Loop through the data and store
        // it in array to display
        querySnapshot.forEach((element) => {
          var data = element.data();
          setInfo((arr) => [...arr, data]);
        });

        info.find((element) => {
          if (element.Email === localStorage.getItem("username")) {
            setUsername(element.Username);
            setEmail(element.Email);
            setDesc(element.Description);
          }
        });
      });
  };

  return (
    <div className="profile-page">
      <Container className="white-text profile-page-container">
        <Row>
          <Col className="col-3">
            <img src="/Ellipse.png" alt="" />
          </Col>
          <Col className="col-9 mt-5">
            <Stack gap={2} className="col-md-5 text-left">
              <h3>@{username}</h3>
              <h5>{email}</h5>
            </Stack>
          </Col>
        </Row>
        <Row className="text-left mt-5 mb-5">
          <Col className="col-8">{desc}</Col>
        </Row>
        <Row>
          <Col className="col-4 text-left">
            <Button className="btn btn-primary" style={{ fontSize: "16px" }}>
              <Link to="/editprofile" className="menu-link">
                Edit Profile
              </Link>
            </Button>{" "}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProfilePage;

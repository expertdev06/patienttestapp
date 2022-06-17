import React from "react";
import { Row, Col, Card, Button,ProgressBar  } from "react-bootstrap";
import { BiDotsHorizontalRounded } from 'react-icons/bi'


function Profile() {
  return (
    <div>


      <h3 className="page-title">
        <b>My Patient Profiles</b>
      </h3>




      <Row>
        <Col lg={3} md={6} sm={12} className="mt-2" >
          <Card className="profile-card">
            <div class="profileCardHeader">
              <p>2d ago</p>
              <BiDotsHorizontalRounded />
            </div>
            <Card.Img
              variant="top"
              className="profileImgBox"
              src="https://20drl41vla0f18nyev1xspfn-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/image001.jpg"
            />
            <Card.Body>
              <Card.Title>KATE<span className="surname">SMITH</span></Card.Title>
              <Card.Text>
                <div className="active-textbox">Active</div>
                <ProgressBar now={45} variant="success" />
                <p>storage 45%</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={3} md={6} sm={12} className="mt-2">
          <Card className="profile-card">
            <div class="profileCardHeader">
              <p>15d ago..</p>
              <BiDotsHorizontalRounded />
            </div>

            <Card.Img
              variant="top"
              className="profileImgBox"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
            />
            <Card.Body>
              <Card.Title>JONNATHAN<span className="surname">SMITH</span></Card.Title>
              <Card.Text>
                <div className="active-textbox">Active</div>
                <ProgressBar now={81} variant="warning"  />
                <p>storage 81%</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={3} md={6} sm={12} className="mt-2">
          <Card className="profile-card">
            <div class="profileCardHeader">
              <p>30d ago..</p>
              <BiDotsHorizontalRounded />
            </div>
            <Card.Img
              variant="top"
              className="profileImgBox"
              src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=392"
            />
            <Card.Body>
              <Card.Title>ALEXANDER<span className="surname">SMITH</span></Card.Title>
              <Card.Text>
                <div className="active-textbox">Active</div>
                <ProgressBar now={21} variant="info" />
                <p>storage 21%</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={3} md={6} sm={12} className="mt-2">
          <Card className="profile-card border-card">
            <Card.Body>
              <Card.Text>
                <span>+</span> Create New Patient Profile
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

      </Row>
      <div className="available-profileBox">
        <Row>
          <Col lg={6}>

            <p className="available-profile-status">available patient profile 3 of 5</p>
            <ProgressBar now={60} variant="success"/>



          </Col>
          <Col lg={6}>
            <div className="upgrade-box">

              <Button>upgrade</Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Profile;

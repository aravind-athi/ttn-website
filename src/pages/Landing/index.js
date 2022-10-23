import React from "react";
import { Row, Col, Typography, Button } from "antd";
import { useNavigate } from "react-router";

import "./Landing.css";

const { Title, Text } = Typography;

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-background">
      <Row gutter={[16, 24]}>
        <Col span={24}>
          <div
            className="flex-div"
            style={{ height: "14vh", padding: "2vh 1vw" }}
          >
            <div style={{ width: "8vw" }}>
              <img
                className="full-width-height"
                src="/assets/logo-sample.png"
                alt="logo"
              />
            </div>
            <div className="flex-div flex-centered">
              <div>
                <div>
                  <Title style={{ margin: 0 }}>The Tool Nation</Title>
                </div>
                <div style={{ textAlign: "end" }}>
                  <Text>- Tools with No Bias</Text>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row gutter={[16, 24]} style={{ marginTop: "10vh" }}>
        <Col span={24}>
          <div className="flex-div">
            <div className="flex-div flex-centered" style={{ width: "50vw" }}>
              <div>
                {
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                }
              </div>
            </div>
            {/* <div style={{ width: "50vw" }}>
              <div className="round-div"></div>
            </div> */}
          </div>
        </Col>
      </Row>
      <Row gutter={[16, 24]} style={{ marginTop: "3vh" }}>
        <Col span={24}>
          <Button
            onClick={() => {
              navigate("/products");
            }}
          >
            View Products
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Landing;

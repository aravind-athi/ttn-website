import React from "react";
import { Row, Col, Typography } from "antd";

import "./Landing.css";

const { Title, Text } = Typography;

const Landing = () => {
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
      <Row gutter={[16, 24]}>
        <Col span={24}>
          <div className="flex-div">
            <div className="flex-div flex-centered" style={{ width: "50vw" }}>
              <div>{"Sample Content"}</div>
            </div>
            <div style={{ width: "50vw" }}>
              <div className="round-div"></div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Landing;

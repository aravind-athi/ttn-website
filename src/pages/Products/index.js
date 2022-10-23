import React from "react";
import { Row, Col, Typography } from "antd";
import { HomeTwoTone } from "@ant-design/icons";
import { useNavigate } from "react-router";

import "./Products.css";

const { Text } = Typography;

const Products = () => {
  const navigate = useNavigate();

  return (
    <div className="products-background">
      <Row>
        <Col style={{ margin: "2vh 1vw" }}>
          <HomeTwoTone
            twoToneColor="#f9dc64"
            style={{ cursor: "pointer", fontSize: "4vh" }}
            onClick={() => {
              navigate("/");
            }}
          />
        </Col>
        <Col>
          <div style={{ margin: "1vh 1vw" }}>
            <Text style={{ fontSize: "4vh", color: "#f9dc64" }}>Products</Text>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div class="circle-wrapper">
            <div class="inner-circle">{"HMS (Hiring Management System)"}</div>
            <div class="circle deg-0">Lor</div>
            <div class="circle deg-45">Lore</div>
            <div class="circle deg-90">Lore</div>
            <div class="circle deg-135">Lorem</div>
            <div class="circle deg-180">Lorem</div>
            <div class="circle deg-225">Lorem</div>
            <div class="circle deg-270">Lorem</div>
            <div class="circle deg-315">Lorem</div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Products;

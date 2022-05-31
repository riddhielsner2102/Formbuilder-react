import React, { useState, useEffect } from "react";
import classes from "./Template.module.css";
import Backdrop from "../../../../ReusableComp/Backdrop";
import { Container, Row, Col } from "react-bootstrap";
import { Input, Button, Close, ComboBox } from "arms_v2.8_webui";
import { PrepareRequest, requests } from "../../../../../Service/getRequests";

export default function Template(props) {
  const [datasubSystem, setdatasubSystem] = useState([]);
  const [dataPermission, setdataPermission] = useState([]);

  // ------------------------------------------------------------------------------------------------------------------------------

  useEffect(async () => {
    const URL = `${requests.getPermission}?TemplateID=0`;
    const response = await PrepareRequest(URL);
    console.log("response sub-system", response.data.lstModelPermissionMapping);
    setdatasubSystem(response.data.lstModelPermissionMapping);
  }, []);

  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(
      datasubSystem.map((e) => {
        return {
          ...cards,

          value: e.AppName,
          listname: e.AppName,
          displayValue: e.AppName,
        };
      })
    );
  }, [datasubSystem]);

  // ----------------------------------------------------------------------------------------------------------------------------------------

  useEffect(async () => {
    const URL = `${requests.getPermission}?TemplateID=0`;
    const response = await PrepareRequest(URL);
    console.log("response permission", response.data.lstModelPermission);
    setdataPermission(response.data.lstModelPermission);
  }, []);

  const [cardsPermission, setCardsPermission] = useState([]);

  useEffect(() => {
    setCardsPermission(
      dataPermission.map((e) => {
        return {
          ...cardsPermission,

          value: e.PermissionTitle,
          listname: e.PermissionTitle,
          displayValue: e.PermissionTitle,
        };
      })
    );
  }, [dataPermission]);

  // ----------------------------------------------------------------------------------------------------------------------------------------------------------

  return (
    <>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opcaity: props.show ? "1" : "0",
          minWidth: "353px",
        }}
      >
        <Container
          className={[classes.divDow].join(" ")}
          style={{
            height: "400px",
            padding: "0px",
            margin: "0px",
          }}
        >
          <Row
            style={{
              backgroundColor: "#0F243E",
              color: "white",
              height: "50px",
              display: "flex",
              padding: "15px",
              marginTop: "10px",
            }}
          >
            <div style={{ display: "flex", alignItems: "space-between" }}>
              <h3
                style={{
                  color: "#fff",
                  textAlign: "left",
                  letterSpacing: 0,
                  marginTop: "2px",
                  // fontSize: "20px",
                }}
              >
                Template
              </h3>
              <Close
                onClick={props.modalClosed}
                style={{
                  transform: props.show
                    ? "translateY(0)"
                    : "translateY(-100vh)",
                  opcaity: props.show ? "1" : "0",
                  marginLeft: "440px",
                  marginTop: "2px",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              />
            </div>
          </Row>
          <Row style={{ marginTop: "30px" }}>
            <Col xs={12}>
              <Row>
                <Col xs={12}>
                  <Input
                    placeholder="TemplateName *"
                    style={{
                      width: "395px",
                      height: "48px",
                      border: "1px solid #000",
                      alignItems: "center",
                      marginLeft: "-22px",
                      textAlign: "left",
                    }}
                  />
                </Col>
              </Row>
            </Col>
            <Col xs={12}>
              <Row>
                <Col xs={12} style={{ marginLeft: "-22px", marginTop: "8px" }}>
                  <ComboBox
                    options={cards}
                    style={{
                      width: "395px",
                      height: "48px",
                      border: "1px solid #000",
                      alignItems: "center",
                      textAlign: "left",
                      "& .MuiSvgIcon-root": {
                        color: "#000",
                        backgroundColor: "#fff",
                        height: "45px",
                      },
                      ".MuiInputBase-input": {
                        height: "4.1876em",
                      },
                    }}
                  />
                </Col>
              </Row>
            </Col>
            <Col xs={12}>
              <Row>
                <Col xs={12} style={{ marginLeft: "-22px", marginTop: "8px" }}>
                  <ComboBox
                    options={cardsPermission}
                    style={{
                      width: "395px",
                      height: "48px",
                      border: "1px solid #000",
                      alignItems: "center",
                      textAlign: "left",
                      "& .MuiSvgIcon-root": {
                        color: "#000",
                        backgroundColor: "#fff",
                        height: "45px",
                      },
                    }}
                  />
                </Col>
              </Row>
            </Col>

            <Col
              style={{
                marginTop: "35px",
                marginLeft: "75%",
              }}
            >
              <Button
                text="Save"
                onClick={props.modalClosed}
                style={{
                  backgroundColor: "#01396b !important",
                  color: "#fff",
                  display: "inline-block",
                  whiteSpace: "nowrap",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  textAlign: "center",
                  margin: 0,
                  minWidth: "64px",
                  lineHeight: "40px",
                  height: "40px",
                  padding: "0 20px",
                  borderRadius: "4px",
                  overflow: "visible",
                }}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

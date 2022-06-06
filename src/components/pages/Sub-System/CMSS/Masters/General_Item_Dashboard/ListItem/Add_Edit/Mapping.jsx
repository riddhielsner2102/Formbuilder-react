import React, { useState, useEffect } from "react";
import { Input, Label, Close, AgGrid, CheckBox, Button } from "arms_v2.8_webui";
import classes from "./Mapping.module.css";
import { Row, Col } from "react-bootstrap";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  PrepareRequest,
  requests,
} from "../../../../../../../../Service/getRequests";

export default function Mapping(props) {
  const [data, setdata] = useState([]);
  const [showAction, setShowAction] = useState(false);

  const showModal = () => {
    console.log("action clicked");
    setShowAction(!showAction);
  };


  useEffect(async () => {
    const URL = `${requests.getAssesmentTypeOptions}?AssessmentTypeID=121&AppID=13&ItemTypeID=3`;
    const response = await PrepareRequest(URL);
    console.log(
      "Checklist Items Getting",
      response.data.lstModelItemRepository
    );
    setdata(response.data.lstModelItemRepository);
  }, []);
  
  const columnsDef_a = [
    {
      headerName: "Select",
      field: "",
      width: 100,
      style: {
        background: "white !important",
        color: "black !important",
        border:" 1px solid black  !important"
      },
      cellRenderer: "selectcheck",
      cellRendererParams: {
        iconType: "tick",
      },
      cellStyle: {
        height: "100%",
        display: "flex ",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "12px",
      },
    },

    {
      headerName: "Items",
      field: "RepTitle",
      cellStyle: {
        height: "100%",
        fontSize: "12px",
        backgroundColor: "#fff",
        textAlign: "center",
        overflow: "hidden",
        wordWrap: "break-word",
        textOverflow: "ellipsis",
      },
    },
  ];

  {
    //* Code/Objects of second float div */}
    const setSpreadSheet2 = () => {
      return {
        sheet: [
          {
            id: 1,
            bc: "",
            be: "",
            c: "",
            d: "",
            e: "",
          },
        ],
      };
    };

    const ContentDetails2 = setSpreadSheet2().sheet.map((ele, i) => {
      return {
        id: ele.v,
        bc: ele.bc,
        be: ele.be,
        c: ele.c,
        d: ele.d,
        e: ele.e,
      };
    });

    const frameworkComponents = {
      selectcheck: CheckBox,
    };

    const columnsDef_b = [
      {
        headerName: "Select",
        field: "bc",
        cellRenderer: "selectcheck",
        cellRendererParams: { iconType: "tick" },

        cellStyle: {
          height: "100%",
          display: "flex ",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "12px",
          backgroundColor: "#fff",
        },
      },

      {
        headerName: "Options",
        field: "be",
        cellStyle: {
          height: "100%",
          display: "flex ",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "12px",
          backgroundColor: "#fff",
        },
      },

      {
        headerName: "ShortName",
        field: "c",
        editable: true,
        cellStyle: {
          height: "100%",
          display: "flex ",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "12px",
          backgroundColor: "lightgoldenrodyellow",
          border: "1px solid brown",
        },
      },
      {
        headerName: "Order",
        fiels: "d",
        editable: true,
        cellStyle: {
          height: "100%",
          display: "flex ",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "12px",
          backgroundColor: "lightgoldenrodyellow",
          border: "1px solid brown",
        },
      },
      {
        headerName: "OptionValue",
        field: "e",
        editable: true,
        cellStyle: {
          height: "100%",
          display: "flex ",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "12px",
          backgroundColor: "lightgoldenrodyellow",
          border: "1px solid brown",
        },
      },
    ];

    return (
      <React.Fragment>
        <div
          className={classes.MapModal}
          style={{
            width: "1800px",
          }}
        >
          {/*Code of folats left and right*/}
          <div
            style={{
              height: "900px",
              width: "80%",
              flexDirection: "row",
              boxSizing: "border-box",
              display: "flex",
            }}
          >
            <div
              className="float-dev"
              style={{
                border: "1px solid grey",
                flex: "1 1 100%",
                boxSizing: "border-box",
                maxWidth: "30%",
                marginRight: "32px",
                height: "700px",
                marginLeft: "80px",
                marginTop: "24px",
              }}
            >
              {/* Code of filter*/}
              <div
                style={{
                  borderBottom: "1px solid lightgrey",
                  padding: "15px",
                }}
              >
                <Row>
                  <Col
                    xs={12}
                    style={{
                      display: "flex",
                      borderWidth: "0",
                      alignItems: "center",
                      boxSizing: "border-box",
                    }}
                  >
                    <Row>
                      <Col
                        xs={12}
                        style={{
                          backgroundColor: "#F8F8F8",
                        }}
                      >
                        <Label
                          text="Filter"
                          style={{
                            display: "flex",
                            opacity: "1",
                            letterSpacing: "0px",
                            color: "black",
                            paddingRight: "28px",
                            fontSize: "12px !important",
                          }}
                        />
                        <Input style={{ width: "100%" }} />
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <Row>
                      <Col xs={12}>
                        <AgGrid
                          rowData={data}
                          columnData={columnsDef_a}
                          headerHeight={50}
                          frameworkComponents={frameworkComponents}
                          style={{
                            width: "100%",
                            height: "600px",
                            marginTop: "20px",
                            border: "none",
                          }}
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </div>
            {/*Code of Arrow buttons*/}
            <div
              style={{
                marginTop: "250px",
                flex: " 1 1 100%",
                boxSizing: "border-box",
                maxWidth: "5%",
                alignContent: "center",
              }}
            >
              <div
                style={{
                  flexDirection: "row",
                  boxSizing: "border-box",
                }}
              >
                <Button
                  text={< ArrowForwardIcon/>}
                  style={{
                    backgroundColor: "#01396b !important",
                    color: "#fff",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    boxSizing: "border-box",
                    boxShadow: "1px 1px 5px 0px rgba(0, 0, 0, 1)",
                  }}
                />
              </div>

              <div>
                <Button
                  text={< ArrowBackIcon />}
                  style={{
                    backgroundColor: "#01396b !important",
                    color: "#fff",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    boxSizing: "border-box",
                    boxShadow: "1px 1px 5px 0px rgba(0, 0, 0, 1)",
                  }}
                />
              </div>
            </div>

            {/*Code of 2nd Float div*/}
            <div
              className="float-dev"
              style={{
                border: "1px solid grey",
                flex: "1 1 100%",
                boxSizing: "border-box",
                maxWidth: "60%",
                height: " 700px",
                marginTop: "24px",
                marginLeft: "50px",
              }}
            >
              {/* Code of filter*/}
              <div
                style={{
                  padding: "15px",
                }}
              >
                <Row>
                  <Col
                    xs={12}
                    style={{
                      display: "flex",
                      borderWidth: "0",
                      alignItems: "center",
                      boxSizing: "border-box",
                    }}
                  >
                    <Row>
                      <Col
                        xs={12}
                        style={{
                          backgroundColor: "#F8F8F8",
                        }}
                      >
                        <Label
                          text="Filter"
                          style={{
                            display: "flex",
                            opacity: "1",
                            letterSpacing: "0px",
                            color: "black",
                            paddingRight: "28px",
                            fontSize: "12px !important",
                          }}
                        />
                        <Input style={{ width: "100%" }} />
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <Row>
                      <Col xs={12}>
                        <AgGrid
                          rowData={ContentDetails2}
                          columnData={columnsDef_b}
                          headerHeight={50}
                          frameworkComponents={frameworkComponents}
                          style={{
                            width: "100%",
                            height: "600px",
                            marginTop: "20px",
                            border: "none",
                          }}
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

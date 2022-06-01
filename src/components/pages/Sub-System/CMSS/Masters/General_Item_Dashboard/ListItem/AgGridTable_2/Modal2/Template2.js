import React from "react";
import { Input, Label, Close, AgGrid, CheckBox, Button } from "arms_v2.8_webui";
import classes from "./Template2.module.css";
import { Row, Col, Container } from "react-bootstrap";
// import Aux from "../../hoc/Auxiliary/Auxiliary";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Backdrop from "../../../../../../../../ReusableComp/Backdrop";

export default function Template2(props) {
  // const DataList = [
  //   { text: satid, listname: "satid" },
  //   { text: emptyop, listname: "emptyop" },
  // ];
  const spreadSheet = () => {
    return {
      sheet: [
        {
          id: 1,
          abc: "",
          b: "",
        },
      ],
    };
  };

  const ContentDetails = spreadSheet().sheet.map((ele, i) => {
    return {
      id: ele.a,
      abc: ele.abc,
      b: ele.b,
    };
  });

  const frameworkComponents = {
    abckBox: CheckBox,
  };

  const columnsDef_a = [
    {
      headerName: "Select",
      field: "abc",
      // width: "60",
      // style: { backgroundColor: "red !important" },
      style: {
        background: "white !important",
        color: "black !important",
      },
      cellRenderer: "abckBox",
      cellRendererParams: { iconType: "tick" },
      cellStyle: {
        height: "100%",
        display: "flex ",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "12px",
        // backgroundColor: "#fff",
      },
      // style={
      //   backgroundColor:"#fff"
      // },
    },

    {
      headerName: "Items",
      field: "b",
      cellStyle: {
        height: "100%",
        display: "flex ",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "12px",
        backgroundColor: "#fff",
      },
      // width: "60",
      // cellRendererParams: { options: DataList },
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
            //   f:""
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
        //   f:ele.f
      };
    });

    const frameworkComponents = {
      abckBox: CheckBox,
    };

    const columnsDef_b = [
      {
        headerName: "Select",
        field: "bc",
        // width: "60",
        cellRenderer: "abckBox",
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
        headerName: "options",
        field: "be",
        // width: "60",
        // cellRendererParams: { options: DataList },
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
        headerName: "shortname",
        field: "c,",
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
        headerName: "order",
        fiels: "d",
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
        headerName: "optionvalue",
        field: "e",
        cellStyle: {
          height: "100%",
          display: "flex ",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "12px",
          backgroundColor: "#fff",
        },
      },
    ];

    return (
      <>
        <Container>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <Confirmmessage text="Are you sure you want to delete?" /> */}
            <Backdrop show={props.show} clicked={props.modalClosed} />
            <div
              className={classes.Modal}
              style={{
                //   transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
                //   opcaity: this.props.show ? "1" : "0",
                //   minWidth: "353px",
                // width: "1800px",
                width: "90%",
              }}
            >
              <div
                style={{
                  padding: "30px",
                  backgroundColor: "#01396b",
                  color: "white",
                  height: "30px",
                  display: "flex",
                  // padding: "15px",
                  marginTop: "19px",
                  width: "fit-content",
                  letterSpacing: 0,
                }}
              >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <h3
                    style={{
                      color: "#fff",
                      textAlign: "left",
                      letterSpacing: 0,
                      marginTop: "2px",
                      // fontSize: "20px",
                    }}
                  >
                    Add Item
                  </h3>

                  <Close
                    // onClick={this.props.modalClosed}
                    style={{
                      //   transform: this.props.show
                      //     ? "translateY(0)"
                      //     : "translateY(-100vh)",
                      //   opcaity: this.props.show ? "1" : "0",u
                      paddingLeft: "1300px",
                      alignItems: "right",
                      // marginTop: "2px",
                      justifyContent: "center",
                      fontSize: "20px",
                      cursor: "pointer",
                    }}
                  />
                </div>
              </div>
              {/*Code of folats left and right*/}
              <div
                style={{
                  height: "900px",
                  width: "80%",
                  borderRadius: "8px",
                  // padding: "20px",
                  marginTop: "2%",
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
                              // color: "grey",
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
                            <Input
                              // onChange={(event) => setFilter(event.target.value)}
                              // value={filter}
                              style={{ width: "100%" }}
                            />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    {/* </div> */}
                    {/* <div className={classes.Mav}> */}
                    <Row>
                      <Col xs={12}>
                        <Row>
                          <Col xs={12}>
                            {/* {loadDshow === false ? ( */}

                            <AgGrid
                              rowData={ContentDetails}
                              columnData={columnsDef_a}
                              headerHeight={50}
                              // rowColor={"red"}
                              frameworkComponents={frameworkComponents}
                              style={{
                                width: "100%",
                                height: "600px",
                                marginTop: "20px",
                                // marginLeft: "-20px",
                                border: "none",
                                // background: "#fff",
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
                    // marginLeft: "25px",
                    alignContent: "center",
                  }}
                >
                  <>
                    <div
                      style={{
                        // paddingTop: "200px",
                        flexDirection: "row",
                        boxSizing: "border-box",
                        // display: "flex",
                      }}
                    >
                      <Button
                        text={<ArrowBackIcon />}
                        style={{
                          backgroundColor: "#01396b !important",
                          color: "#fff",
                          borderRadius: "50%",
                          width: "40px",
                          height: "40px",
                          display: "flex",
                          // justifyContent: "center",
                          // alignItems: "center",
                          boxSizing: "border-box",
                          boxShadow: "1px 1px 5px 0px rgba(0, 0, 0, 1)",
                        }}
                      />
                    </div>

                    <div>
                      <Button
                        text={<ArrowForwardIcon />}
                        style={{
                          backgroundColor: "#01396b !important",
                          color: "#fff",
                          borderRadius: "50%",
                          width: "40px",
                          height: "40px",
                          display: "flex",
                          // justifyContent: "center",
                          // alignItems: "center",
                          boxSizing: "border-box",
                          boxShadow: "1px 1px 5px 0px rgba(0, 0, 0, 1)",
                        }}
                      />
                    </div>
                  </>
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
                  }}
                >
                  {/* Code of filter*/}
                  <div
                    style={{
                      //   borderBottom: "1px solid lightgrey",
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
                              // color: "grey",
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
                            <Input
                              // onChange={(event) => setFilter(event.target.value)}
                              // value={filter}
                              style={{ width: "100%" }}
                            />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    {/* </div> */}
                    {/* <div> */}
                    <Row>
                      <Col xs={12}>
                        <Row>
                          <Col xs={12}>
                            {/* {loadDshow === false ? ( */}
                            <AgGrid
                              rowData={ContentDetails2}
                              columnData={columnsDef_b}
                              headerHeight={50}
                              // rowColor={"#EBF1DD"}
                              frameworkComponents={frameworkComponents}
                              style={{
                                width: "100%",
                                height: "600px",
                                marginTop: "20px",
                                border: "none",
                                // marginLeft: "-20px",
                              }}
                            />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                  {/* </div> */}
                </div>

                {/*End of Arrow burttons*/}
              </div>
            </div>
          </div>
        </Container>
      </>
    );
  }
}

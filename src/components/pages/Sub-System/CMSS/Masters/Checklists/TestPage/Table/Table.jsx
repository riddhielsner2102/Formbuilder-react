import React from "react";
import classes from "./Table.module.css";
import { Button, AgGrid } from "arms_v2.8_webui";
import { useState, useEffect } from "react";
import {
  PrepareRequest,
  requests,
} from "../../../../../../../../Service/getRequests";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Container, Row } from "react-bootstrap";
import IconButton from "@mui/material/IconButton";
import AddItems from "../AddItems/AddItems";

export default function AgGridTable() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    console.log("open");
    setOpen(true);
  };
  const handleClose = () => {
    console.log("close");
    setOpen(false);
  };

  const [checklistitemdata, setchecklistitemdata] = useState([]);

  useEffect(async () => {
    const URL = `${requests.getChecklistItems}?checklistID=56&Alignment=2&AppID=13`;
    const response = await PrepareRequest(URL);
    console.log("Checklist Items Getting", response.data.lstModelChecklistItem);
    setchecklistitemdata(response.data.lstModelChecklistItem);
  }, []);

  const frameworkComponents = {
    gridButton: Button,
  };

  const contentData = [
    {
      headerName: "Title",
      field: "ChecklistItemName",
      width: 580,
      cellStyle: {
        height: "100%",
        display: "flex ",
        justifyContent: "center",
        alignItems: "center ",
        fontSize: "15px",
        color: "#000",
      },
    },

    {
      headerName: "Sr.No",
      field: "SrNo",
      cellStyle: {
        color: "#000",
        height: "100%",
        display: "flex ",
        justifyContent: "center",
        alignItems: "center ",
        fontSize: "15px",
        textAlign: "center",
        paddingTop: "6px",
        paddingBottom: "8px",
      },
    },
    {
      headerName: "Bullet",
      field: "Bullet",
      cellStyle: {
        color: "#000",
        height: "100%",
        display: "flex ",
        justifyContent: "center",
        alignItems: "center ",
        fontSize: "15px",
        paddingTop: "6px",
        paddingBottom: "8px",
      },
    },
    {
      headerName: "Order No",
      field: "OrderID",
      cellStyle: {
        color: "#000",
        height: "100%",
        display: "flex ",
        justifyContent: "center",
        alignItems: "center ",
        fontSize: "15px",
      },
    },
    {
      headerName: "Actions",
      field: "Action",
    },
  ];

  // return <AddItems open={open} onClose={handleClose} />;

  return (
    <React.Fragment>
      <Container className={classes.main}>
        <div className={classes.divDow}>
          <Row className={classes.newRow}>
            <div className={classes.header}>
              <IconButton>
                <AddCircleIcon />
                <Button
                  text="Add/Edit&nbsp;Parent&nbsp;Items"
                  onClick={handleOpen}
                />
              </IconButton>
            </div>
          </Row>
          <div className={classes.mainContent}>
            <AgGrid
              rowData={checklistitemdata}
              columnData={contentData}
              frameworkComponents={frameworkComponents}
              headerHeight={52}
              style={{
                width: "100%",
                height: "300px",
                padding: "1% 3% 1% 3%",
                borderRadius: "8px 8px 0px 0px",
                color: "#000",
              }}
            />
          </div>
        </div>
      </Container>
      {open && <AddItems show={open} onClose={handleClose} />}
    </React.Fragment>
  );
}

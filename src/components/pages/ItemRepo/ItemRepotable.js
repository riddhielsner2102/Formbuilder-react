import React,{useState} from 'react'
import { Button, AgGrid,Input,CheckBox,  } from "arms_v2.8_webui";

const ItemRepotable = () => {

    const formBuilderData = () => {
        return {
            Sheet: [
                {
                    Title:"hhh",
                    IsActive:"true",
                    action:"+"
                },
                {
                    Title:"",
                    IsActive:"true",
                    action:"+"
                },
            ],
        };
    };

    const newFormBuilder = formBuilderData().Sheet.map((ele, i) => {
        console.log(ele,i,"hiiiii");
        return {
            Title:ele.Title,
            Isactive:ele.IsActive,
            Actions:ele.action
        };
    });

    const frameworkComponents = {
        gridInput: Input,
        gridCheck:CheckBox, 
        // input:Button
    };
    const showNewModal = (e) => {
        // SetModal2({ show: true });
        // setx(e.target.value)
        console.log("AgGrid Modal is opening");
      };
const[x,setx]=useState("")
    const contentData = [
        {
            headerName: "Title",
            field: "Title",
            // cellRenderer: "gridInput",
            editable:true,
            cellStyle: {
                height: "100%",
                display: "flex ",
                justifyContent: "center",
                alignItems: "center ",
                fontSize: "15px",
                backgroundColor: "black",
            },
              cellRendererParams: {
                // text: "jjj",
                text:"title",
                backgroundColor: "black",
                onChange: function(e){
                    setx(e.target.value)
                },
                value:x
              },
        },

        {
            headerName: "Is Active",
            field: "Isactive",
            cellRenderer: "gridCheck",
            cellStyle: {
                color: "green",
                height: "100%",
                display: "flex ",
                justifyContent: "center",
                alignItems: "center ",
                fontSize: "15px",
                textAlign: "center",
                paddingTop: "6px",
                paddingBottom: "8px",
            },
            cellRendererParams:{
            iconType:"tick"
            }
        },
        {
            headerName: "Actions",
            field: "Actions",
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
    ];
    return (
        <>
            <div className="main-table">
                <AgGrid
                    rowData={newFormBuilder}
                    columnData={contentData}
                    frameworkComponents={frameworkComponents}
                    headerHeight={52}
                    style={{
                        width: "80%",
                        height: "300px",
                        padding: "1% 10% 1% 10%",
                        borderRadius: "15px",
                        color: "#000",
                        backgroundColor:"white"
                    }}
                />
            </div>
        </>
    )
}

export default ItemRepotable
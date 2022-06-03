import React, { useState, useMemo, useCallback, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
// import "./styles.css";

const AGrid = (props) => {
  const [gridApi, setGridApi] = useState();
  const [gridColumnApi, setGridColumnApi] = useState();

  const onGridReady = useCallback(
    () => (params) => {
      setGridApi(params.api);
      setGridColumnApi(params.columnApi);
      params.api.sizeColumnsToFit();
      var model = params.api.getModel();
      // console.log(model.getVirtualRow(idx));
      //gridApi.redrawRows;
    },
    []
  );

  const defaultColDef = useMemo(
    () => ({
      suppressMovable: true,
      flex: 1,
      cellStyle: (params) => ({
        display: "flex",
        alignItems: "center",
        backgroundColor: props.rowColor ? props.rowColor : "",
      }),
    }),
    []
  );

  // const colCalculation = useMemo(() => {
  var columnGroup = [];
  var columnDefs = [];
  var sampleOb = {};
  var cdataObj = props.columnData;
  cdataObj &&
    cdataObj.forEach(function (item) {
      if (item.group && !columnGroup.includes(item.group)) {
        columnGroup.push(item.group);
      }
    });

  let hasColumnHeaders = columnGroup.length > 0 ? true : false;

  function buildHeaders(colArray) {
    var child = [];
    var childOb = {};
    colArray.forEach(function (item) {
      childOb["headerName"] = item.headerName;
      childOb["field"] = item.field;
      childOb["cellStyle"] = item.cellStyle;
      childOb["editable"] = item.editable;
      childOb["unSortIcon"] = item.unSortIcon ? true : false;
      childOb["sortable"] = item.sortable ? true : false;

      if (item.filter == "date") {
        childOb["filter"] = "agDateColumnFilter";
      } else if (item.filter == "text") {
        childOb["filter"] = "agTextColumnFilter";
      } else if (item.filter == "number") {
        childOb["filter"] = "agNumberColumnFilter";
      }
      childOb["headerClass"] = "header-black";
      if (item.rowHeader == true) {
        childOb["checkboxSelection"] = true;
        childOb["headerCheckboxSelection"] = true;
      }
      childOb["maxWidth"] = item.width;
      childOb["minWidth"] = item.width;
      childOb["suppressSizeToFit"] = true;
      if (item.cellRenderer) {
        childOb["cellRenderer"] = item.cellRenderer;
        childOb["cellRendererParams"] = item.cellRendererParams;
      }
      child.push(childOb);
      childOb = {};
    });
    return child;
  }

  if (hasColumnHeaders) {
    columnGroup &&
      columnGroup.forEach((element) => {
        var colArray = cdataObj.filter((item) => {
          return item.group === element;
        });
        sampleOb["headerName"] = element;
        var child = [];
        var childOb = {};
        colArray.forEach(function (item) {
          childOb["headerName"] = item.headerName;
          childOb["field"] = item.field;
          childOb["cellStyle"] = item.cellStyle;
          childOb["editable"] = item.editable;
          childOb["unSortIcon"] = item.unSortIcon ? true : false;
          childOb["sortable"] = item.sortable ? true : false;

          if (item.filter == "date") {
            childOb["filter"] = "agDateColumnFilter";
          } else if (item.filter == "text") {
            childOb["filter"] = "agTextColumnFilter";
          } else if (item.filter == "number") {
            childOb["filter"] = "agNumberColumnFilter";
          }
          childOb["headerClass"] = "header-black";
          if (item.rowHeader == true) {
            childOb["checkboxSelection"] = true;
            childOb["headerCheckboxSelection"] = true;
          }
          childOb["maxWidth"] = item.width;
          childOb["minWidth"] = item.width;
          childOb["suppressSizeToFit"] = true;
          if (item.cellRenderer) {
            childOb["cellRenderer"] = item.cellRenderer;
            childOb["cellRendererParams"] = item.cellRendererParams;
          }
          child.push(childOb);
          childOb = {};
        });
        sampleOb["children"] = child;
        columnDefs.push(sampleOb);
        sampleOb = {};
      });
  } else {
    columnDefs = buildHeaders(cdataObj);
  }
  //   return columnDefs;
  // }, [colCalculation]);

  const rowSelection = "multiple";

  const rowClassRules = {
    "alternate-row-color": function (params) {
      return params.node.rowIndex % 2 === 0;
    },
    "custom-edit-row": function (params) {
      //var lastrow = gridApi.getDisplayedRowAtIndex(gridApi.getLastDisplayedRow());

      return (
        props.disableEditrowIndex &&
        params.node.rowIndex == props.disableEditrowIndex - 1
      );
    },
  };

  const defaultStyle = {
    maxWidth: "100vw",
    maxHeight: "100vh",
    flexDirection: "column",
  };

  return (
    <div
      className="ag-theme-alpine"
      style={props.style ? props.style : defaultStyle}
    >
      <AgGridReact
        suppressColumnVirtualisation={true}
        suppressRowVirtualisation={false}
        setAlwaysShowVerticalScroll={true}
        onRowDoubleClicked={props.onRowDoubleClicked}
        onRowClicked={props.onRowClicked}
        suppressRowClickSelection={true}
        frameworkComponents={props.frameworkComponents}
        defaultColDef={defaultColDef}
        rowData={props.rowData}
        onGridReady={onGridReady}
        rowSelection={rowSelection}
        rowClassRules={rowClassRules}
        pagination={props.pagination ? props.pagination : false}
        paginationPageSize={props.paginationPageSize}
        rowBuffer={1000}
        headerHeight={props.colHeight}
        rowHeight={24}
        columnDefs={columnDefs}
        {...props}
      />
    </div>
  );
};

export default AGrid;

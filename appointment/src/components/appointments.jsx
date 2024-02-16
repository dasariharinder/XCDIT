import React, { useState } from "react";
// import Badge from "react-bootstrap/Badge";
// import Button from "react-bootstrap/Button";
// import Stack from "react-bootstrap/Stack";
import AppTable from "./appTable";

function Appointment() {
  return (
    <>
      <div class="card tableCard">
        <div class="card-body">
          <h5 class="card-title docTitle">Visiting Doctor’s Details</h5>
          <AppTable></AppTable>
        </div>
      </div>
    </>
  );
}

export default Appointment;

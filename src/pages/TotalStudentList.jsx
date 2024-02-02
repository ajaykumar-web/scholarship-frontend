import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import axios from "axios";
import { studentRoute } from "../utils/APIRoutes";
import CustomizedDialogs from "./EditScholarship";

export default function BasicTable() {
  const [totalStudent, setTotalStudent] = useState([]);
  const getTotalStudent = async () => {
    try {
      const response = await axios.get(`${studentRoute}`);
      setTotalStudent(response.data.response);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getTotalStudent();
  }, []);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <CustomizedDialogs />
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>E-mail</TableCell>
              <TableCell>State</TableCell>
              <TableCell>Enrollement Date</TableCell>
              <TableCell>GPA</TableCell>
              <TableCell>Income</TableCell>
              <TableCell>Actitives</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(totalStudent || []).map((listValues, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{listValues.name}</TableCell>
                <TableCell>{listValues.email}</TableCell>
                <TableCell>{listValues.state}</TableCell>
                <TableCell>{listValues.enrollementDate}</TableCell>
                <TableCell>{listValues.gpa}</TableCell>
                <TableCell>{listValues.income}</TableCell>
                <TableCell>{listValues.activities}</TableCell>
                <TableCell>
                  <Box sx={{ display: "flex" }}>
                    <CustomizedDialogs
                      editScheduleId={listValues._id}
                      editModeProp="editModeProp"
                    />
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

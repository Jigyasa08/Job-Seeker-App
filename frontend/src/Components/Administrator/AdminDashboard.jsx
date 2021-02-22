import React, { useEffect, useState } from "react";
import axios from "axios";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

import { Button, Grid, Modal } from "@material-ui/core";
import { Redirect, useHistory } from "react-router-dom";
import { EditUser } from "./EditUser";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#3d3d3d",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});
const useModalStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 600,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

export const AdminDashboard = (props) => {
  const baseUrl = "http://localhost:5000/api/users";

  const classes = useStyles();
  const modalClasses = useModalStyles();
  const history = useHistory();
  const [seekers, setSeekers] = useState([]);
  const [modalStyle] = React.useState(getModalStyle);
  const handleDelete = (id) => {
    console.log(id);
    axios({
      method: "DELETE",
      url: `${baseUrl}/${id}`,
    });
    window.location.reload(false);
  };

  useEffect(() => {
    axios.get(`${baseUrl}`).then((res) => setSeekers(res.data));
  }, []);

  // console.log(seekers);

  const [open, setOpen] = useState(false);
  const [editId, setEditId] = useState("");
  const handleOpen = (id) => {
    setOpen(true);
    setEditId(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={modalClasses.paper}>
      <EditUser seekers={seekers} editId={editId} />
    </div>
  );
  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    history.push("/admin");
  };

  return (
    <div>
      <Grid container item>
        <TableContainer component={Paper}>
          <div style={{ textAlign: "right" }}>
            <Button
              variant="outlined"
              color="primary"
              style={{ margin: "5px" }}
              onClick={handleLogout}
            >
              LOGOUT
            </Button>
          </div>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>Title</StyledTableCell>
                <StyledTableCell align="right">Email</StyledTableCell>
                <StyledTableCell align="right">Phone</StyledTableCell>
                <StyledTableCell align="right"> Experience</StyledTableCell>
                <StyledTableCell align="right">Location</StyledTableCell>
                <StyledTableCell align="right">Skills</StyledTableCell>
                <StyledTableCell align="right">Edit</StyledTableCell>
                <StyledTableCell align="right">Delete</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {seekers &&
                seekers.map((row) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {row.title}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.email}</StyledTableCell>
                    <StyledTableCell align="right">{row.phone}</StyledTableCell>
                    <StyledTableCell align="right">
                      {row.experience}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.location}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.skills}
                    </StyledTableCell>

                    <StyledTableCell
                      align="right"
                      onClick={(id) => handleOpen(row._id)}
                      // onClick={handleOpen}
                    >
                      Edit
                    </StyledTableCell>
                    <StyledTableCell
                      align="right"
                      onClick={(id) => handleDelete(row._id)}
                    >
                      X
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Modal open={open} onClose={handleClose}>
        {body}
      </Modal>
    </div>
  );
};

import { MedicineContext } from "./context";
import { useContext, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { UserContext } from "../user/context";
import { useHistory } from "react-router";
import Detail from "./detailsView";
import BookMedicine from "./BookModal";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
//import Button2 from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const DeleteMedicine = ({ id, open, handleClose }) => {
  const { deleteMedicine, refreshData } = useContext(MedicineContext);
  return (
    <Modal show={open} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Medicine</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you wanna delete this medicine?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          variant="danger"
          onClick={async () => {
            await deleteMedicine(id);
            refreshData();
            handleClose();
          }}
        >
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const Medicines = () => {
  const { medicines } = useContext(MedicineContext);
  const [show, setShow] = useState(false);
  const [viewDetails, setViewDetails] = useState(false);
  const { is_admin } = useContext(UserContext);
  const handleDetailsClose = () => setViewDetails(false);
  const handleDetailsShow = () => setViewDetails(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [viewMedicine, setViewMedicine] = useState({});
  const [viewDelete, setViewDelete] = useState(false);
  const handleDeleteClose = () => setViewDelete(false);
  const handleDeleteShow = () => setViewDelete(true);

  const history = useHistory();
  return (
    <div>
      <h1>List of Medicine</h1>
      <Grid sx={{ flexGrow: 0}} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={5}>
      {medicines.map((medicine, i) => {
        if (!medicine.is_archived) {
          return (
            <Grid key={i} item>
            <Box sx={{ flexGrow: 1 }}>
                <Card sx={{ maxWidth: 400 }}>
                  <CardMedia
                    component="img"
                    alt="Medicine"
                    height="200"
                    image={medicine.img}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" fontWeight="bolder">Medicine Code:
                      {medicine.medicine_code}<br />
                    </Typography>
                    {/* <Typography variant="h7" color="text.primary" fontWeight="bold">
                      Details: {medicine.description}<br />
                      </Typography>
                    <Typography variant="h7" color="text.primary" fontWeight="bold">Designation:
                      {medicine.designation}<br />
                    </Typography> */}
                    <Typography variant="h7" color="text.primary" fontWeight="bold">Medicine's Name: 
                      {medicine.medicine_name}<br />
                    </Typography>
                    <Typography variant="h7" color="text.primary" fontWeight="bold">Medicine's Use: 
                      {medicine.use}<br />
                    </Typography>
                    {/* <Typography variant="h7" color="text.primary" fontWeight="bold">Medicine's Dosage: 
                      {medicine.dosage}
                    </Typography> */}
                  </CardContent>
                  {is_admin ? (
                    <CardActions>
                    <Button onClick={() => {
                      history.push(
                        `${window.location.pathname}/${medicine._id}`
                        );
                      }}
                      >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => {
                        setViewMedicine(medicine);
                        handleDeleteShow();
                      }}
                      >
                      Delete
                    </Button>
                  </CardActions>
                      ):(
                        <CardActions>
                    {/* <Button onClick={() => {
                      setViewMedicine(medicine); handleShow();
                      }}
                      >
                      Order Medicine
                    </Button> */}
                    <Button 
                      onClick={() => {
                        setViewMedicine(medicine);
                        handleDetailsShow();
                      }}
                      >
                      Show Details
                    </Button>
                  </CardActions>
                      )}
                </Card>
            </Box>
            </Grid>
          );
        }
      })}
      </Grid>
      </Grid>
      </Grid>

      {/* .card*/}

      {viewMedicine != new Object() && show ? (
        <BookMedicine
          id={viewMedicine._id}
          show={show}
          handleClose={handleClose}
          handleShow={handleShow}
        />
      ) : (
        ""
      )}
      {viewMedicine != new Object() && viewDetails ? (
        <Detail
          open={viewDetails}
          medicine={viewMedicine}
          handleClose={handleDetailsClose}
          handleOpen={handleDetailsShow}
        />
      ) : (
        ""
      )}
      {viewMedicine != new Object() && viewDelete ? (
        <DeleteMedicine
          open={viewDelete}
          id={viewMedicine._id}
          handleClose={handleDeleteClose}
          handleOpen={handleDeleteShow}
        />
      ) : (
        ""
      )}
    </div>
  );
};
export default Medicines;

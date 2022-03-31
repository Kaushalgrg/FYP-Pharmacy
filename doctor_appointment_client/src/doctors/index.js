import { DoctorContext } from "./context";
import { useContext, useState } from "react";
import { Table, Button, Modal } from "react-bootstrap";
import { UserContext } from "../user/context";
import { useHistory } from "react-router";
import Detail from "./detailsView";
import BookDoctor from "./BookModal";

const DeleteDoctor = ({ id, open, handleClose }) => {
  const { deleteDoctor, refreshData } = useContext(DoctorContext);
  return (
    <Modal show={open} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete doctor</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you wanna delete this doctor?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          variant="danger"
          onClick={async () => {
            await deleteDoctor(id);
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

const Doctors = () => {
  const { doctors } = useContext(DoctorContext);
  const [show, setShow] = useState(false);
  const [viewDetails, setViewDetails] = useState(false);
  const { is_admin } = useContext(UserContext);
  const handleDetailsClose = () => setViewDetails(false);
  const handleDetailsShow = () => setViewDetails(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [viewDoctor, setViewDoctor] = useState({});

  const [viewDelete, setViewDelete] = useState(false);
  const handleDeleteClose = () => setViewDelete(false);
  const handleDeleteShow = () => setViewDelete(true);

  const history = useHistory();
  return (
    <div>
      <h1>Pharmacy List</h1>
      {doctors ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Pharmacy-ID</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Phone Number</th>
              {is_admin ? (
                <>
                  <th>Edit</th>
                  <th>Delete</th>
                </>
              ) : (
                <>
                  <th>Book</th>
                  <th>Details</th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, i) => {
              if (!doctor.is_archived) {
                return (
                  <tr key={i}>
                    <td>{doctor._id}</td>
                    <td>{doctor.name}</td>
                    <td>{doctor.designation}</td>
                    <td>{doctor.phone}</td>
                    {is_admin ? (
                      <>
                        <td>
                          <Button
                            onClick={() => {
                              history.push(
                                `${window.location.pathname}/${doctor._id}`
                              );
                            }}
                          >
                            Edit
                          </Button>
                        </td>
                        <td>
                          <Button
                            variant="danger"
                            onClick={() => {
                              setViewDoctor(doctor);
                              handleDeleteShow();
                            }}
                          >
                            Delete
                          </Button>
                        </td>
                      </>
                    ) : (
                      <>
                        <td>
                          <Button
                            onClick={() => {
                              setViewDoctor(doctor);
                              handleShow();
                            }}
                          >
                            Book
                          </Button>
                        </td>
                        <td>
                          <Button
                            onClick={() => {
                              setViewDoctor(doctor);
                              handleDetailsShow();
                            }}
                          >
                            View details
                          </Button>
                        </td>
                      </>
                    )}
                  </tr>
                );
              }
            })}
          </tbody>
        </Table>
      ) : (
        <h2>Loading data...</h2>
      )}

      {viewDoctor != new Object() && show ? (
        <BookDoctor
          id={viewDoctor._id}
          show={show}
          handleClose={handleClose}
          handleShow={handleShow}
        />
      ) : (
        ""
      )}
      {viewDoctor != new Object() && viewDetails ? (
        <Detail
          open={viewDetails}
          doctor={viewDoctor}
          handleClose={handleDetailsClose}
          handleOpen={handleDetailsShow}
        />
      ) : (
        ""
      )}
      {viewDoctor != new Object() && viewDelete ? (
        <DeleteDoctor
          open={viewDelete}
          id={viewDoctor._id}
          handleClose={handleDeleteClose}
          handleOpen={handleDeleteShow}
        />
      ) : (
        ""
      )}
    </div>
  );
};
export default Doctors;

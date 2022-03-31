import { useContext, useState } from "react";
import { AppointmentContext } from "./context";
import { Link } from "react-router-dom";
import { Table, Button, Toast, ToastContainer } from "react-bootstrap";
const Appointments = () => {
  const {
    appointments,
    approveAppointment,
    deleteAppointment,
    completeAppointment,
    refreshData,
    downloadFile,
  } = useContext(AppointmentContext);

  const handleDownload=async(id)=>{
    await downloadFile(id);
  }
  const [showToast, setToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastBg, setToastBg] = useState("success");

  if (appointments.length > 0) {
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
            <th>Order-ID</th>
              <th>Patient's name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Phone </th>
              <th>Email</th>
              <th>Dowload file</th>
              <th>Ordered Medicine</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appnt, i) => {
              if (!appnt.is_archived) {
                return (
                  <tr key={i}>
                    <td>{appnt._id}</td>
                    <td>{appnt.name}</td>
                    <td>{appnt.age}</td>
                    <td>{appnt.gender}</td>
                    <td>{appnt.phone}</td>
                    <td>{appnt.email}</td>
                    <td><Button onClick={()=>{handleDownload(appnt._id)}}>Download Prescription </Button></td>
                    <td>
                      <Link to={`/doctors/${appnt.doctor_id}`}>
                        go to doctor
                      </Link>
                    </td>
                    {appnt.approved ? (
                      appnt.completed ? (
                        <>
                          <td>Completed</td>
                          <td>
                            <Button
                              onClick={async () => {
                                await deleteAppointment(appnt._id);
                                setToastMessage("Appointment deleted");
                                setToast(true);
                                refreshData();
                              }}
                            >
                              Delete
                            </Button>{" "}
                          </td>
                        </>
                      ) : (
                        <>
                          <td>Approved</td>
                          <td>
                            <Button
                              onClick={async () => {
                                await completeAppointment(appnt._id);
                                setToastMessage("Appointment completed");
                                setToast(true);
                                refreshData();
                              }}
                            >
                              Complete
                            </Button>{" "}
                          </td>
                        </>
                      )
                    ) : (
                      <>
                        <td>Not Approved</td>
                        <td>
                          <Button
                            onClick={async () => {
                              await approveAppointment(appnt._id);
                              setToastMessage("Appointment Approved");
                              setToast(true);
                              refreshData();
                            }}
                          >
                            Approve
                          </Button>{" "}
                        </td>
                      </>
                    )}
                  </tr>
                );
              }
            })}
          </tbody>
        </Table>
        <ToastContainer className="p-3" position="buttom-end">
          <Toast show={showToast} onClose={() => setToast(false)} bg={toastBg}>
            <Toast.Body>{toastMessage}</Toast.Body>
          </Toast>
        </ToastContainer>
      </div>
    );
  } else {
    return <div></div>;
  }
};
export default Appointments;

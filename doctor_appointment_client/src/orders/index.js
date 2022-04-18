import { useContext, useState } from "react";
import { OrderContext } from "./context";
import { Link } from "react-router-dom";
import { Table, Button, Toast, ToastContainer } from "react-bootstrap";
const Orders = () => {
  const {
    orders,
    approveOrder,
    deleteOrder,
    completeOrder,
    refreshData,
    downloadFile,
  } = useContext(OrderContext);

  const handleDownload = async (id) => {
    await downloadFile(id);
  }
  const [showToast, setToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastBg, setToastBg] = useState("success");

  if (orders.length > 0) {
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Order-ID</th>
              <th>Customer's name</th>
              <th>Product ID</th>
              <th>Gender</th>
              <th>Phone </th>
              <th>Email</th>
              <th>Order</th>
              <th>Ordered Medicine</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((appnt, i) => {
              if (!appnt.is_archived) {
                return (
                  <tr key={i}>
                    <td>{appnt._id}</td>
                    <td>{appnt.name}</td>
                    <td>{appnt.age}</td>
                    <td>{appnt.gender}</td>
                    <td>{appnt.phone}</td>
                    <td>{appnt.email}</td>
                    <td><Button onClick={() => { handleDownload(appnt._id) }}>Download Order </Button></td>
                    <td>
                      <Button>
                        <Link to={`/doctors/${appnt.doctor_id}`} style={{ color: 'black', textDecoration: "none", color: "inherit" }}>
                          View Pharmacy
                        </Link>
                      </Button>
                    </td>
                    {appnt.approved ? (
                      appnt.completed ? (
                        <>
                          <td>Completed</td>
                          <td>
                            <Button
                              onClick={async () => {
                                await deleteOrder(appnt._id);
                                setToastMessage("Order deleted");
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
                                await completeOrder(appnt._id);
                                setToastMessage("Order completed");
                                setToast(true);
                                refreshData();
                              }}
                            >
                              Delivered
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
                              await approveOrder(appnt._id);
                              setToastMessage("Order Approved");
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
export default Orders;

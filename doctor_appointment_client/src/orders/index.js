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
              <th>Age</th>
              <th>Gender</th>
              <th>Phone </th>
              <th>Email</th>
              <th>Legal document</th>
              <th>Ordered Product</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((orderlst, i) => {
              if (!orderlst.is_archived) {
                return (
                  <tr key={i}>
                    <td>{orderlst._id}</td>
                    <td>{orderlst.name}</td>
                    <td>{orderlst.age}</td>
                    <td>{orderlst.gender}</td>
                    <td>{orderlst.phone}</td>
                    <td>{orderlst.email}</td>
                    <td><Button onClick={() => { handleDownload(orderlst._id) }}>Download Document </Button></td>
                    <td>
                      <Button>
                        <Link to={`/products/${orderlst.product_id}`} style={{ color: 'black', textDecoration: "none", color: "inherit" }}>
                          View Product
                        </Link>
                      </Button>
                    </td>
                    {orderlst.approved ? (
                      orderlst.completed ? (
                        <>
                          <td>Completed</td>
                          <td>
                            <Button
                              onClick={async () => {
                                await deleteOrder(orderlst._id);
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
                                await completeOrder(orderlst._id);
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
                              await approveOrder(orderlst._id);
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
    return <div> No orders</div>;
  }
};
export default Orders;

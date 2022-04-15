import { Card, ListGroupItem, ListGroup, Modal, Button} from "react-bootstrap"
const Detail = ({ open, product, handleClose }) => {
    return (
        <Modal show={open} onHide={handleClose}>
            <Card >
                <Card.Body>
                    <Card.Title>Prodcut code:{product.product_code}</Card.Title>
                    <Card.Title>Prodcut Name:{product.product_name}</Card.Title>
                    <Card.Text>
                        catagories: {product.catatgories}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Use: {product.use}</ListGroupItem>
                    <ListGroupItem>Price: {product.price}  </ListGroupItem>
                    </ListGroup>
                <Card.Body>
                    <Button>
                    <Card.Link onClick={handleClose}>Close</Card.Link>
                    </Button>
                </Card.Body>
            </Card>
        </Modal>
    )
}
export default Detail;
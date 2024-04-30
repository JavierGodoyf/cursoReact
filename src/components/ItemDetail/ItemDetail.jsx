import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getProducts from "../../data/getProducts";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
function ItemDetail() {
    const { idProd } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        getProducts.then((data) => {
            const product = data.find((producto) => producto.id === parseInt(idProd))
            setProduct(product);
        }).catch((error) => console.error(error));
    }, [idProd]);

    return product ? (
        <div className="d-flex flex-wrap justify-content-center">
        <Card className="m-5 text-center"style={{ width: "50%" }}>
        <Card.Header as="h5">{product.name}</Card.Header>
        <Card.Body>
            <Row>
                <Col xs={12} md={6}>
                    <Card.Img src={product.image} alt={product.name} />
                </Col>
                <Col xs={12} md={6}>
                    <Card.Text>{product.description}</Card.Text>
                    <Link to={`/`}>
                            <Button variant="success">Volver a productos</Button>
                            </Link>
                </Col>
            </Row>
        </Card.Body>
    </Card>
    </div>
    ) : <div>no se encontro producto</div>;
}

export default ItemDetail;

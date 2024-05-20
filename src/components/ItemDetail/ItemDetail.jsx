// itemDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../main";
import { doc, getDoc } from "firebase/firestore";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2"; // Importa SweetAlert

function ItemDetail() {
    const { idProd } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1); // Estado local para la cantidad

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productRef = doc(db, "items", idProd);
                const productSnap = await getDoc(productRef);
                if (productSnap.exists()) {
                    setProduct({ id: productSnap.id, ...productSnap.data() });
                } else {
                    console.error("No se encontró el producto");
                }
            } catch (error) {
                console.error("Error fetching product: ", error);
            }
        };

        fetchProduct();
    }, [idProd]);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToCart = () => {
        // Lógica para agregar al carrito (puedes usar un estado global o contexto)
        console.log(`Añadido ${quantity} ${product.name} al carrito`);

        // Mostrar la alerta SweetAlert
        Swal.fire("Producto agregado al carrito", "¡Excelente elección!", "success");
    };

    return product ? (
        <div className="d-flex flex-wrap justify-content-center">
            <Card className="m-5 text-center" style={{ width: "50%" }}>
                <Card.Header as="h5">{product.name}</Card.Header>
                <Card.Body>
                    <Row>
                        <Col xs={12} md={6}>
                            <Card.Img src={product.image} alt={product.name} />
                        </Col>
                        <Col xs={12} md={6}>
                            <Card.Text>{product.description}</Card.Text>
                            <Card.Text>Precio:{product.price} €</Card.Text>
                            <div>
                                <Button variant="outline-secondary" onClick={handleDecrement}>-</Button>
                                <span className="mx-2">{quantity}</span>
                                <Button variant="outline-secondary" onClick={handleIncrement}>+</Button>
                            </div>
                            <div className="my-5">
                                <Button variant="success" onClick={handleAddToCart} className="mx-3">Añadir al carrito</Button>
                                <Link to={`/`} className="mx-3">
                                    <Button variant="success">Volver a productos</Button>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    ) : (
        <div>No se encontró el producto</div>
    );
}

export default ItemDetail;

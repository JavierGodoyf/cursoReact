import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getProducts from "../../data/getProducts";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ItemListContainer({ user }) {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null); // Estado para la categoría seleccionada
    const { idCategory } = useParams();

    useEffect(() => {
        // Simulamos la llamada a la API (reemplaza esto con tu lógica real)
        getProducts.then((data) => {
            if (idCategory) {
                const newProducts = data.filter(
                    (producto) => producto.category === idCategory
                );
                setProducts(newProducts);
                setSelectedCategory(idCategory); // Actualiza la categoría seleccionada
            } else {
                setProducts(data);
                setSelectedCategory(null); // No hay categoría seleccionada
            }
        }).catch((error) => console.error(error));
    }, [idCategory, selectedCategory]); // Incluye la categoría seleccionada en las dependencias

    return (
        <div>
            <h4>{user}</h4>
            <h2 className="text-center">Lista de Productos</h2>
            <div className="d-flex flex-wrap">
                {products.map((product) => (
                    <Card key={product.id} style={{ width: "18rem", margin: "1rem" }}>
                        <Card.Img variant="top" src={product.image} alt={product.name} />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>{product.description}</Card.Text>
                            <Button variant="primary">Ver detalles</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default ItemListContainer;

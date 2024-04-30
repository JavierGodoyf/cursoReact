import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getProducts from "../../data/getProducts";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
function ItemListContainer({ saludo }) {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null); // Estado para la categoría seleccionada
    const { idCategory } = useParams();

    useEffect(() => {
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
        <div className="text-center">
            <h3 className="my-3">{saludo}</h3>
            <div className="d-flex flex-wrap justify-content-center">
                {products.map((product) => (
                    <Card key={product.id} style={{ width: "18rem", margin: "1rem" }}>
                        <Card.Img variant="top" src={product.image} alt={product.name} />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Link to={`/product/${product.id}`}>
                            <Button variant="success">Ver detalles</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default ItemListContainer;

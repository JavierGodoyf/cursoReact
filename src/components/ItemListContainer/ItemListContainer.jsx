// itemlistcontainer.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../main";
import { collection, getDocs } from "firebase/firestore";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function ItemListContainer({ saludo }) {
    const [products, setProducts] = useState([]);
    const { idCategory } = useParams();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "items"));
                const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                if (idCategory) {
                    const filteredProducts = data.filter(product => product.category === idCategory);
                    setProducts(filteredProducts);
                } else {
                    setProducts(data);
                }
            } catch (error) {
                console.error("Error fetching products: ", error);
            }
        };

        fetchProducts();
    }, [idCategory]);

    return (
        <div className="text-center">
            <h3 className="my-3">{saludo}</h3>
            <div className="d-flex flex-wrap justify-content-center">
                {products.map(product => (
                    <Card key={product.id} style={{ width: "18rem", margin: "1rem" }}>
                        <Card.Img variant="top" src={product.image} alt={product.name} />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>Precio: {product.price} €</Card.Text>
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

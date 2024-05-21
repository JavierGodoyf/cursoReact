import React, { useState } from 'react';
import { useCart } from '../CartContext/CartContext'; // Importa el contexto del carrito
import Button from 'react-bootstrap/Button'; // Importa el componente Button de React Bootstrap
import Form from 'react-bootstrap/Form'; // Importa el componente Form de React Bootstrap
import Swal from 'sweetalert2'; // Importa SweetAlert2 para mostrar alertas

const Checkout = () => {
    const { cart, removeItemFromCart, clearCart } = useCart(); // Obtiene el estado del carrito y las funciones para manipularlo
    const [formData, setFormData] = useState({ // Estado local para el formulario de envío
        name: '',
        userDetails: '',
        paymentMethod: ''
    });

    // Función para calcular el total del pedido
    const calculateTotal = () => {
        let total = 0;
        cart.forEach(item => {
            total += item.price * item.quantity;
        });
        total += 2; // Se suma el costo de envío
        return total;
    };

    // Maneja el cambio en los campos del formulario
    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Maneja el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, userDetails, paymentMethod } = formData;
        if (name.trim() === '' || userDetails.trim() === '' || paymentMethod.trim() === '') {
            Swal.fire('Error', 'Por favor completa todos los campos del formulario.', 'error');
            return;
        }
        console.log(formData); // Simplemente muestra los datos del formulario en la consola
        clearCart(); // Vacía el carrito después de realizar el pedido
        Swal.fire('Pedido realizado', '', 'success'); // Muestra un mensaje de éxito
    };

    // Muestra un mensaje de confirmación para vaciar el carrito
    const handleClearCart = () => {
        Swal.fire({
            title: '¿Está seguro que desea vaciar el carrito?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, vaciar carrito',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                clearCart(); // Vacía el carrito si el usuario confirma
            }
        });
    };

    // Elimina un elemento del carrito
    const handleRemoveItem = (itemId) => {
        removeItemFromCart(itemId);
    };

    return (
        <div className="container mt-4">
            <div className="row">
                {cart.length === 0 ? ( // Si el carrito está vacío, muestra un mensaje
                    <div className="col-md-12 text-center">
                        <h2>Carrito Vacío</h2>
                        <p>No hay productos en tu carrito.</p>
                    </div>
                ) : (
                    <> {/* Fragmento React para envolver varios elementos */}
                        <div className="col-md-5">
                            <h2>Resumen del Pedido</h2>
                            <ul className="list-group">
                                {cart.map((item, index) => (
                                    <li key={index} className="list-group-item">
                                        <div className='d-flex justify-content-between'>
                                            <b>{item.name}</b>
                                            <Button variant="danger" size="sm" onClick={() => handleRemoveItem(item.id)}><b>x</b></Button>
                                        </div>
                                        <div>Cantidad: <b>{item.quantity}</b></div>
                                        <div>Precio: <b>{item.price * item.quantity} €</b></div>
                                    </li>
                                ))}
                                <li className='list-group-item'>Envío: <b>2€</b></li>
                                <li className="list-group-item">
                                    <b>Total:</b>
                                    <b> {calculateTotal()} €</b>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-7">
                            <h2>Datos de Envío</h2>
                            <Form onSubmit={handleSubmit}> {/* Formulario para ingresar datos de envío */}
                                <Form.Group controlId="formName">
                                    <Form.Label>Nombre completo</Form.Label>
                                    <Form.Control type="text" name="name" value={formData.name} onChange={handleFormChange} />
                                </Form.Group>
                                <Form.Group controlId="formUserDetails">
                                    <Form.Label>Dirección de envío</Form.Label>
                                    <Form.Control type="text" name="userDetails" value={formData.userDetails} onChange={handleFormChange} />
                                </Form.Group>
                                <Form.Group controlId="formPaymentMethod">
                                    <Form.Label>Método de Pago</Form.Label>
                                    <Form.Control as="select" name="paymentMethod" onChange={handleFormChange}>
                                        <option value="">--- Seleccionar método de pago ---</option>
                                        <option value="credit">Tarjeta de Crédito</option>
                                        <option value="debit">Tarjeta de Débito</option>
                                        <option value="paypal">PayPal</option>
                                    </Form.Control>
                                </Form.Group>
                                <div className='mt-3 text-center'>
                                    <Button variant="success" type="submit" className='me-3'>
                                        Realizar Pedido
                                    </Button>
                                    <Button variant="danger" onClick={handleClearCart}>
                                        Vaciar Carrito
                                    </Button>
                                </div>
                            </Form>

                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Checkout;

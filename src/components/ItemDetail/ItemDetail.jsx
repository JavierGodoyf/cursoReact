const ItemDetail = ({ product }) => {
    return (
        <Card>
            <Card.Header as="h5">{product.name}</Card.Header>
            <Card.Body>
                <Card.Img src={product.image} alt={product.name} />
                <Card.Text>{product.description}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}
export default ItemDetail
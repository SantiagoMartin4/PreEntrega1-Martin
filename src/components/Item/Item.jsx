import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Item.css'

const Item = ( {prod} ) => {
    return (
    <Card className='card' style={{ width: '18rem', margin: '1rem', }}>
        <Card.Img className='img' variant="top" src={prod.img} />
        <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>
            {prod.description}
        </Card.Text>
        <Card.Text>
            ${prod.price}
        </Card.Text>
        <Button variant="light">
            <Link to={`/item/${prod.id}`}>Ver Más</Link>
        </Button>
        </Card.Body>
    </Card>
    );
}

export default Item
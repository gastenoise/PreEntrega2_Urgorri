import { React, useParams } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemListContainer from './ItemListContainer';
import { Link } from 'react-router-dom'



function ItemList({items}) {

    console.log ({items})
    const results = [];

    for (const item of items) {
        results.push(
<Card style={{ width: '18rem',marginBottom:'2vh' }}>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.nombre}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary"><Link to={'/item/' + item.id} style={{color:'white'}}>${item.precio}</Link></Button>
      </Card.Body>
    </Card>
        );
      }
    

      return(
        <div id='listin' style={{display:'inline-flex',flexWrap:'wrap',justifyContent:'space-evenly'}}>
            {results}
        </div>
        
      )
}

export default ItemList
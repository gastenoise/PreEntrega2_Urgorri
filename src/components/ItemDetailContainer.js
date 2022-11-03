import React, { useEffect , useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'
import productosBase from './ItemListContainer'

function ItemDetailContainer() {

    const { itemId } = useParams();
    console.log(itemId)
    const resultsi = [];
    const [item,setItem] = useState([])

    useEffect(()=>{
        console.log("pedido item")

        let simulacionPedido = new Promise((res)=>{
            setTimeout(()=>{
                res(productosBase.filter(item => item.id == itemId))
            },2000)
        })

        simulacionPedido
        .then((respuesta)=>{
            setItem(respuesta)
        })
        .catch((error)=>{
            console.log(error)
        })
        console.log(item)
    })
    for (const i of item) {
        resultsi.push(
<Card style={{ width: '18rem',marginBottom:'2vh' }}>
      <Card.Img variant="top" src={i.img} />
      <Card.Body>
        <Card.Title>{i.nombre}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary"><Link to={'/item/' + i.id} style={{color:'white'}}>${i.precio}</Link></Button>
      </Card.Body>
    </Card>
        );
      }

      return(
        <div>
        {resultsi}
    </div>
      )
}

export default ItemDetailContainer
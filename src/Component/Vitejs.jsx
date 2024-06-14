import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
im

function Vitejs() {
    return (
        <>
            {/* <span class="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">
                Hello<br />
                World
            </span>
            <span class="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">
                Hello<br />
                World
            </span> */}
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default Vitejs
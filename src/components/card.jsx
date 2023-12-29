import React from 'react'
import { Badge, Card } from 'react-bootstrap'
import "./style.scss"

const MainCard = () => {
  return (
    <Card className='card'>
      <Card.Body>
      <Card.Img variant="top" className='img' src="./images/illustration-article.svg" alt="card-image"/>
      <h2><Badge className='badge text-dark'>Learning</Badge></h2>
      <Card.Text className='subBadge'>Published 21 Dec 2023</Card.Text>
        <Card.Title><h1>HTML &amp; CSS foundations</h1></Card.Title>
        <Card.Text className='text'>
        These languages are the backbone of every website, defining structure, content, and presentation.
        </Card.Text>
        <div className='sub-card'>
            <img src="./images/image-avatar.webp" alt="" />
            <h2>Greg Hooper</h2>
        </div>
      </Card.Body>
    </Card>
  )
}

export default MainCard

import React from 'react';
import {Container, Row, Card, CardImg, CardText,CardBody, CardTitle, CardSubtitle} from 'reactstrap';


function RenderCard({item}) {
    return(
        <Card>
          <CardImg src={item.image} alt={item.name} />
             <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}


function Home(props) {
    return(
        <Container>
            <Row className="align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promo} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} />
                </div> 

            </Row>
        </Container>
    );
}



export default Home;
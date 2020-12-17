import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Card from '../components/Card';

import image1 from '../assets/images/image1.png';
import image2 from '../assets/images/image2.png';
import image3 from '../assets/images/image3.png';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Project 1',
                    subTitle: 'Project 1 description',
                    imgSrc: image1,
                    link: 'https://project1.com',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Project 2',
                    subTitle: 'Project 2 description',
                    imgSrc: image2,
                    link: 'https://project2.com',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Project 3',
                    subTitle: 'Project 3 description',
                    imgSrc: image3,
                    link: 'https://project3.com',
                    selected: false
                }
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];
        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;
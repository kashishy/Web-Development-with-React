//adding component to our react application
import React, { Component } from 'react';
//import { Media } from 'reactstrap';
import{ Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';


class Menu extends Component {
    //constructor with parameter props
    //state can be passed to children through props
    constructor(props) {
        super(props);

        //moved to maincomponent
        //states store properties related to this component
        /*this.state = {

            selectedDish: null
            //creating a js object
            dishes: [
                {
                    id: 0,
                    name:'Uthappizza',
                    image: 'assets/images/uthappizza.png',
                    category: 'mains',
                    label:'Hot',
                    price:'4.99',
                    description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'                        },
                {
                    id: 1,
                    name:'Zucchipakoda',
                    image: 'assets/images/zucchipakoda.png',
                    category: 'appetizer',
                    label:'',
                    price:'1.99',
                    description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'                        },
                {
                    id: 2,
                    name:'Vadonut',
                    image: 'assets/images/vadonut.png',
                    category: 'appetizer',
                    label:'New',
                    price:'1.99',
                    description:'A quintessential ConFusion experience, is it a vada or is it a donut?'                        },
                {
                    id: 3,
                    name:'ElaiCheese Cake',
                    image: 'assets/images/elaicheesecake.png',
                    category: 'dessert',
                    label:'',
                    price:'2.99',
                    description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'                        }
            ],*
        }*/
    }


    //moved to main component
    //setting state of component to selected dish
    /*onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }*/

    /*//rendering dish on selecction
    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }*/

    //every component should have render method to define view
    render() {
        //describing js variable
        //dishes refered from state of component, iterate over every dish and return layout for each dish
        //const menu = this.state.dishes.map((dish) => {
        //as dishes are moved to seperate file so access thorugh props
        const menu = this.props.dishes.map((dish) => {
            return (

                <div key={dish.id} className="col-12 col-md-5 m-1">
                    {/*after MainComponent, as onclick recieves data from props now*/}
                    <Card onClick={() => this.props.onClick(dish.id)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                
                {/*before MainComponent. li class says each will act as list item}
                <Card onClick={() => this.onDishSelect(dish)}>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>*/}
                </div>


                //without using cards
                /*/key used to identify each element on screen by react
                <div key={dish.id} className="col-12 mt-5">
                {/*without using cards ,
                li class says each will act as list item*}
                <Media tag="li">
                    {/*for displaying image on screen*}
                    <Media left middle>
                    <Media object src={dish.image} alt={dish.name} />
                    </Media>
                    <Media body className="ml-5">
                        <Media heading>{dish.name}</Media>
                        <p>{dish.description}</p>
                    </Media>
                </Media>
                </div>*/
            );
        });

        return (
            <div className="container">
                <div className="row">
                {/*displaying list of items on screen, here menu is js variable*/}
                {menu}
                </div>

                {/*moved to MainComponent}
                <Dishdetail dish={this.state.selectedDish}></Dishdetail>*/}
                
                {/*<div className="row">
                    <div  className="col-12 col-md-5 m-1">
                        {this.renderDish(this.state.selectedDish)}
                    </div>
                </div>*/}
            </div>
        );
    }
}

export default Menu;
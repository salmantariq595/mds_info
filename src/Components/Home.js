import React,{Component} from 'react'

//Importing Reacstrap Components for Form
import { Modal,ModalHeader,ModalBody,Row, Label, CardImg, CardBody, Card, Col, Button, CardText, CardTitle } from 'reactstrap';
import { LocalForm,Control,Errors  } from 'react-redux-form';



function CardView({data,addData}){
    return(
        <Card>
            <CardImg top width="100%" height="300px" src={data.picture} />
            <CardBody>
                <CardTitle><h2><b><i>Title:{data.name}</i></b></h2></CardTitle>
                <CardText><i><h4>Rating:{data.rating}</h4></i></CardText>
                <CardText><i><h4>Category:{data.category}</h4></i></CardText>
                <CardText><i><h4>Summary:{data.detail}</h4></i></CardText>
            </CardBody>
        </Card>
    )
}










class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            isOpen:false,
            isModalOpen:false
        }
        //this.toggleOpen=this.toggleOpen.bind(this)
        this.toggleModal=this.toggleModal.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    toggleModal(){
        this.setState({
            isModalOpen : !this.state.isModalOpen 
        })
    }

    handleSubmit(values){
        this.toggleModal()
        alert("Category :"+ JSON.stringify(values))
        //this.props.addData(values.category, values.name, values.picture, values.rating, values.detail)
        this.props.addData(JSON.stringify(values.name, values.picture, values.rating, values.detail ))
    }


    render(){
        const required = (val) => val && val.length;
        
        const renderCardList=this.props.data.map((data) => {
            return(
                <div key={data.id} className="col-10 col-md-5 m-1">
                    <CardView data={data}
                    addData={this.props.addData}
                 />
                </div>
            )
        })

        return(
            <div className="container-fluid">
                <div className="row row-header" style={{ color:"black",justifyContent:"center"}}>
                    <Button className="bg-dark" onClick={this.toggleModal} style={{borderRadius:"50%",color:"white"  }}>
                        <span class="fa fa-plus-circle fa-5x" style={{ justifyContent:"center"}}></span>
                    </Button>
                </div>
                <div className="row justify-content-center">
                     {renderCardList}
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Add Data</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={values => this.handleSubmit(values)}>
                            <Row className="form-group" >                                 
                                <Label htmlFor="category" md={3} >Category</Label>
                                <Col md={9}>
                                    <Control.select  model=".category" className="form-control" name="category" id="category"
                                    validators={{
                                        required
                                    }} >
                                        <option>--Select--</option>
                                        <option>Darma</option>
                                        <option>Movie</option>
                                        <option>Anime</option>
                                    </Control.select>
                                    <Errors
                                        className="text-danger"
                                        model=".category"
                                        show="touched" 
                                        messages={{
                                            required: 'Select Category',
                                        }} />
                                </Col>
                                    
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="name" md={3}>Name</Label>
                                <Col md={9}>
                                    <Control.text model=".text" placeholder="Enter Name" className="form-control" name="name" id="name"
                                     validators={{
                                        required
                                    }}></Control.text>
                                     <Errors
                                        className="text-danger"
                                        model=".text"
                                        show="touched" 
                                        messages={{
                                            required: 'Select Category',
                                        }} />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="picture" md={3}>Picture</Label>
                                <Col md={9}>
                                    <Control.file model=".file" className="form-control" name="picture" id="picture"
                                     validators={{
                                        required
                                    }}></Control.file>
                                     <Errors
                                        className="text-danger"
                                        model=".file"
                                        show="touched" 
                                        messages={{
                                            required: 'Select Category',
                                        }} />
                                </Col>
                            </Row>
                            <Row className="form-group">                                 
                                <Label htmlFor="rating" md={3}>Rating</Label>
                                <Col md={9}>
                                    <Control.select model=".select" className="form-control" name="rating" id="rating"  validators={{
                                        required
                                    }}>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                    </Control.select>
                                    <Errors
                                        className="text-danger"
                                        model=".select"
                                        show="touched" 
                                        messages={{
                                            required: 'Select Category',
                                        }} />
                                </Col >    
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="detail" md={3}>Summary</Label>
                                <Col md={9}>
                                    <Control.textarea model=".textarea" placeholder="Enter Summery" className="form-control" name="detail" id="detail"
                                     validators={{
                                        required
                                    }}></Control.textarea>
                                     <Errors
                                        className="text-danger"
                                        model=".textarea"
                                        show="touched" 
                                        messages={{
                                            required: 'Select Category',
                                        }} />
                                </Col>
                            </Row>

                            <Button type="submit" className="bg-primary">Submit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}


export default Home;
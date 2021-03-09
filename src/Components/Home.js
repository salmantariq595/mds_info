import React,{Component} from 'react'

//Importing Reacstrap Components for Form
import { Modal,ModalHeader,ModalBody,Row, Label, Form, FormGroup, Input, Col, Button } from 'reactstrap';
import { LocalForm,Control,Errors  } from 'react-redux-form';


class Home extends Component {
    constructor(){
        super()
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
    }


    render(){
        const required = (val) => val && val.length;
        return(
            <div className="container-fluid">
                <div className="row row-header" style={{ color:"black",justifyContent:"center"}}>
                    <Button className="bg-dark" onClick={this.toggleModal} style={{borderRadius:"50%",color:"white"  }}>
                        <span class="fa fa-plus-circle fa-5x" style={{ justifyContent:"center"}}></span>
                    </Button>
                </div>
                <p>this is Home</p>
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
                                    <Control.text model=".text" placeholder="Enter Name" className="form-control" name="name" id="name"></Control.text>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="picture" md={3}>Picture</Label>
                                <Col md={9}>
                                    <Control.file model=".file" className="form-control" name="picture" id="picture"></Control.file>
                                </Col>
                            </Row>
                            <Row className="form-group">                                 
                                <Label htmlFor="rating" md={3}>Rating</Label>
                                <Col md={9}>
                                    <Control.select model=".select" className="form-control" name="rating" id="rating">
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
                                </Col >    
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="detail" md={3}>Summary</Label>
                                <Col md={9}>
                                    <Control.textarea model=".textarea" placeholder="Enter Summery" className="form-control" name="detail" id="detail"></Control.textarea>
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
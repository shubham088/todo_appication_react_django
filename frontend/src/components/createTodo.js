import React, { Component } from 'react';
import axios from "axios";
import { Navbar} from 'react-bootstrap';

class CreateTodoComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            title : "",
            description : "",
            category_name : "",
            done : false,
            id : 0,
        }
        this.handleChangeTitle = this.handleChangeTitle.bind(this)
        this.handleChangeDescription = this.handleChangeDescription.bind(this)
        this.handleChangeCategory = this.handleChangeCategory.bind(this)
        this.handleChangeDone = this.handleChangeDone.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChangeTitle(event){
        console.log("updated title : ", event.target.value)
        this.setState({
            title : event.target.value
        })
    }

    handleChangeDescription(event){
        this.setState({
            description : event.target.value
        })
    }

    handleChangeCategory(event){
        this.setState({
            category_name : event.target.value
        })
    }

    handleChangeDone(event){
        this.setState({
            done : event.target.checked
        })

    }

    handleSubmit(e){
        e.preventDefault()
        console.log(this.state)
        let url = "http://localhost:8000/todos/"
        axios
        .post(url, this.state)
        .then(res=>{
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })

        this.props.history.push('/')

    }

    componentDidMount(){
                
    }

    render(){
        return (
            <div>
                <Navbar bg="dark" variant="dark" fixed='top'>
                <Navbar.Brand href="/">Todo Application</Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar>

                <b><h3 style={{color : "black"}}>Create Todo</h3></b>
                <form>
                        <div class="form-group row">
                            <label for="inputEmail3" class="col-sm-2 col-form-label" style={{color : "black"}}>Title</label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputEmail3" placeholder="" value={this.state.title}
                              onChange = {(event)=>this.handleChangeTitle(event)}/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPassword3" class="col-sm-2 col-form-label" style={{color : "black"}}>Description </label>
                            <div class="col-sm-10">
                            <textarea id="description" value = {this.state.description}
                            onChange = {(event)=>this.handleChangeDescription(event)}></textarea>
                            </div>
                        </div>
                        
                        <div class="form-group row">
                            <div class="col-sm-2" style={{color : "black"}}>Done</div>
                            <div class="col-sm-10">
                            <div class="form-check"> 
                                <input class="form-check-input" type="checkbox" id="gridCheck1" onClick={(event)=>this.handleChangeDone(event)}/>
                            </div>
                            </div>
                        </div>

                        <label style = {{ color : "black"}}>Category : 
                            <input list="category-names" name="myCategory" value = {this.state.category_name}
                            onChange = {(event)=>this.handleChangeCategory(event)}/></label>
                            <datalist id="category-names">
                            <option value="General" />
                            
                            </datalist>

                        <div class="form-group row">
                            <div class="col-sm-10">
                            <input type='button' class="btn btn-info" value="Submit Button" onClick={(event)=>this.handleSubmit(event)}/>
                            </div>
                        </div>
                </form>
            </div>
            
        )
    }
}

export default CreateTodoComponent
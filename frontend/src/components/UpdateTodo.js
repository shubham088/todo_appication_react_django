
import axios from 'axios';
import React, { Component } from 'react';
import { Navbar} from 'react-bootstrap';
import {History} from 'react-router';


class UpdateTodoComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            title : "",
            description : "",
            category_name : "",
            done : "",
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
        let url = "http://localhost:8000/todos/"+this.state.id+"/"
        axios
        .put(url, this.state)
        .then(res=>{
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })

        this.props.history.push('/')

    }

    componentDidMount(){
        let id = this.props.match.params.id
        this.setState({
            id : id
        })
        let url = "http://localhost:8000/todos/"+id
        axios
        .get(url)
        .then(res => {
            console.log("result for update : ", res['data'])
            this.setState({
                title : res['data']['title'],
                description : res['data']['description'],
                done : res['data']['done'],
                category_name : res['data']['category_name'] 
            })

            console.log(this.state)
        })
        .catch(err =>{
            console.log(err)
        })
        
    }

    render(){
        console.log("id = ", this.props.match.params.id)
        return (
            <div>
                <Navbar bg="dark" variant="dark" fixed='top'>
                <Navbar.Brand href="/">Todo Application</Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar>

                <b><h3 style={{color : "black"}}>Update Todo</h3></b>
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
                                {this.state.done ? <input class="form-check-input" type="checkbox" id="gridCheck1" checked onClick={(event)=>this.handleChangeDone(event)}/> : 
                                <input class="form-check-input" type="checkbox" id="gridCheck1" onClick={(event)=>this.handleChangeDone(event)}/>}
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

export default UpdateTodoComponent
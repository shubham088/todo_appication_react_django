import React from 'react';
import axios from "axios";
import { Navbar} from 'react-bootstrap';

class HomePage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            result : []
        }

        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleRefresh = this.handleRefresh.bind(this)
    }

    handleUpdate(event, id){
        console.log(id)
        console.log('hello')
        let path = "/edit/"+id
        this.props.history.push(path)
    }

    handleDelete(event, id){
        console.log('iam in delete')
        console.log(id)
        let url = "http://localhost:8000/todos/"+id+"/"
        axios
        .delete(url)
        .then(res=>{
            console.log("result after delete..")
            console.log(res)
            this.handleRefresh()
        })
        .catch(err=>{
            console.log(err)
        })

        
        
    }

    handleRefresh(){
        console.log("refreshing..")
        axios
        .get('http://localhost:8000/todos/')
        .then(res => {
            console.log(res['data'])
            this.setState({
                result : res['data']
            })
        })
        .catch(err => {
            console.log(err)
        })
        
    }


    componentDidMount(){
        axios
        .get('http://localhost:8000/todos/')
        .then(res => {
            console.log(res['data'])
            this.setState({
                result : res['data']
            })
        })
        .catch(err => {
            console.log(err)
        })
    }


    render(){
        return (
                        <div>
                            <Navbar bg="dark" variant="dark" fixed='top'>
                            <Navbar.Brand href="/">Todo Application</Navbar.Brand>
                                <Navbar.Toggle />
                                <Navbar.Collapse className="justify-content-end">
                                    <Navbar.Text>
                                        <a href="/create_todo">Create Todo</a>
                                    </Navbar.Text>
                                </Navbar.Collapse>
                            </Navbar>
                            
                            <b><h3 style = {{ color : "black"}}> Todo's List </h3></b>
                            <div class = 'table-responsive'>
                            <table class='table table-striped'>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Title</th>
                                        <th>Description</th>
                                        <th>is_completed</th>
                                        <th>Category</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                {this.state.result.map((obj, index)=>{
                                    return (
                                        <tr key = {index}>
                                            <td>{obj.id}</td>
                                            <td>{obj.title}</td>
                                            <td>{obj.description}</td>
                                            <td>{obj.done ? "Done" : "Not Done"}</td>
                                            <td>{obj.category_name}</td>
                                            <td><input type="button" class="btn btn-success" onClick = {(event)=>{this.handleUpdate(event, obj.id)}} value="Update" /></td>
                                            <td><input type="button" class="btn btn-danger" onClick = {(event)=>{this.handleDelete(event, obj.id)}} value = 'Delete' /></td>
                                        </tr>
                                    )
                                })}
                                </tbody>
                            </table>
                            </div>                
                        </div>

        )
    }
}

export default HomePage
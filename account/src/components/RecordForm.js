import React , {Component} from 'react';
import ajax from 'jquery';
export default class RecordForm extends Component{
    constructor(props){
        super(props);
        this.state ={
            date :'',
            title :'',
            amount:''
        }
    }

    valid(){
        return this.state.date && this.state.title && this.state.amount
    }

    handleChange(event){
        let name , obj;
        name = event.target.name;
        console.log(event.target.name);
        this.setState((
            obj = {},
            obj["" + name] = event.target.value,
            obj
          ))
    }

handleSubmit(event){
    event.preventDefault();
    const date=event.target.date.value;
    const title = event.target.title.value;
    const amount = event.target.amount.value;
    const id =1;
    ajax({
        url:'http://5c749eb3e24a2e001477f34a.mockapi.io/records',
        method:'POST',
        data:{
            id,
            date,
            title,
            amount
        }
    })
    
}
    render(){
        return(
            <form className="form-inline mb-3" onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group mr-1" >
                    <input type="text" className="for-control" onChange = {this.handleChange.bind(this)} placeholder="Date" name="date" value={this.state.date}/>
                </div>
                <div className="form-group mr-1" >
                    <input type="text" className="for-control" onChange = {this.handleChange.bind(this)} placeholder="Title" name="title"  value={this.state.title}/>
                </div>
                <div className="form-group mr-1" >
                    <input type="text" className="for-control" onChange = {this.handleChange.bind(this)} placeholder="Amount" name="amount" value={this.state.amount} />
                </div>
                <button type="submit" className="btn btn-primary" disabled={!this.valid()}>create</button>
            </form>
        );
    } 
}
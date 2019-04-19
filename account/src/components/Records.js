import React, { Component } from 'react';
import '../App.css';
import Record from './Record';
import {getJSON} from 'jquery';
import RecordForm from './RecordForm';
class Records extends Component {
  constructor(){
    super();
    this.state={
      records:[],
      error:null,
      isLoaded:false,
    }
  }

  componentDidMount(){
    getJSON("https://5c749eb3e24a2e001477f34a.mockapi.io/records").then(
      response => this.setState({
        records:response,
        isLoaded:true,
      }),
      error => this.setState({
        isLoaded:true,
        error
      })
    )
  }

  render() {
    const { error ,isLoaded,records} = this.state;
    

    if(error){
      return <div>Error:{error.responseText}</div>;
    } else if(!isLoaded){
      return <div>Loading...</div>;
    }else{

    return (
      <div>
        <h2>Records</h2>
        <RecordForm />
         <table className='table table-bordered'>
            <thead>
              <tr>
                <th>Date</th>
                <th>Title</th>
                <th>Amount</th>
              </tr>
            </thead>

            <tbody>
              {records.map((record) => <Record key={record.id} {...record} />)}
                
            </tbody>

         </table>
      </div>
    );
    }
  }
}

export default Records;

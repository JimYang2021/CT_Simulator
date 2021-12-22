import React from 'react';
import ShowList from './ShowList';
import {} from 'react-bootstrap';

class Input extends React.Component{
    render () {
      const style = {
        fontSize : '22px',
        padding: '15px',
        display: 'inline-block',
        color: 'darkblue'
      }
  
      return (
      <div style={style}>
        <label for={this.props.name} style={{padding:'0px 12px'}}>
            {this.props.name}
        </label>
        <ShowList options={this.props.options} id={this.props.name}
        alertParent = {this.props.alertParent} name={this.props.name}/>
      </div>
      );
    }
  }

  export default Input;
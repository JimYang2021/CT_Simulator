import React from 'react';

class ShowList extends React.Component{

    state = {value:this.props.options[0]};
  
    handleChange = (event) => {
      this.props.alertParent(this.props.name,event.target.selectedIndex+1)
    };
  
    render(){
        let listItems = this.props.options.map(optionValue => {
          return  <option value={optionValue} key={optionValue}>{optionValue}</option>;
        });
        
        return (
            <select name={this.state.value} onChange={this.handleChange}>
              {listItems}
            </select>
        );
      }
  }

  export default ShowList;
var React = require('react');

var AccountSelect = React.createClass({

  createOption:function(type){
      return <option id={type} value={type}>{type}</option>
  },

  handleChange:function(e){
    var newType = e.target.value;
    this.props.changeAccountType(newType);
  },

  render:function(){
    

    return(
      <div>
        <h3>Select type of Account</h3>
        <select onChange={this.handleChange}>
          {this.props.types.map(this.createOption)}
        </select>
      </div>
      )
  }

})

module.exports = AccountSelect;
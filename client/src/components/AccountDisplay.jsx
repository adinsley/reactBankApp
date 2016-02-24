var React = require('react');

var AccountDisplay = React.createClass({

  getInitialState:function(){
    return{ details:"", addCash:null, debitCash:null };
  },

  buttonClick:function(e){
    var removed = e.target.value
    this.props.deleteAccount(removed);
  },

  handleForm:function(e){
    e.preventDefault();
    var detail = this.state.details;
    this.props.updateDetails(this.props.account.owner, detail);
  },

  handleDetailChange:function(e){
    var update = e.target.value;
    this.setState({details:update})
  },

  submitDebitCash:function(e){
    e.preventDefault();
    var newCash = parseInt(this.state.debitCash);
    console.log(newCash)
    this.props.debitAccount(this.props.account.owner, newCash)
  },

  handleDebitCash: function(e){
    var debittedCash = e.target.value;
    this.setState({debitCash:debittedCash});
  },

  submitAddCash:function(e){
    e.preventDefault();
    var newCash = parseInt(this.state.addCash);
    console.log(newCash)
    this.props.creditAccount(this.props.account.owner, newCash)
   },

  handleAddCash:function(e){
    var addedCash = e.target.value;
    this.setState({addCash:addedCash})
  },

  render:function(){
  if(this.props.account){
    return(
      <div>
        <h1>AccountDisplay</h1>
        <h3>Name: {this.props.account.owner} </h3>
        <h3>Type: {this.props.account.type} </h3>
        <h2>Cash: £{this.props.account.amount} </h2>
        <p>{this.props.account.details}</p>

        <form onSubmit={this.submitAddCash}>
          <input type='text' placeholder='Add Cash' value={this.state.addCash} onChange={this.handleAddCash}></input>
          <input type='submit'></input>
        </form>


        <form onSubmit={this.submitDebitCash}>
          <input type='text' placeholder='Debit Cash' value={this.state.debitCash} onChange={this.handleDebitCash}></input>
          <input type='submit'></input>
        </form>

        <form onSubmit={this.handleForm}>
          <input type='text' placeholder='Add Details' value={this.state.details} onChange={this.handleDetailChange}></input>
          <input type='submit'></input>
        </form>
        <button value={this.props.account.owner} onClick={this.buttonClick}>Remove Account</button>
      </div>
      )
    }else{
      return(
          <div>
           <h3> Select  Account Above </h3>
          </div>
      )
    }
  }
})

module.exports = AccountDisplay;
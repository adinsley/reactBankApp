var React = require('react');
var Bank = require('../bank/bank.js');
var AccountDisplay = require('./AccountDisplay');

var AccountsList = React.createClass({

  getInitialState: function(){
    return{ selectedHolder: null };
  },

  createRow:function(account){
    return (<tr>
              <td>{account.owner}</td>
              <td><button onClick={this.handleClick} id={account.owner} value={account.owner}>See Info</button></td>
            </tr>  
            )
  },

  findAccount:function(){
    for(var account of this.props.accounts){
        if(account.owner == this.state.selectedHolder){
            return account
         }
    }
  },

  handleClick:function(e){
    this.setState({selectedHolder:e.target.value})
  },

  render:function(){
    var filteredBank = new Bank()
    for(var account of this.props.accounts){
      filteredBank.addAccount(account);
    }
    return(
      <div>
      <h1>{this.props.type} :   £{filteredBank.totalCash()} </h1>
        <table>
          <thead>
            <tr>
              <th>Account Holder</th>
              <th>See Account</th>
             </tr> 
          </thead>
          <tbody>
            {this.props.accounts.map(this.createRow)}
          </tbody>
        </table>
        <AccountDisplay account={this.findAccount()} deleteAccount={this.props.deleteAccount} updateDetails={this.props.updateDetails} creditAccount={this.props.creditAccount} debitAccount={this.props.debitAccount} ></AccountDisplay>
      </div>
      )
  }
})







module.exports = AccountsList;
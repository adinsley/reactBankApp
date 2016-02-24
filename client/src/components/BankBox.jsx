var React = require('react');
var sampleAccounts = require('../sample.json');
var Bank = require('../bank/bank.js');
var Account = require('../bank/account.js')

var AccountSelect = require('./AccountSelect'); 
var AccountsList = require('./AccountsList');

var bank = new Bank;
for(var account of sampleAccounts){
  var newAccount = new Account(account.owner, account.amount, account.type)
  bank.addAccount(newAccount);
}

var BankBox = React.createClass({
  getInitialState: function(){
    return{ accounts:sampleAccounts, type:"All" };
  },

  changeAccountType:function(newtype){
    this.setState({type:newtype})
  },

  getAccountType:function(){
    return this.state.accounts.reduce(function(typeArray, account){
       if(!typeArray.includes(account.type)){
         typeArray.push(account.type);
       }
       return typeArray;
    }, ["All"])      
  },

  filterAccounts:function(){
    if(this.state.type == "All"){
      return this.state.accounts
    }else{
      return bank.filteredAccounts(this.state.type)

    }
  },

  buttonClick:function(){
    bank.payInterest();
    this.setState({accounts: bank.accounts})
  },

  deleteAccount:function(e){
    this.setState({accounts:bank.deleteAccount(e)})
  },

  updateDetails:function(holderName, details){
    this.setState({accounts:bank.updateDetails(holderName, details)})
  },

  creditAccount:function(holderName, deposit){
    this.setState({accounts:bank.deposit(holderName, deposit)})
  },

  debitAccount:function(holderName, withdrawal){
    this.setState({accounts: bank.withdrawal(holderName, withdrawal)})
  },
  
  render:function(){
    return(
      <div>
        <h1 id="mainTitle">React BankBox</h1>
        <AccountSelect types={ this.getAccountType() } changeAccountType={this.changeAccountType}></AccountSelect>
        <AccountsList type={this.state.type} accounts={this.filterAccounts()} deleteAccount={this.deleteAccount} updateDetails={this.updateDetails} creditAccount={this.creditAccount} debitAccount={this.debitAccount}></AccountsList>
        <button onClick={this.buttonClick}>Pay Interest</button>
      </div>
      )
  }

})






module.exports = BankBox;
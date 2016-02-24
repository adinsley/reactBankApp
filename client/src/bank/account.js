var Account = function(owner, amount, type){
  this.owner = owner;
  this.amount = amount;
  this.type = type;
  this.transactions = [];
  this.details = "OK";
};

Account.prototype = {
  addCash:function(deposit){
    this.amount +=deposit;
    var newTransaction = {type:"Credit", amount:deposit, newTotal:this.amount};
    this.transactions.push(newTransaction)
  },

  takeCash:function(withdrawal){
    this.amount -= withdrawal;
    var newTransaction = {type:"Debit", amount:withdrawal, newTotal:this.amount};
    this.transactions.push(newTransaction)
  }

}


module.exports = Account;

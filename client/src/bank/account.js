var Account = function(params){
  this.owner = params.owner;
  this.amount = params.amount;
  this.type = params.type;
  this.details = "";
};

Account.prototype = {
  addCash:function(deposit){
    this.amount +=deposit;
  },
  takeCash:function(withdrawal){
    this.amount -= withdrawal;
  }

}


module.exports = Account;

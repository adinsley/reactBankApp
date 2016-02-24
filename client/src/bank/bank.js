

var Bank = function(){
  this.accounts = [];
}

Bank.prototype = {
  addAccount: function(account){
    this.accounts.push(account);
  },
  findAccountByOwnerName:function(ownerName){
    var foundAccount = null;
    for (var account of this.accounts) {
      if(account.owner === ownerName){
        foundAccount = account;
      }
    }
    return foundAccount;
  },
  filteredAccounts: function(type){
    if(!type) return this.accounts
    var filteredAccounts = [];
    for (var account of this.accounts) {
      if(type === account.type)
        filteredAccounts.push(account);
    }
    return filteredAccounts;
  },

  totalCash:function(type){
    var total = 0;
    for (var account of this.filteredAccounts(type)) {
      total += account.amount;
    }
    return total;
  },
  accountAverage:function(){
    return this.totalCash()/this.accounts.length;
  },

  payInterest:function(){
    for(var account of this.accounts){
      account.amount += (account.amount*0.1)
    }
  },

  deleteAccount:function(holderName){
    console.log("holderName in BankModel=", holderName)
   var newArray = this.accounts.filter(function(account){
      if(account.owner !== holderName){
        return account;
      }
    })
    this.accounts = newArray;
    return this.accounts 
  },

  updateDetails:function(holderName, details){
    for(var account of this.accounts){
      if(account.owner == holderName){
        account.details = details;
      }
    }
    return this.accounts
  },

  deposit:function(holderName, cashAmount){

    for(var account of this.accounts){
      if(account.owner == holderName){
        account.addCash(cashAmount);
      }
    }
    return this.accounts
  },

  withdrawal:function(holderName, cashAmount){
    for(var account of this.accounts){
      if(account.owner == holderName){
        account.takeCash(cashAmount);
      }
    }
    return this.accounts
  }

}


module.exports = Bank;

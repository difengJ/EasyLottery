var DragonToken = artifacts.require("/Users/chejianer/Desktop/difeng/Solidity/DragonToken/contracts/DragonToken.sol");

contract('DragonToken', function(accounts) {
  it("should mint 100000000 DragonToken in the creator account", function() {
    return DragonToken.deployed().then(function(instance) {
      return instance.balanceOf.call(accounts[0]);
    }).then(function(balance) {
      assert.equal(balance, 100000000, "100000000 wasn't in the first account");
    });
  });

  // it("should call a function that depends on a linked library", function() {
  //   var meta;
  //   var DragonTokenBalance;
  //   var DragonTokenEthBalance;

  //   return DragonToken.deployed().then(function(instance) {
  //     meta = instance;
  //     return meta.balanceOf.call(accounts[0]);
  //   }).then(function(outCoinBalance) {
  //     DragonTokenBalance = outCoinBalance.toNumber();
  //     return meta.balanceOfInEth.call(accounts[0]);
  //   }).then(function(outCoinBalanceEth) {
  //     DragonTokenEthBalance = outCoinBalanceEth.toNumber();
  //   }).then(function() {
  //     assert.equal(DragonTokenEthBalance, 1000 * DragonTokenBalance, "Library function returned unexpected function, linkage may be broken");
  //   });
  // });
  
  it("should send coin correctly", function() {
    var meta;

    // Get initial balances of first and second account.
    var account_one = accounts[0];
    var account_two = accounts[1];

    var account_one_starting_balance;
    var account_two_starting_balance;
    var account_one_ending_balance;
    var account_two_ending_balance;

    var amount = 1000;

    return DragonToken.deployed().then(function(instance) {
      meta = instance;
      return meta.balanceOf.call(account_one);
    }).then(function(balance) {
      account_one_starting_balance = balance.toNumber();
      return meta.balanceOf.call(account_two);
    }).then(function(balance) {
      account_two_starting_balance = balance.toNumber();
      return meta.transfer(account_two, amount, {from: account_one});
    }).then(function() {
      return meta.balanceOf.call(account_one);
    }).then(function(balance) {
      account_one_ending_balance = balance.toNumber();
      return meta.balanceOf.call(account_two);
    }).then(function(balance) {
      account_two_ending_balance = balance.toNumber();

      assert.equal(account_one_ending_balance, account_one_starting_balance - amount, "Amount wasn't correctly taken from the sender");
      assert.equal(account_two_ending_balance, account_two_starting_balance + amount, "Amount wasn't correctly sent to the receiver");
    });
  });
});


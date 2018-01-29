pragma solidity ^0.4.8;

contract joinGame{
	mapping (address => mapping(string => uint)) buyLottery ;
	mapping (string => address) results ;
	mapping (address => uint) award;
	uint poolBalance;
	modifier onlyOwer 

	//显示自己递交的猜测
	function getGuessValue(address _self) returns(){
	    return (buyLottery[_self]);
	}
	//显示某个猜测组合的用户
	function getParticipants(string _value) returns(address[]){
	}
	//转移
	function transfer(address _to,uint _value) returns (bool){

	}

	//加入竞猜游戏，功能1、可以递交自己竞猜价格；功能2、可以追加的竞猜价格
	function join(string _guess,uint _value) returns(bool){
	    buyLottery[msg.sender][_guess] = _value;
	    results[_guess] = msg.sender;
	    poolBalance += _value;
	    return (true);
	}
	//获取奖池balance
	function getBalanceOfPool() returns (uint){

	} 
	//开奖
	function openlottery(string _value) returns (address){
		winners = getParticipants(_value);
		bid = 0
		// 90%用于奖金分配，5%留给自己，5%捐赠
		BalanceOfPool = getBalanceOfPool()*0.9
		for(i=0;i<=winners.lenght,i++){
			bid += buyLottery[winners[i]][_value]
		}
		for(i=0;i<=winners.lenght,i++){
			transfer(award[winners[i]],buyLottery[winners[i]][_value]/bid*BalanceOfPool)
		}
	}
}




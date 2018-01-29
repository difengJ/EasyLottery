pragma solidity ^0.4.18;
import "github.com/Arachnid/solidity-stringutils/strings.sol";

contract lottery{ 
    using strings for *;
    event blockLogger(address,uint,uint,bytes32);
    event hashLogger(bytes32);
    //获得block的hash
    function blockhash(uint blockNumber) returns (bytes32){
        return block.blockhash(blockNumber);
    }
    //用miner地址，块号码，时间戳，块hash生成hash
    function makeHash(address coinbase,uint number,uint timestamp,bytes32 blockhashs) returns(bytes32){
        return keccak256(coinbase,number,timestamp,blockhashs);
    }
    //截取部分hash做为开奖数字
    function testBlock(){
        address coinbase = block.coinbase;
        uint number = block.number;
        uint timestamp = block.timestamp;
        bytes32 blockhashs = blockhash(number);
        bytes32 hash = makeHash(coinbase,number,timestamp,blockhashs);
        hashLogger(hash);
    }
    
}

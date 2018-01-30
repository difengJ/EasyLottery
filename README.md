# EasyLottery

介绍  

最简单最呆萌的赚钱游戏。

游戏规则：猜测1小时之后，诞生的宝贝龙是什么颜色的。
龙分成：头部、身体、翅膀三部分，每一部分都可以有36钟颜色填充。36分别对应（0-9&a-z)

每一小时开奖一次。

每小时的0-15分钟，大家递交自己的猜测结果，就是填充好颜色的龙，以及自己下注出现这个颜色龙的eth数量。  

15-30分钟，会产生头的颜色；  

30-45分钟，会产生身体的颜色；  

45-60分钟，会产生翅膀的颜色；  

玩家还可以在中途上车，追加自己的下注。  

玩家可以多次递交不同的猜测结果，也可以对自己递交的结果进行追加。  

奖励分配规则： 

情况|奖励
---|---
中1种颜色|1:1
中2种颜色|1:5
中3种颜色|1:25
中4种颜色|1:125

***
To Do List  
~~1、卡通形象的确定，是否用龙，采用颜色填充是否有趣；决定好卡通形象，需要设计一个形象。效果如dragon.jpg~~  

目前暂定为卡通龙形象，之后可以改变或者每个小时更新动物形象，分配比例或者难度不一样。
![image](https://i.pinimg.com/236x/f2/fb/d8/f2fbd8e607a19ecc3db708c779370a94--little-dragon-baby-dragon.jpg)

2、原来没有设计中途上车的游戏机制，在没有中途参加的情况下，只需将奖池按权重分配即可，但是加入中途上车，需要有更完善的奖励机制  

~~3、中奖之后，90%用于奖励分配，9%用于团度发展，1%捐赠，是否合理~~  

如何分配需要完善

4、前端需要有个页面，显示36种颜色，来给用户填色;如果可以的话，可以做个动态，比如翅膀挥一挥，身体动一动

5、contract  

6、发布一种Token  
string name = 'Dragon Design Token'
string symbol = 'DDT'  
token代码更新ERC20。 目前暂定发行量为1million，test unix 完成了转账测试。


***
#激励措施  

1、如果随机的结果是顺子，四个相同，龙宝宝肚子会出中文字符，中奖的玩家可以购买带中文字符龙宝宝。 如果没有玩家中奖，带字符龙宝宝会流到市面上，通过竞拍的方式获得；

2、带中文字符的龙，比如（’恭‘，’福‘，’新‘，’快），然后组成特殊字符的龙可以获得巨额bouns，比如（‘新春快乐’，‘恭喜发财’）,就像收集福字；  

3、出现1222和0710 airdrop 10个账户1000个token，吸引新玩家加入;可以弄一个air drop whitelist


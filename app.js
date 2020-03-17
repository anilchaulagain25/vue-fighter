const vm=new Vue({
    el:'#root',
    data:{
        playerStrength : 100,
        enemyStrength :100,
        mode:1,// 1: going, 2:reset,
        healCount:3,
        largeAttackCount:2,
        logs:[],// {message,isGood}
    },
    methods:{
        attack:function(){
            const randomNumber = this.getRandomNumber(10,20,2);
            this.playerStrength +=randomNumber;
            this.enemyStrength -=randomNumber;
            if (randomNumber>0) {
                this.logs.push({ message:`power added ${randomNumber} newton`,isGood : true});
            }else{
                this.logs.push({ message:`power decreased ${randomNumber} newton`,isGood : false});
            }
            
        },
        largeAttach:function () {
            const randomNumber = this.getRandomNumber(20,40,2);
            this.largeAttackCount-=1;
            this.playerStrength +=randomNumber;
            this.enemyStrength -=randomNumber;
            if (randomNumber>0) {
                this.logs.push({ message:`power added ${randomNumber} newton`,isGood : true});
            }else{
                this.logs.push({ message:`power decreased ${randomNumber} newton`,isGood : false});
            }
        },
        heal:function () {
            this.healCount-=1;
            this.playerStrength+=this.getRandomNumber(10,20,0);
            this.logs.push({ message:`power added ${randomNumber} newton`,isGood : true});
            
        },
        startAgain:function (showMsg) {
            if (showMsg===false || (showMsg===true && confirm('are you sure?'))) {
                this.mode=2;
                this.playerStrength=100;
                this.enemyStrength=100;
                this.healCount=3;
                this.largeAttackCount=2;
                this.logs=[];
            }
        },
        getRandomNumber:function(min,max,sign){ //sign 0:positive, 1:negative, 2: both
            const constNumber =  Math.floor((Math.random() * max) + min);
            switch (sign) {
                case 0:
                return constNumber;
                break;
                case 1:
                return constNumber * -1;
                break;
                case 2:
                return constNumber * ((Math.random() >= 0.5)?1:-1);
                break;
                
                default:
                return 0;
                break;
            }
        },
    },
    watch:{
        playerStrength:function(val){
            if (val<0) {
                this.playerStrength=0;
            }else if(val>100){
                this.playerStrength=100;
                
            }
            if (this.playerStrength === 0) {
                alert('you losed .... :(');
                this.startAgain(false);
                
            }
        },
        enemyStrength:function(val){
            if (val<0) {
                this.enemyStrength=0;
            }else if(val>100){
                this.enemyStrength=100;
                
            }
            if (this.enemyStrength === 0) {
                alert('you won .... :)');
                this.startAgain(false);
            }
        }
        
    }
});
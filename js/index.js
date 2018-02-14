var app = new Vue({
  el: '#app',
  data: {
     userPokemonSrc: ["https://media1.tenor.com/images/8fbda6a13aee444e0397f07541d1f98e/tenor.gif","https://media.giphy.com/media/DlK2z5qILD0fC/giphy.gif","https://media1.tenor.com/images/65bc3ade1032d7a5a60349109c3a9823/tenor.gif?itemid=4981760","https://m.popkey.co/b8b56f/OXo8L_s-200x150.gif","https://thumbs.gfycat.com/GrandioseEvenAustraliansilkyterrier-max-1mb.gif"]
    ,
     opponentPokemonSrc: ["http://i.imgur.com/3edncyi.gif","http://i0.kym-cdn.com/photos/images/newsfeed/001/319/078/964.gif","https://i.warosu.org/data/biz/img/0033/93/1504888648684.gif","https://www.wykop.pl/cdn/c3201142/comment_1HGoMmreTs5EcnlnIdsvE2GdV017zJkx.gif","http://i.4cdn.org/biz/1517776211297.gif?__cf_waf_tk__=117933002ICfD8FBHchs8vQ7w4rTATBGcv7Q"],
     userPokemon: "Doge",
     opponentPokemon: "Pink Wojak",
     userAlive: true,
     opponentAlive: true,
     attackType: 0,
     opponentAttackType: 0,
     opponentFill: 100,
     userFill: 100,
     userHP: 100,
     startUserHP: 100,
     opponentHP: 100,
     battleText: "What will Doge do?",
     battleOptions: ["Fight", "Memes", "Item", "Run"],
     userAttackDamage: [15,40,50,25],
     opponentAttacks: ["FUD", "AHHHHHHHHHHH", "Capitulation", "Death"],
     opponentAttackDamage: [15,40,50,25],
     fightOptions: ["Wow", "Such Spin", "Much Bite", "Amaze"],
     endOptions: ["Yes", "No"],
     fightOn: false,
     optionsOn: true,
     endOn: false,
  userHpBar: {
    width: "100%"
  },
  opponentHpBar: {
    width: "100%"
  }
 },
  methods:{
    processOption: function(option){
      switch(option){
        case 1:
          //handle fight
          this.optionsOn = false
          this.fightOn = true
        break;
        case 2:
          //handle pokemon
          setTimeout(() => {
          this.battleText = "What will " + this.userPokemon + " do?"
      }, 2000);
          
          this.battleText = "You're our only hope " + this.userPokemon + "!"
          
        break;
        case 3:
          //handle item
          setTimeout(() => {
          this.battleText = "What will " + this.userPokemon + " do?"
      }, 2000);
          this.battleText = "No items in bag."
        break;
        case 4:
          //handle run
          setTimeout(() => {
          this.battleText = "What will " + this.userPokemon + " do?"
      }, 2000);
          this.battleText = "Can't escape."
        break;
      }
    },
    processAttack: function(attack){
      this.attackType = attack;
      switch(attack){
        case 1:
          //handle scratch
          this.opponentHP -= this.userAttackDamage[attack-1]
          //edit if HP !== 0
          this.opponentFill -= (this.userAttackDamage[attack-1])
          if(this.opponentFill <= 0){
            this.opponentHpBar.width = "0%"
          } else{
            this.opponentHpBar.width = this.opponentFill + "%"
          }   
          if(this.checkOpponentHp()){
            this.battleText = this.opponentPokemon + " fainted! Play again?"
            this.processFaint(1)
          } else if(this.checkOpponentHp() === false) {
            
              setTimeout(() => {
              this.processOpponentAttack()
              }, 2000);
          
            this.battleText = this.userPokemon + " used " + this.fightOptions[attack-1] + "!"
            //call opponent attack function
          setTimeout(() => { 
            if(this.userAlive){
              setTimeout(() => {
                this.battleText = "What will " + this.userPokemon + " do?"
              }, 100);
            }
            this.opponentAttackType = 0
           }, 5000);
          }
        break;
        case 2:
          //handle fly
           this.opponentHP -= this.userAttackDamage[attack-1]
           //edit if HP !== 0
          this.opponentFill -= (this.userAttackDamage[attack-1])
          if(this.opponentFill <= 0){
            this.opponentHpBar.width = "0%"
          } else{
            this.opponentHpBar.width = this.opponentFill + "%"
          }
            if(this.checkOpponentHp()){
            this.battleText = this.opponentPokemon + " fainted! Play again?"
            this.processFaint(1)
          } else if(this.checkOpponentHp() === false) {
            
              setTimeout(() => {
              this.processOpponentAttack()
              }, 2000);
          
            this.battleText = this.userPokemon + " used " + this.fightOptions[attack-1] + "!"
            //call opponent attack function
          setTimeout(() => { 
            if(this.userAlive){
              setTimeout(() => {this.battleText = "What will " + this.userPokemon + " do?"
              }, 100);
            }
            this.opponentAttackType = 0
           }, 5000);
          }
        break;
        case 3:
          //handle flamethrower
           this.opponentHP -= this.userAttackDamage[attack-1]
           //edit if HP !== 0
          this.opponentFill -= (this.userAttackDamage[attack-1])
          if(this.opponentFill <= 0){
            this.opponentHpBar.width = "0%"
          } else{
            this.opponentHpBar.width = this.opponentFill + "%"
          }
            if(this.checkOpponentHp()){
            this.battleText = this.opponentPokemon + " fainted! Play again?"
            this.processFaint(1)
          } else if(this.checkOpponentHp() === false) {
            
              setTimeout(() => {
              this.processOpponentAttack()
              }, 2000);
          
            this.battleText = this.userPokemon + " used " + this.fightOptions[attack-1] + "!"
            //call opponent attack function
          setTimeout(() => { 
            if(this.userAlive){
              setTimeout(() => {this.battleText = "What will " + this.userPokemon + " do?"
              }, 100);
            }
            this.opponentAttackType = 0
           }, 5000);
          }
        break;
        case 4:
          //handle ember
           this.opponentHP -= this.userAttackDamage[attack-1]
           //edit if HP !== 0
          this.opponentFill -= (this.userAttackDamage[attack-1])
          if(this.opponentFill <= 0){
            this.opponentHpBar.width = "0%"
          } else{
            this.opponentHpBar.width = this.opponentFill + "%"
          }
          if(this.checkOpponentHp()){
            this.battleText = this.opponentPokemon + " fainted! Play again?"
            this.processFaint(1)
          } else if(this.checkOpponentHp() === false) {
            
              setTimeout(() => {
              this.processOpponentAttack()
              }, 2000);
          
            this.battleText = this.userPokemon + " used " + this.fightOptions[attack-1] + "!"
            //call opponent attack function
          setTimeout(() => { 
            if(this.userAlive){
              setTimeout(() => {
                this.battleText = "What will " + this.userPokemon + " do?"
              }, 100);
            }
            this.opponentAttackType = 0
           }, 5000);
          }
        break;
      }
    },
    checkOpponentHp: function(){
      if(this.opponentHP <= 0){
        //fainted
        return true
        
      } else{
        //battle continues
        return false
      }
    },
    processFaint: function(pokemon){
      this.fightOn = false
      this.endOn = true;
      if(pokemon === 1){
        this.opponentAlive = false
      } else {
        this.userHP = 0
        this.userAlive = false
      }
    },
    processOpponentAttack: function(){
      //generate random number
      var random = Math.floor((Math.random() * 4) + 1)
      this.opponentAttackType = random;
      //do damage to user
      this.userHP -=  this.opponentAttackDamage[random-1]
      this.userFill -= (this.opponentAttackDamage[random-1])
      if(this.userFill <= 0){
        this.userHpBar.width = "0%"
      } else{
        this.userHpBar.width = this.userFill + "%"
      } 
       if(this.checkUserHp()){
         //add battle text
         this.battleText = this.userPokemon + " fainted! Play again?"
         this.processFaint(2)
       } else if(this.checkOpponentHp() === false) {  
         //continue battle
         this.battleText = this.opponentPokemon + " used " + this.opponentAttacks[random-1]  + "!"
         this.fightOn = false
         this.optionsOn = true
       }
    },
    checkUserHp: function(){
       if(this.userHP <= 0){
        //fainted
        return true
        
      } else{
        //battle continues
        this.attackType = 0
        return false
      }
    },
    resetBattle: function(){
      //reset data to start new game
      this.endOn = false;
      this.fightOn = false;
      this.optionsOn = true;
      this.battleText = "What will Doge do?"
      this.userAlive = true
      this.opponentAlive = true
      this.attackType = 0
      this.opponentAttackType = 0
      this.userHP = 100
      this.opponentHP = 100
      this.userFill = 100
      this.opponentFill = 100
      this.userHpBar.width = "100%"
      this.opponentHpBar.width = "100%"
    }
  }
  
})

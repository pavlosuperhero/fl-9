/* Your code goes here */

const addLogs = (operation, money, time) => ({
    operationType: operation,
    credits: money,
    operationTime: time
  });
  
const tax = 1.005, round = 2;

function userCard(number){
    let key = number, 
       balance = 100, 
       tranactionLimit = 100, 
       historyLogs = [];

     return {
            getCardOptions: () => ({key, balance, tranactionLimit, historyLogs}),

            putCredits: money => {
                balance += money, 
                historyLogs.push(addLogs(`Received credits`, money, new Date().toLocaleString(`en-GB`)));
            },

            takeCredits: money => {
                if (tranactionLimit > money && balance > money) {
                    balance -= money;
                    historyLogs.push(addLogs(`Withdrawal`, money, new Date().toLocaleString(`en-GB`)));
                    return true;
                  } else {
                    console.log(`Ooops! Check your pay limits`);
                    historyLogs.push(addLogs(`Received money`, money, new Date().toLocaleString(`en-GB`)));
                    return false;
                  }
            },

            setTransactionLimit: money => {
                tranactionLimit = money;
                historyLogs.push(addLogs(`Received credits`, money, new Date().toLocaleString(`en-GB`)));
            },

            transferCredits: function(money, anotherCard) {
                let stateTax = (money * tax).toFixed(round) * 1;
                if (this.takeCredits(stateTax)) {
                  anotherCard.putCredits(money);
                }
            }
        };
    }

function UserAccount(userName) {
    const cardPerUser = 3;
    this.name = userName;
    this.cards = [];
    this.addCard = function(){
        if (this.cards.length < cardPerUser) {
            this.cards.push(userCard(this.cards.length + 1));
            }
        };
    this.getCardByKey = function(number) { 
        this.cards[number - 1]; 
        }
}
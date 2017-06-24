/**
 * A mini-project to test my knowledge on JavaScript so far.
 */

// Open an Account
var savingsAccount = {

    money: 3000,
    type: 'Savings'

};

var spendingAccount = {

    money: 300,
    type: 'Everyday'

};


// Deposit Money into Account

function depositMoney(account, amount) {

    account.money += amount;
    console.log('You have successfully Deposited £' + amount + ' from your ' + account.type + ' account!\nYou have £' + account.money + ' Left in your ' + account.type + ' account!');

}

// Withdraw Money out of Account

function withdrawMoney(account, amount) {

    if (account.money - amount > 0) {

        account.money -= amount;
        console.log('You have successfully Withdrawn £' + amount + ' from your ' + account.type + ' account!\nYou have £' + account.money + ' Left in your ' + account.type + ' account!');
    }
    else {
        console.log('INSUFFICIENT FUNDS! You have £' + account.money + ' In your '+ account.type + ' account!');
    }

}

// Check Bank Statement
function checkStatement(account){
    return 'You have £' + account.money + ' in your ' + account.type + ' account!';
}

withdrawMoney(savingsAccount, 200);
checkStatement(spendingAccount);
depositMoney(spendingAccount, 92);
withdrawMoney(spendingAccount, 10000);
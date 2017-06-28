/**
 * Problem: only 1 account, no way to create an account and no way to get an already existing account.
 */
// Create an array for accounts
// Account Object -> Balance, Username

// Create an Account function createAccount(account) -> take an account object and store it inside an array of accounts and then returns account

// getAccount(username) -> finding matching account with the forEach function and then return the account details

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

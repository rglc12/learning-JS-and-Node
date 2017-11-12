/**
 * Problem: only 1 account, no way to create an account and no way to get an already existing account.
 */
// Requires and array to store the account objects
var accounts = [];

// A function that creates an account object and then stores in the accounts array.
function createAccount(username){
    var account = {
        balance: 0,
        username: username
    };
    accounts.push(account);
    console.log(username + "'s account has been created!")
}

// A function to search for an account in the array with a matching username to the argument
function getAccount(username){
    accounts.forEach(function (account) {
        if(account.username === username){
            console.log('Account found! ' + account.username + "'s balance is £" + account.balance );
        } else {
            console.log('Account not found!');
        }
    })
}

// Deposit money into Account

function depositBalance(username, amount) {
    accounts.forEach(function (account) {
        if(account.username === username){
            account.balance += amount;
            console.log(account.username + ' has successfully Deposited £' + amount + '\nYou have £' + account.balance);
        }
    })
}

// Withdraw money out of Account

function withdrawbalance(username, amount) {
    accounts.forEach(function (account) {
        if(account.username === username){
            if (account.balance - amount > 0) {
                account.balance -= amount;
                console.log(account.username + ' has successfully Withdrawn £' + amount + ' from your ' + account.type + ' account!\nYou have £' + account.balance);
            }
            else {
                console.log('INSUFFICIENT FUNDS! You have £' + account.balance + ' In your '+ account.type + ' account!');
            }
        }
    })
}

// Check Bank Statement - remains un-modified as the function was not used.
function checkStatement(account){
    return 'You have £' + account.balance;
}


createAccount('RickSanchez');
getAccount('test');
getAccount('RickSanchez');
createAccount('RLC');
createAccount('SC');
createAccount('RL');
depositBalance('RLC', 2000);
depositBalance('RL', 200);
depositBalance('RickSanchez', 3000);
depositBalance('SC', 1523);
withdrawbalance('RLC', 877);

/**
 * Created 23:36pm 29-JUN-2017
 * Author: Ryan Lee Clark
 *
 * Previous version of this file/project can be located with the following path: ./Practice/bank-account.js
 *
 * Change Log from previous file/Project:
 * - Identified the problem (see comment at the top of the file.
 * - Incorporated Arrays and objects into this project.
 * - New array for accounts was created
 * - Create 2 new functions: createAccount(username) & getAccount(username)
 * - Modified depositBalance(account, amount) & withdrawBalance(account, amount) to take the following arguments (username, amount)
 * in order to be compatible with the new functions and account object
 * - Modified the above functions to take a forEach method to search for an account and then proceed by executing the function
 *
 */

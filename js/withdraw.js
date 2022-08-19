/*
1. add event handler with the withdraw button
2. get the withdraw amount
3. clear the withdraw input field
4. get previous withdraw total
5. calculate total eithdraw amount and set it to the withdraw total element
6. get previous balance
7. calculate new balance and set it to the balance total element


*/

// step 1
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step 2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdeawAmount = parseFloat(newWithdrawAmountString);

    //step 3
    withdrawField.value = '';

    // step 4
    const withdrawElement = document.getElementById('withdraw-total');
    const withdrawTotalString = withdrawElement.innerText;
    const withdrawTotalAmount = parseFloat(withdrawTotalString);

    // step 5
    const newWithdrawTotal = newWithdeawAmount + withdrawTotalAmount;
    withdrawElement.innerText = newWithdrawTotal;

    //step 6
    const balanceElement = document.getElementById('balance-total');
    const previousTotalBalanceString = balanceElement.innerText;
    const previousBalanceTotal = parseFloat(previousTotalBalanceString);

    // step 7
    const newBalanceTotal = previousBalanceTotal - newWithdeawAmount;
    balanceElement.innerText = newBalanceTotal;
})
/*
1. add event listner to the deposit button
2. get deposit amount from the deposit input field
2.5 convert string deposit amount to the number type
3. clear the deposit input field after getting the value
4. get the previous deposit total
5. calculate new deposit total and set the value to the deposit toatal
6. get current balance total
7. calculate the new balance and set it to the balance total element

*/

//step 1
document.getElementById('btn-deposit').addEventListener('click', function(){
    //step 2
    const depositField = document.getElementById('deposit-field');
    const newDepositString = depositField.value;
    const newDepositAmount = parseFloat(newDepositString);

    //step 3
    depositField.value = '';

    //step 4
    const depositElement = document.getElementById('deposit-total');
    const previousDepositString = depositElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositString);

    //step 5
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositElement.innerText = newDepositTotal;

    //step 6
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceString = balanceTotalElement.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceString);

    //step 7
    const newBalanceTotal = previousBalanceAmount + newDepositAmount;
    balanceTotalElement.innerText = newBalanceTotal;
})
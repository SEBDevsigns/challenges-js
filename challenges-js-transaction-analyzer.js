// STEP 1 - Create  Global Scoped Variable(s)

const transactions = [1250, -500, 500, -50, -350, 200, -200, -750, -63];

/* 
   STEP 2 - Functions for Next Steps: 
        - calculateBalance(transactions),
        
        - countDeposits(transactions),

        - countWithdrawals(transactions),

       - detectLargeWithdrawal(transactions) 

*/


const calculateBalance = function (transactions) {

    let bal = '';

    for (t = 0; t < transactions.length; t++) {
        bal = bal + transactions[t];
    }
    return parseFloat(bal);  // Type casts the bal variable to a Float, NOT a String (ie adds all numbers together)
};





const countDeposits = (_transActs) => {
    let numTANonZero = 0;

    for (t in _transActs) {
        // console.log(transactions[t]);

        if (_transActs[t] > 0) {

            // console.log(_transActs[t]);
            // numTANonZero = numTANonZero + _transActs[t];
            numTANonZero++;
        }
    }
    return numTANonZero;
};




const countWithdrawals = (_transActs) => {
    let numTALessZero = 0;

    for (t of _transActs) {
        // console.log(transactions[t]);

        if (t < 0) {

            // console.log(_transActs[t]);
            // numTANonZero = numTANonZero + _transActs[t];
            numTALessZero++;
        }
    }
    return numTALessZero;
};




const detectLargeWithdrawal = (_transActs) => {

    let isLessThan500 = false;
    let arrlistNums = [];
    let msgOut = '';

    for (ta of _transActs) {
        // console.log(ta);

        if (ta < -500) {
            // console.log(`Withdrawal of ${ta} is less than -500, right`);
            msgOut = 'Suspicious Activity Detected';

            break;  // Break Statement - Exits for of loop when first finding a ta val less than -500.
        }
        else {
            msgOut = 'No Suspicious Activity';
            // return msgOut;

        }

    }
    return msgOut;
};


/* STEP 3- Use the Functions (Declared in Step 2) */

const balance = calculateBalance(transactions);
// console.log(balance);

const depositCount = countDeposits(transactions);
// console.log(depositCount);

const withdrawalCount = countWithdrawals(transactions);
// console.log(withdrawalCount);

const securityStatus = detectLargeWithdrawal(transactions);
// console.log(securityStatus);



/* STEP 4 - Print Summary */

console.log(`\nAccount Summary\n--------------`);
console.log(`Balance: ${balance}`);
console.log(`Deposits: ${depositCount}`);
console.log(`Withdrawals: ${withdrawalCount}`);
console.log(`Security Status: ${securityStatus}`);


// Stretch Goals - getAverageTransaction(transactions) , getLargestDeposit(transactions) 

//  let avgTrans = sumTrans + 1 ;
const getAverageTransaction = (transactions) => {
    // console.log(transactions.length);

    let sumTrans = 0;
    // let avgTrans = sumTrans / (transactions.length - 1);

    for (ta = 0; ta < transactions.length; ta++) {
        sumTrans = sumTrans + Math.abs(transactions[ta]);
    }
    return parseInt(sumTrans / (transactions.length));
};

const avgTrans2 = getAverageTransaction(transactions);
console.log(`\n${avgTrans2} is the Average Transaction Amount`);


const getLargestDeposit = (transactions) => {

    let rangePointer = transactions[0];

    for (i = 1; i < transactions.length; i++) {
        if (transactions[i] > rangePointer) {
            rangePointer = transactions[i];
        }
    }
    return rangePointer;
};

const largestDeposit = getLargestDeposit(transactions);
// console.log(largestDeposit);

console.log(`\n${largestDeposit} is the Largest Deposit Amount\n`);
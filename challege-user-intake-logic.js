/* 
  Global Variables - Object Literal to hold properties associted w/ a User for Account
*/

const User = {
    firstName: "Scott",
    age: 46,
    annualIncome: 120000,
    creditScore: 780,
    isCitizen: true,
    hasCriminalRecord: false,
    isApproved: false
};


// Buffer Variable to Output Comments based on conditions met or not in steps below...

let totMsgOut = '';


// Basic Eligibility - Can a User Open an Account?

if (User.age >= 18 && User.isCitizen === true && User.hasCriminalRecord === false) {
    User.isApproved = true;
    console.log(`${User.firstName} is Account Approved\n`);

}
else {
    console.log(`Sorry, ${User.firstName}s is Account Denied\n`);;
}

/* Premium Qualification - Check if User Qualifies for this Account type based on annualIncome, creditScore, and they
were approved or not in previous step 
*/

if (User.annualIncome > 100000 && User.creditScore >= 720 && User.isApproved) {
    console.log(`${User.firstName} is Premium Approved\n`);
}
else {
    console.log(`Sorry, ${User.firstName} has Standard Account Only\n`);
}

// Flag User for manual review if: Either Credit Score is less than (below) 600 OR Income is below 25000.

if (User.creditScore < 600 || User.annualIncome < 25000) {
    console.log(`${User.firstName} is Flag for Review\n`);
}
else {
    console.log(`${User.firstName} has No Risk Flags\n`);
}


/* 
   Stretch Goals (Optional) - Assign variable of "riskLevel" using a Multi-Conditionals w/ Ternary Operator
*/

let riskLevel = (User.creditScore < 550) ? console.log('High\n') : ((User.creditScore) >= 550 && (User.creditScore <= 650)) ? console.log('Medium\n') : console.log('Low\n');



/* 
console.log(totMsgOut);
console.log(User.isApproved); */
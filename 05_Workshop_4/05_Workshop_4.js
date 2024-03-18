/** Class Customer */
class Customer{
    name = "";
    address = "";
    phone = "";
    email = "";
    account = [];
    constructor(name, address, phone, email){
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.email = email;
    }
    verify(name){
        return this.name === name;
    }
    getAccount(){
        return this.getAccount;
    }

    //Customer ต้องการเปิดบัญชี
    createAccount(bank, accountType){
        return bank.createAccount(accountType)
    }
}

/** Class Bank*/
class Bank{
    name = "";
    address = "";
    code = "";
    constructor(name, address, code){
        this.name = name;
        this.address = address;
        this.code = code;
    }
    manage(){

    }
    maintain(){

    }
    verify(){

    }
    openAccount(){

    }
    closeAccount(){

    }
    createTransaction(){

    }
    createCustomer(){

    }
    createATM(){

    }
    createAccount(accountType){
        let account;
        if(accountType === "CurrentAccount"){
            account = new CurrentAccount ("")
        }else{

        }
    }
}

/** Class Account */
class Account {
    accountNumber = "";
    balance = 0;
    constructor(accountNumber, balance){
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount){
        if(amount > 0){
            prompt("ถอนเงินเท่าไหร่");
            console.log(`คุณถอนเงิน : ${amount} บาท`);
        } else {
            console.log("no money");
        }
    }
    withdraw(amount){

    }
    createTransaction(){

    }
    getTransaction(){
        
    }
    getAccountType(){

    }
    getCustomer(){

    }
    setCustomer(){

    }

}



/** Class Transaction*/
class Transaction{
    transactionId = "";
    transactionType = "";
    amount = 0;
    transactionDate = "";
    status = "";
    constructor(transactionId, transactionType, amount, transactionDate, status){
        this.transactionId = transactionId;
        this.transactionType = transactionType;
        this.amount = amount;
        this.transactionDate = transactionDate;
        this.status = status;
    }
    getTransactionId(){

    }
    getTransactionType(){

    }
    getAmount(){

    }
    getTransactionDate(){

    }
    getStatus(){

    }
    setStatus(){

    }
    setAmount(){

    }
    setTransactionDate(){

    }
}

/** Class CurrentAccount*/
class CurrentAccount {
    overdraftLimit = 0;
    overdraftInterest = 0;
    constructor(overdraftLimit, overdraftInterest){
        this.overdraftLimit = overdraftLimit;
        this.overdraftInterest = overdraftInterest;
    }
    calculateInterest(){

    }
    getOverdraftLimit(){

    }
    setOverdraftLimit(amount){
        this.amount = amount;
    }
}

/** Class SavingAccount*/
class SavingAccount {
    interestRate = -""
    constructor(interestRate){
        this.interestRate = interestRate;
    }
    calculateInterest(){

    }
    getInterestRate(){

    }
    setInterestRate(){

    }
}

/** Class ATM*/
class ATM {
    location = "";
    managedBy = "";
    constructor(location, managedBy){
        this.location = location;
        this.managedBy = managedBy;
    }
    identify(){

    }
     
}

/** Function Main*/
const main = () =>{
    //**Customer */
    // const cus1 = new Customer ("KK", "KK house", "012345687", "kk@gmail.com");
    // console.log(cus1.verify("KK"));

    const acc1 = new Account ("01", 5000);
    console.log(acc1.deposit());
}

main();
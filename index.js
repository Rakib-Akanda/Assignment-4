function calculateMoney(ticketSale){
    if(typeof ticketSale !== "number" || ticketSale <= 0){
        return "Please provide positive number";
    }
    const ticketPrice = 120;
    const gateKeeperSalary1 = 500;
    const totalStaff = 8;
    const staffCost8 = 50;
    const totalTicketSale = ticketPrice * ticketSale;
    const totalStaffCost = totalStaff * staffCost8;
    const totalCost = totalStaffCost + gateKeeperSalary1;
    const remainingTaka = totalTicketSale - totalCost;
    return remainingTaka;
}

function checkName(nameMain){
    if(typeof nameMain !== "string" ){
        return "invalid";
    }
    let smallLetter = nameMain.toLowerCase();
    let lastWord = smallLetter.slice(-1) ;
    if(lastWord === "a" || lastWord === "y" || lastWord === "i" || lastWord === "e" || lastWord === "o" || lastWord === "u" || lastWord === "w"){
        return "Good Name";
    }
    else{
        return "Bad Name";
    }  
}

function deleteInvalids(mainArray){
    if(Array.isArray(mainArray) != true ){
        return "Input must be an array.";
    }
    let stockArray = [];
    for(let element of mainArray){
        if(typeof element === "number" && !isNaN(element)){
            stockArray.push(element);
        }
    }
    return stockArray;
}

function password(obj){
    if(typeof obj !== 'object'|| obj.birthYear.toString().length !== 4 || !obj.name || !obj.birthYear || !obj.siteName || typeof obj.name !== "string" || typeof obj.siteName !== "string" ){
        return "invalid";
    }
    const caseSiteName = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);
    const passForUser = `${caseSiteName}${"#"}${obj.name}${"@"}${obj.birthYear}`
    return passForUser;
}

function monthlySavings(arr , livingCost) {
    if(Array.isArray(arr) !== true && typeof livingCost !== "number"){
        return "invalid input";
    }
    let totalPaymentAmount = 0;
    for(let totalTaka of arr){
        if(totalTaka <= 2999){
        totalPaymentAmount += totalTaka;      
        }
    }
    let afterTaxTotalTk =0;
    for(let tax20 of arr){
        if(tax20 >= 3000 ){
            const taxTk = tax20 * 0.2;
            const afterTaxTk = tax20 - taxTk;
            afterTaxTotalTk += afterTaxTk;
        }
    }
    const totalLeftAmount = totalPaymentAmount + afterTaxTotalTk;
    const savingsAmount = totalLeftAmount - livingCost;
    if(savingsAmount >= 0){
        return savingsAmount;
    }
    else if(savingsAmount < 0 ){
        return "Earn more.";
    }
}

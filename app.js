function updateCaseNumber(product, price,isIncreasing){
    const caseInput=document.getElementById(product + '-number'); 
    // Here product + '-number'=case+'-number'='case-number' 
    let caseNumber=caseInput.value;
    if(isIncreasing==true){
        caseNumber=parseInt(caseNumber)+1;
        // caseInput.value=parseInt(caseNumber)+1;
    }
    else if(caseNumber>0){
        caseNumber=parseInt(caseNumber)-1;
    }
    caseInput.value=caseNumber;
    
    // Update case total &59
     const caseTotal= document.getElementById(product+'-total');
     caseTotal.innerText= caseNumber*price; 
    //  here 59 is not in an input field so we use .innerText




}

// Phone increase decrease events
// Add plus phone
document.getElementById('phone-plus').addEventListener('click',function(){
    updateCaseNumber('phone',1219,true);
});
// Add minus phone
document.getElementById('phone-minus').addEventListener('click',function(){
    updateCaseNumber('phone',1219,false);
});

// Handle case increase decrease events
// Add plus button
document.getElementById('case-plus').addEventListener('click',function(){
    updateCaseNumber('case',59,true);
});

// Add minus button
document.getElementById('case-minus').addEventListener('click',function(){
    updateCaseNumber('case',59,false);
});

// two get tow plus and minus button
// document.getElementById('case-plus').addEventListener('click',function(){
//     // console.log('case plus clicked');
//     const caseInput=document.getElementById('case-number');
//     const caseNumber=caseInput.value;
//     caseInput.value= parseInt (caseNumber)+1;
//     // console.log(caseNumber);
// });

// document.getElementById('case-minus').addEventListener('click',function(){
//     const caseInput=document.getElementById('case-number');
//     const caseNumber=caseInput.value;
//     caseInput.value=parseInt(caseNumber)-1;

// })
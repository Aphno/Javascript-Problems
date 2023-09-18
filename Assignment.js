const prompt=require('prompt-sync')();

function problem1(inputString){//Reverse String
    const charArray=inputString.split('');//turn string into an array
    const reverseArray=charArray.reverse();//reverse position of arrayy
    const reverseString=reverseArray.join('');//join array into string
    return reverseString;
}

function problem2(numbers) {//Largest Number

    if (numbers.length === 0) {
      //Handle the case when the array is empty
      return undefined;
    }
    let largest = numbers[0]; //Assume the first number is the largest
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > largest) {
        //Update largest if a larger number is found
        largest = numbers[i];
      }
    }
    return largest;
}

function problem3(limit){//Fibonacci Sequence
    if (limit<=0){//array is empty
        return[];
    }else if(limit==1){//only 0
        return[0]
    }else if(limit==2){// theres only 0 and 1
        return[0,1];
    }else{
        let sequence=[0,1];
        for(let i=2;i < limit;i++){
            let x= sequence[i-1]+sequence[i-2];
            sequence.push(x);
        }
        return sequence;
    }
}

function problem4(inputString){//Check Palindrome
    const lowercase=inputString.toLowerCase();
    const charArray=lowercase.split('');
    const reverseArray=charArray.slice().reverse();
    const reverseString=reverseArray.join('');
    return lowercase==reverseString;
}

function problem5(numbers){//Calculate Factorial
    if(numbers==0){
        return 1;
    }
    else if(numbers==1){
        return 1;
    }
    else{
        let factorial=1;
        for(let i=2;i<=numbers;i++){
            factorial *= i;
        }
        return factorial;
    }
}

function problem6(numbers){//Check Prime Number
    if (numbers <= 1) {
        return false; // 1 is not a prime number
    }
    
    for (let i = 2; i <= Math.sqrt(numbers); i++) {
        if (numbers % i === 0) {
            return false; // If it's divisible by any number between 2 and its square root, it's not prime
        }
    }
    
    return true; // If no divisors are found, it's a prime number
}

function problem7(inputString){//Count Words
    const charArray=inputString.split(/\s+|[,.;!?]+/);//split words that have punctuation marks
    const filterArray=charArray.filter(word=>word.trim()!=='');//filter multiple spaces
    return filterArray.length;
}

function problem8(numbers){//Bubble Sort
    numberarray=numbers.split(' ').map(Number);
    const len=numberarray.length;
    let swap;
    do{
        swap=false;
        for(let i=0;i<len-1;i++){
            if(numberarray[i]>numberarray[i+1]){
                let temp=numberarray[i];
                numberarray[i]=numberarray[i+1];
                numberarray[i+1]=temp;
                swap=true;
            }
        }
    }
    while(swap);
    return numberarray;
}

function problem9(arr1,arr2){//Common Elements
    const common=[];
    for(const element of arr1){
        if(arr2.includes (element)){
            common.push(element);
            }
        }
    return common.length>0?common:undefined;//if there are no elements, send undefined
}

function problem10(base,exp){//Calculate Power
    if(exp==0){
        return 1;
    }
    let product=1;
    for(let i=1;i<=exp;i++){// can also use Math.pow(base,exp)
        product*=base;
    }
    return product
}
let retry=true;
while(retry){
const choice=prompt(`Which problem you want to solve (1-10): `);
if (choice=='1'){
    console.log(`Reverse String`);
    const inputString=prompt('Enter a string to be reversed: ');
    const reversed=problem1(inputString);
    console.log(`Reversed: ${reversed}`);
} else if(choice=='2'){
    console.log(`Largest Number`);
    const inputNumbers = prompt(`Enter numbers, make sure to separate by space: `).split(' ').map(Number);//turn into array that we can use
    const largest=problem2(inputNumbers);
    if (largest!==undefined){//Largest Number
        console.log(`Largest Number: ${largest}`);
    }else{
        console.log(`Error`);//Invalid Input
    }
}else if(choice=='3'){
    console.log(`Fibonacci Sequence`);
    const inputLimit=prompt(`Enter how many terms you want to calculate the Fibonacci Sequence: `);//prompt
    const answer=problem3(inputLimit);
    console.log(`Fibonacci Sequence: ${answer}`);
}else if(choice=='4'){
    console.log(`Palindrome Check`);
    const inputString=prompt('Enter String to check for Palindrome: ')
    const palindrome=problem4(inputString);
    console.log(`Palindrome: ${palindrome}`);
}else if(choice=='5'){
    console.log(`Factorial of Number`);
    const numbers =prompt('Enter Number to do Factorial: ')
    const factorial=problem5(numbers);
    console.log(`Factorial: ${factorial}`);
}else if(choice=='6'){
    console.log(`Prime Number Check`);
    const numbers=prompt(`Enter number to determine prime: `);
    const prime=problem6(numbers);
    console.log(`Prime: ${prime}`);
}
else if(choice=='7'){
    console.log(`Calculate Word Count`);
    const inputString=prompt(`Enter sentence to calculate word count: `);
    const count=problem7(inputString);
    console.log(`Word Count: ${count}`);
}
else if(choice=='8'){
    console.log(`Sort Number in Ascending Order`);
    const numbers=prompt(`Enter numbers separated by space to sort in ascending order: `);
    const sort=problem8(numbers);
    console.log(`Sorted in ascending order: ${sort}`);
}
else if(choice=='9'){
    console.log(`Check for common elements in 2 arrays.`);
    console.log(`Separate number with space.`);
    const common1=prompt(`Enter the first array: `);
    com1=common1.split(' ').map(Number);
    const common2=prompt(`Enter the second array: `);
    com2=common2.split(' ').map(Number);
    const common=problem9(com1,com2);
    if(common!=undefined){
        console.log(`Common elements between two array: ${common}`)
    }
    else{
        console.log(`No common elements`);
    }
}
else if(choice==`10`){
    console.log(`Calculate base to a specified exponent x^y.`)
    const base=prompt(`Enter base,x: `);
    const exp=prompt(`Enter exponent,y: `);
    if(!isNaN(base)||!isNaN(exp)){
        basefloat=parseFloat(base);
        expfloat=parseFloat(exp);
        result=problem10(basefloat,expfloat);
        console.log(`Result: ${result}`);
    }
    else{
        console.log(`Why you didnt enter number?`);
    }
}
else{
    console.log(`Bzzzzzt. Invalid Choice. Please enter a valid problem number.`)
}
const retryInput=prompt(`Do you want to try another problem? y/n: `);
retry=retryInput.toLowerCase()==`y`;
}

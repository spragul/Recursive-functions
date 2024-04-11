// Write a recursive function to calculate the power of a number.
//4^3=>4x4x4=>64
//anything power 0 is value 1  =>4^0=>1

function power(num1,num2){
    if(num2==0){
        return 1
    }else{
         return num1*power(num1,num2-1)
    }
}
console.log(power(4,3))
console.log(power(2,5))
console.log(power(8,3))
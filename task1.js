// Task 1 
let array = [45, 12, 3, 6, 17, 0]
function SeparateOdds(array){
let odsarray = []

for(let i = 0; i < array.length; i++){
    if(array[i]%2===0){
        odsarray.push(array[i])
    }
   }
return odsarray
}
function SeparateEvens (array){
    let evensarray = []
    for(let j = 0; j < array.length; j++){
    if(array[j]%2!==0){
        evensarray.push(array[j])
    }
   }
return evensarray
}
console.log(SeparateOdds(array))
console.log(SeparateEvens(array))


// Task 5
function number(sentence){
    let arr = [],
        str = "",
        isNeqative = false,
        result = 0

arr = sentence.split("")        


for(let i = 0; i < arr.length; i++){
if(!isNaN(+arr[i]) || arr[i] === "-"){

    str += arr[i] 
}
else{
    if(!isNaN(+str)){
        result += +str       
    }
    str = ""
}
}
return result
}
console.log(number("/ws23dkjd-42dsukds10"))

// Task 2
   let                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
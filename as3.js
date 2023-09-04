var res = equilibriumIndex([-7,1,5,2,-4,3,0])
console.log(res)

function equilibriumIndex(arr){
    let cumArr = []
    let sum = 0
    for(let i=0; i<arr.length; i++){
        sum += arr[i]
        cumArr.push(sum);
    }
    console.log(cumArr)
    for(let j=0; j<cumArr.length; j++){
        if(j==0 && cumArr[cumArr.length-1]-cumArr[j]==0){
            return j
        }
        if(j==cumArr.length-1 && cumArr[j-1]==0){
            return j
        }
        if(cumArr[j-1] == cumArr[cumArr.length-1]-cumArr[j]){
            return j
        }
    }
}

rangeSum([2,2,2], [[0,0], [1,2]])

function rangeSum(arr, refArr){
    let resArr = []
    for(let i=0; i<refArr.length; i++){
        let sum = 0
        for(j=refArr[i][0]; j<=refArr[i][1]; j++){
            sum += arr[j]
        }
        resArr.push(sum)
    }
    console.log(resArr)
}

timeToEquality([2,4,1,3,2])

function timeToEquality(arr){
    let count = 0
    let max = Number.MIN_VALUE
    for(let i=0; i<arr.length; i++){
        if(arr[i]>=max){
            max = arr[i]
        }
    }
    for(let j=0; j<arr.length; j++){
        if(arr[j] <= max){
            count = count + (max-arr[j])
        }
    }
    console.log(count)
}

productArray([5,1,10,1])

function productArray(arr){
    let res = []
    for(let i=0;i<arr.length;i++){
        let prod = 1;
        for(let j=0;j<arr.length;j++){
            if(i != j){
                prod *= arr[j]
            }
        }
        res.push(prod)
    }
    console.log(res)
}
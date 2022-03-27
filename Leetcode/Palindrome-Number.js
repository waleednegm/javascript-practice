//Leetcode
//problem https://leetcode.com/problems/palindrome-number/

var isPalindrome = function(x) {
    let num = x.toString();
    let size = num.length;
    size=Math.ceil(size/2);
    console.log(size);
    let b=true;
    let xx=num.length -1;
    if(num.length==1){
        return true;
    }
    for(let i=0;i<size;i++){
        if(num[i]!=num[xx]){
            return false;
        }
        xx--;
        
    }
    return true;
};

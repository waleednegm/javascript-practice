//Leetcode
//problem https://leetcode.com/problems/valid-parentheses/

var isValid = function(s) {
    let arr=[s[0]];
    if(s.length % 2 !== 0){
        console.log('false');
        return false;
    }
    for(let i=1;i<s.length;i++){
        if(arr[arr.length-1]=='(' && s[i]==')'){
            arr.pop();
        }else if(arr[arr.length-1]=='[' && s[i]==']'){
            arr.pop();
        }else if(arr[arr.length-1]=='{' && s[i]=='}'){
            arr.pop();
        }else{
            arr.push(s[i]);
        }
    }
    if(arr.length===0){
        return true;
    }else{
        return false;
    }
    
};

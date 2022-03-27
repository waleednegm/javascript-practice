//Leetcode
//problem https://leetcode.com/problems/roman-to-integer/

var romanToInt = function(s) {
    let context = {'I':1 , 'V':5 ,'X':10 ,'L':50 ,'C':100 ,'D': 500,'M': 1000 };
    let counter=0;
    for(let i=0;i<s.length-1;i++){
        if(context[s[i]]>=context[s[i+1]]){
            counter+=context[s[i]];
        }else{
            counter-=context[s[i]];
        }
    }
    counter+=context[s[s.length-1]];
    return counter;
};

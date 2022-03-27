//Leetcode
//problem https://leetcode.com/problems/two-sum/

var twoSum = function(nums, target) {
    let sum=0;
    for( let i=0;i<nums.length-1;i++ ){
        for(let j=0;j<nums.length;j++){
            sum = nums[i]+nums[j];
            if(sum==target & i != j){
                return [i,j];
            }
        }
    }
};

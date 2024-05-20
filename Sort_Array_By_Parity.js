// 905. Sort Array By Parity

// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.
// Return any array that satisfies this condition.


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {

    let array = []

    for(let i = 0; i < nums.length; i++){
        if(nums[i] % 2 == 0){
            array.push(nums[i])
        }
    }

    for(let j = 0; j < nums.length; j++){
        if(nums[j] % 2 != 0){
            array.push(nums[j])
        }
    }

    return array
    
};
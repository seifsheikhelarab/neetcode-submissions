class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
    let n = nums.length;
    let sol: number[] = new Array(n);

    let prefix = 1;
    for (let i = 0; i < n; i++) {
        sol[i] = prefix;
        prefix *= nums[i];
    }

    let suffix = 1;
    for (let j = n - 1; j >= 0; j--) { 
        sol[j] *= suffix;
        suffix *= nums[j];
    }

    return sol;
}}

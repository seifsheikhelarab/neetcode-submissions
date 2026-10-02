class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let checker = [...new Set(nums)];
        if(checker.length === nums.length){
            return false;
        }else{
            return true;
        }
    }
}

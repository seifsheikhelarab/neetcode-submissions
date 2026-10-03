class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
    const numSet = new Set(nums);
    let longest = 0;

    for (const n of numSet) {
        if (!numSet.has(n - 1)) {
            let length = 1;
            while (numSet.has(n + length)) {
                length += 1;
            }
            longest = Math.max(length, longest);
        }
    }

    return longest;
}
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
    const frequency = new Map<number,number>;
    let temp: number = 0;
    //search to set or update
    nums.forEach(number => {
        if (frequency.get(number) === undefined) {
            frequency.set(number,1);
        } else {
            temp = frequency.get(number)!;
            temp++;
            frequency.set(number, temp);
        }
    });
    const sorted = [...frequency].sort((a, b) => b[1] - a[1]);
    let ans: number[] = [];
    for (let i = 0; i < k; i++) { 
        ans.push(sorted[i][0]);
    }
    return ans;
}
}

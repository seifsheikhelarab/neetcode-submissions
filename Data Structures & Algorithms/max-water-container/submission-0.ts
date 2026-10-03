class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let left = 0,
            right = heights.length - 1;
        let max = 0;
        while (left < right) {
            max = Math.max(max, (right - left) * Math.min(heights[left], heights[right]));
            if (heights[left] < heights[right]) left++;
            else right--;
        }
        return max;
    }
}

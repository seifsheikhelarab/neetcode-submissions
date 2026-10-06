class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        if (s.length === 0) {
            return 0;
        }

        let left = 0;
        let right = 1;
        let max = 1;
        let str = new Set<string>();
        str.add(s[0]);

        while (left < right) {
            if (!str.has(s[right]) && right <= s.length - 1) {
                str.add(s[right]);
                max = Math.max(max, str.size);
                right++;
                continue;
            } else if (str.has(s[right]) && right <= s.length - 1) {
                str.delete(s[left]);
                left++;
                if (left === right) {
                    right++;
                    str.add(s[left]);
                }
                max = Math.max(max, str.size);
                continue;
            }
            return max;
        }
        return max;
    }
}

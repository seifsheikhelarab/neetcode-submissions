class Solution {
   public:
    vector<int> twoSum(vector<int>& numbers, int target) {
        for (int i = 0; i < numbers.size(); i++) {
            int complement = target - numbers[i];
            auto it = lower_bound(numbers.begin() + i + 1, numbers.end(), complement);
            if (it != numbers.end() && *it == complement) {
                return {i + 1, (int)distance(numbers.begin(), it) + 1};
            }
        }
        return {};
    }
};

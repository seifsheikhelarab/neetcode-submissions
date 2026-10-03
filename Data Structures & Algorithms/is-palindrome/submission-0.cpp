class Solution {
public:
    bool isPalindrome(string s)
{
    string result;
    for (unsigned char c : s)
    {
        if (isalnum(c))
        {
            result += tolower(c);
        }
    }

    int left = 0;
    int right = result.length() - 1;

    for (int i = 0; i < result.length() / 2; i++)
    {
        if (result[left] != result[right])
        {
            return false;
        }
        left++;
        right--;
    }

    return true;
}
};

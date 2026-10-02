class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        let ss = s.split("").sort().join("");
        let st = t.split("").sort().join("");

        if(ss===st){
            return true;
        }else return false;
    }
}

class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
  const map: Map<string, string[]> = new Map();

  for (const s of strs) {
    // Sort characters to create a canonical key
    const key = s.split('').sort().join('');
    
    if (!map.has(key)) {
      map.set(key, []);
    }
    
    map.get(key)!.push(s);
  }

  return Array.from(map.values());
}
}

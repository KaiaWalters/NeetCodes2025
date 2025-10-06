class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length > s.length) return "";
        
        let tCount = {};
        for (let i = 0; i < t.length; i++) {
            if (tCount[t[i]]) {
                tCount[t[i]]++;
            } else {
                tCount[t[i]] = 1;
            }
        }
        
        let windowCount = {};
        let left = 0;
        let minLen = Infinity;
        let minStart = 0;
        let have = 0;
        let need = Object.keys(tCount).length;
        
        for (let right = 0; right < s.length; right++) {
            let char = s[right];
            
            if (windowCount[char]) {
                windowCount[char]++;
            } else {
                windowCount[char] = 1;
            }
            
            if (tCount[char] && windowCount[char] === tCount[char]) {
                have++;
            }
            
            while (have === need) {
                if (right - left + 1 < minLen) {
                    minLen = right - left + 1;
                    minStart = left;
                }
                
                let leftChar = s[left];
                windowCount[leftChar]--;
                
                if (tCount[leftChar] && windowCount[leftChar] < tCount[leftChar]) {
                    have--;
                }
                
                left++;
            }
        }
        
        if (minLen === Infinity) {
            return "";
        } else {
            return s.substring(minStart, minStart + minLen);
        }
    }
}
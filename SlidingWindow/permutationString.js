class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;
        
        const s1Count = {};
        const windowCount = {};
        
        for (let char of s1) {
            s1Count[char] = (s1Count[char] || 0) + 1;
        }
        
        for (let i = 0; i < s1.length; i++) {
            windowCount[s2[i]] = (windowCount[s2[i]] || 0) + 1;
        }
        
        const matches = () => {
            for (let key in s1Count) {
                if (s1Count[key] !== windowCount[key]) return false;
            }
            return true;
        };
        
        if (matches()) return true;
        
        for (let i = s1.length; i < s2.length; i++) {
            windowCount[s2[i]] = (windowCount[s2[i]] || 0) + 1;
            
            const leftChar = s2[i - s1.length];
            windowCount[leftChar]--;
            if (windowCount[leftChar] === 0) {
                delete windowCount[leftChar];
            }
            
            if (matches()) return true;
        }
        
        return false;
    }
}
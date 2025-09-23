class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        

        let sArray = s.toLowerCase().replaceAll(/[^a-zA-Z0-9]+/g, "").split('')

        let i = 0 
        let j = sArray.length - 1 
        while(i <= j) {
            if(sArray[i] === sArray[j]) {
                i++ 
                j--
            } else return false 
        }

        return true
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let store = []
        for(let num of nums) {
            if(store.includes(num)) {
                return true
            } else {
                store.push(num)
            }
        }

        return false
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let frequency = new Map() 
        let kfrequent = []

        for(let i = 0 ; i < nums.length; i++) {
            if(frequency.has(nums[i])) {
                let newCount = frequency.get(nums[i]) + 1 
                frequency.set(nums[i], newCount)
                
            }else {
                frequency.set(nums[i], 1)
            }
        }

            for(let [key, value] of frequency.entries()) {
                kfrequent.push([key, value])
                kfrequent.sort((a, b) => a[1] - b[1])

                if(kfrequent.length > k) {
                    kfrequent.shift()
                }
            }

            return kfrequent.map(item => item[0])
    }
}
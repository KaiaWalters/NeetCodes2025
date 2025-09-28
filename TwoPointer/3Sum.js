class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum = function(nums) {
      
        const target = 0 
        let store = []

        nums.sort((a, b) => a - b);

        for (let k = 0; k <= nums.length - 2 ; k ++) {
            if (k > 0 && nums[k] === nums[k - 1]) continue; // skip duplicates for k

            let i = k + 1
            let j = nums.length - 1 

            while (i < j) {
                let sum = nums[i] + nums[j] + nums[k]

                if(sum > target) {
                    j --
                } else if (sum < target) {
                    i ++ 
                } else {
                    store.push([nums[k], nums[i], nums[j]]);
                    i++;
                    j--;
                    while (i < j && nums[i] === nums[i - 1]) i++; // skip duplicates
                    while (i < j && nums[j] === nums[j + 1]) j--; // skip duplicates
                }
            }
        }

        return store

    };
}

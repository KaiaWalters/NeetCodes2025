 class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */


    maxArea(heights) {
        let i = 0 
        let j = heights.length - 1 
        let maxWater = 0 

        while(i < j) {
            let distance = (j + 1) - (i + 1)

            let height = Math.min(heights[i], heights[j])

            console.log(height)

            let currentVol = height * distance

                 maxWater = Math.max(maxWater, currentVol)
            
                if(heights[i] < heights[j]) {
                    i++
                }else {
                    j--
                }
            console.log(height, distance)
        }

        return maxWater
    }
}

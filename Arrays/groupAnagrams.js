class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let anagrams = new Map()//dictionary
            console.log(strs)
        for(let i = 0; i <= strs.length - 1; i++){ //loop through each string in the array
            let sorted = strs[i].split("").sort().join("") //sort the string

            if(anagrams.has(sorted)) { //check if the map has a key that matches the sorted word
                let newVal = anagrams.get(sorted).concat([strs[i]])
                anagrams.set(sorted, newVal )   
            } else {
                anagrams.set(sorted,[strs[i]])
            }

            console.log(anagrams)

            

        }

        return Array.from(anagrams.values())

    }
}

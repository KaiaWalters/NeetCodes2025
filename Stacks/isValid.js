class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let str = s.split('')
       
        let map = new Map()
        map.set('}', '{')
        map.set(']', '[')
        map.set(')', '(')

        while (str.length > 0) {
            let leftChar = str[0]
            let rightChar = str[str.length - 1]

            if (leftChar === map.get(rightChar)) {
                str.pop()
                str.shift()
            } else {
                break
            }
        }

        return str.length === 0

    }
}












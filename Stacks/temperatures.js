class Solution {
  /**
   * @param {number[]} temperatures
   * @return {number[]}
   */
  dailyTemperatures(temperatures) {
    let stack = [];
    let result = new Array(temperatures.length).fill(0); // creates and array with the same length as temperatures.  Fills it with 0s.

    for (let i = 0; i < temperatures.length; i++) {
      // while current temp is warmer than the temp at the top of the stack
      while (
        stack.length > 0 &&
        temperatures[i] > temperatures[stack[stack.length - 1]] //get the last index stored in the stack 
      ) {
        let prevIndex = stack.pop(); // day we found a warmer temp for
        result[prevIndex] = i - prevIndex; // calculate the number of days between the current temp index and the last index pushed to the stack
      }

      // push current day's index onto stack
      stack.push(i);
    }

    return result;
  }
}

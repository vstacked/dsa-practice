// function runningSum(nums: number[]): number[] {
//   let arr: number[] = [];
//   for (let i = 0; i < nums.length; i++) {
//     let num = nums[i]!;
//     for (let j = 0; j < i; j++) {
//       num += nums[j]!;
//     }
//     arr = [...arr, num];
//   }
//   return arr;
// }

// function runningSum(nums: number[]): number[] {
//   let arr: number[] = [];
//   let total = 0;
//   for (let i = 0; i < nums.length; i++) {
//     let num = nums[i]! + total;
//     total = nums[i]!;
//     arr = [...arr, num];
//   }
//   return arr;
// }

function runningSum(nums: number[]): number[] {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i]! + nums[i - 1]!;
  }
  return nums;
}

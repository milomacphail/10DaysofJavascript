function getSecondLargest(nums) {

    var max = Math.max(...nums);
    var arrayWithoutMax = nums.filter(e => e != max);
    var newMax = Math.max(...arrayWithoutMax);

    return newMax;


}

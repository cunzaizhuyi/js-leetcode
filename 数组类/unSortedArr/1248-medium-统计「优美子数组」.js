//1248. 统计「优美子数组」medium



// 暴力：会超时
var numberOfSubarrays = function(nums, k) {
    let cnt = 0;
    for(let i = 0; i <= nums.length - k; i++){
        let c = 0;
        let idx = i;
        while(c <= k && idx < nums.length){
            if(nums[idx] % 2 === 1){
                c++;
            }
            if(c === k){cnt++;}
            idx++;
        }
    }
    return cnt;
};


var numberOfSubarrays2 = function(nums, k) {
    let cnt = 0;

    return cnt;
};


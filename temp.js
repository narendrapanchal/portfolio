var containsNearbyDuplicate = function(nums, k) {
    const o={}
    for(let i=0;i<nums.length;i++){
        if(o[`${nums[i]}`]!=null&&(i-o[`${nums[i]}`])<=k){
            return true;
        }
        o[`${nums[i]}`]=i;
    }
    return false;
};
console.log(containsNearbyDuplicate([1,2,3,1],3));
9818979825
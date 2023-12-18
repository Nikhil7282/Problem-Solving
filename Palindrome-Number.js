var isPalindrome_e = function(x) {
    if(x<0){
        return false
    }
    let strNum=""+x
    let l=0;
    let r=strNum.length-1;
    while(l<r){
        if(strNum[l]!==strNum[r]){
            return false
        }
        l++;
        r--;
    }
    return true
};
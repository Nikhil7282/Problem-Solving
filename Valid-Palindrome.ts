function isPalindrome(s: string): boolean {
    let cleanStr:string=cleanUp(s)
    let l=0
    let r=cleanStr.length-1
    while(l<r){
        if(cleanStr[l]!=cleanStr[r]){
            return false
        }
        l++;
        r--;
    }
    return true

    function cleanUp(str:string){
        let checkString="abcdefghijklmnopqrstuvwxyz1234567890"
        let newStr=""
        for(let i=0;i<str.length;i++){
            let lChar=str[i].toLowerCase()
            if(checkString.indexOf(lChar)!==-1){
                newStr+=lChar
            }
        }
        return newStr
    }
};
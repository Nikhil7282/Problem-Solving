
var isValid = function(s) {
    let stack=[]
    for(let i=0;i<s.length;i++){
        let char=s.charAt(i)
        if(char==="("||char==="["||char==="{"){
            stack.push(char)
        }
        else{
            let preValue=stack.pop()
            if(preValue ==="(" && char!==")") return false;
            if(preValue ==="[" && char!=="]") return false;
            if(preValue ==="{" && char!=="}") return false;
            if(preValue===undefined) return false
        }
    }
    return stack.length===0
};
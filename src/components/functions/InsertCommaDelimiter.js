export const CommaDelimeter = (num) => {
    let n = num.length;
    if(n<=3){
        return num;
    }   

    let cnt = 0;
    let res = "";
    let tmp = 3;

    for(var i=n-1;i>=0;i--){
        cnt++;
        res+=num[i]
        if(cnt==tmp && i!=0){
            res+=","
            cnt = 0;
            tmp = 2;
        }
    };

    res = res.split("");
    res = res.reverse();

    return res.join("");
}

export const RemoveCommaDelimeter = (num) => {
    let n = num.length;
    let res = "";
    for(var i=0;i<n;i++){
        if(num[i]!=','){
            res+=num[i];
        }
    }

    return res;
};



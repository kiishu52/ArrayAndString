let arr=[[1,2],[3,4],[5,6]];
  
for(let i =0;i<arr.length;i++){
    let res=" ";
    for(let j=0;j<arr[0].length;j++){
        res+=arr[i][j]+" ";
    }
    console.log(res);
}
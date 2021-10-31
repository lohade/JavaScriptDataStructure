let sumToZero = () =>{
    let arr=[4,9,-1,-7,-2];
    let status=true;
    for(let i=0;i<arr.length-2;i++)
    {
        for(let j=i+1;j<arr.length-1;j++)
        {
            for(let k=j+1;k<arr.length;k++)
            {
                if(arr[i]+arr[j]+arr[k]==0){
                    console.log("three number are:"+`${arr[i]}, ${arr[j]}, ${arr[k]}`);
                    status=true;
                }

            }
        }
    }
    if(status==false){
        console.log("not found");
    }
}
sumToZero();
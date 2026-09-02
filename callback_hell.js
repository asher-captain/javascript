function getdata(a,getnextdata){
    setTimeout(
        ()=>{
            console.log("data",a);
    if(getnextdata){
        getnextdata();
    }
        }
    ,2000);
    
}

getdata(123,()=>{
    getdata(456,()=>{
        getdata(789,()=>{
            getdata(564,()=>{
                getdata(111);
            });
        });
    });
});
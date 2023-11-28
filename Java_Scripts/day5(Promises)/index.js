  // ----Promises -----
  let url1="my name is rajat"
  function download_url(url){
    return new Promise(function(resolve,rejecct){
        console.log("inside promise");
        resolve(url);
    })
  }

  function download_it(data){
    console.log(data);
  }
download_url(url1).then(function(res){
    download_it(res);
}).catch(function(error){
    console.log(error);
})

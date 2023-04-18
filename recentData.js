const objArray = [
    {
      id: 1,
      type: "post1"
    },
    {
      id: 2,
      type: "post2"
    },
    {
      id: 1,
      type: "post1.1"
    },
    {
      id: 1,
      type: "post1.2"
    },
    {
      id: 5,
      type: "pos1t5"
    },
    {
      id: 51,
      type: "pos1t51"
    }
  ];
  function latestData(arr){
  
      let obj={};
      for(let i=0;i<arr.length;i++){
     
          if(obj.hasOwnProperty(arr[i])){
               obj[arr[i].id]=arr[i];
          }else{
              obj[arr[i]]=arr[i].id
          }
      }
      let result=[];
      for(let x in obj){
          result.push(obj[x])
      }
      return result;
  }
  
  console.log(latestData(objArray));
var fs=require("fs");
var request=require("request");
var forEach = require('async-foreach').forEach;
var array=[1];
forEach(array,function(link,index,arr){
var options = {
  url: 'https://api.github.com/users?since='+link,
  headers: {
    'User-Agent': 'request'
  }
};

    request(options,function(err,response,json_d){
        if(!err)
        {
            var json=JSON.parse(json_d);
            forEach(json,function(link1,index1,arr1){
                console.log(link1.login);
                if(index1==arr1.length1&&array.length!=3)
                {
                    array.push(link1.id);
                }
            });
        }
    });
});

function getRequest(){
    var url= location.search;
    var ret = new Object();
    if(url.indexOf("?")!=-1){
        var str = url.substr(1);
        strs=str.split("&");
        for(var i=0;i<strs.length;i++){
            ret[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
        }
 
    }
return ret;
}
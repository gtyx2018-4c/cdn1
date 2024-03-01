function getRequest(){
    var url= location.href;
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
function getRequestNew(){
    var url = location.href;
    var Request = "";
    var Request_x;
    var Request_x=url.indexOf("?");
    
    var Request = url.split("?");
    var Request = Request[2].split("&")
    var ret = Request;
    return ret;
}
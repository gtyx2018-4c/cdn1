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
    var Request = new Object;
    var Request_x;
    Request_x=url.indexOf("?");
    
    Request = url.split("?");
    Request = Request[2].split("&")
    var ret = Request;
    return ret;
}
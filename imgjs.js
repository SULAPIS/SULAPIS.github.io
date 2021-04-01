var n=0;
var _console=null;
function debug(msg){
    if((_console==null) || (_console.closed)){
        _console=window.open("","console","width=300px,height=300px,resiable");
        _console.document.open("text/plain");
    }
    _console.focus();
    _console.document.writeln(msg);
}

var aniframes=new Array(22);
for(var i=0;i<22;i++){
    aniframes[i]="scr/img/pingu/"+i+".jpg";
}
var frame=0;
var timeoutId=null;
function animatee(){
    document.pingu.src=aniframes[frame];
    // alert(document.pingu.src);
    frame=(frame+1)%22;
    timeoutId=setTimeout("animatee()",100);
}
function animatef(){
    document.pingu.src=aniframes[frame];
    // alert(document.pingu.src);
    frame=frame-1;
    if(frame==-1) frame=21;
    timeoutId=setTimeout("animatef()",100);
}
window.onload = function(){ 
    var iframeW = document.getElementById('app-frame').contentWindow;
    iframeW.addEventListener('click', function () {
        let a = iframeW.pc.app;
        console.log(a.currentCase +' -- '+ a.currentStrap);
    });
}
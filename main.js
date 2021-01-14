window.onload = function(){ 
    var iframe = document.getElementById('app-frame');
    iframe.onload = function() {
        var iframeW = iframe.contentWindow;
        iframeW.addEventListener('click', function () {
            let a = iframeW.pc.app;
            console.log(a.currentCase +' -- '+ a.currentStrap);
        });
    };
}
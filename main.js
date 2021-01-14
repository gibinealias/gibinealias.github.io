var iframeWindow = document.getElementById("app-frame").contentWindow;
iframeWindow.addEventListener("click", function (event) {
    let a = iframeWindow.pc.app;
    console.log(a.currentCase +" --- "+ a.currentStrap);
});
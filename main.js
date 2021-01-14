window.onload = function(){
    let iframeW = document.getElementById('app-frame').contentWindow,
        app = iframeW.pc.Application.getApplication();

    app.on("update_strap", function (data) {
        console.log(data);
    });

    app.on("update_case", function (data) {
        console.log(data);
    });
}
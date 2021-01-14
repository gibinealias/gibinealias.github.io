window.onload = function(){
    let app = document.getElementById('app-frame').contentWindow.pc.Application.getApplication();

    app.on('update_strap', function(val) {
        console.log(val);
    });

    app.on('update_case', function(val) {
        console.log(val);
    });
}
WinJS.Application.addEventListener("activated", function (e) {
    "use strict";

    e.setPromise(new WinJS.Promise(function (complete) {
        require.config(window.appConfig("require"));


        require(["bootstrap"], function (main) {
            main.run(e.detail);

            complete();
        });
    }));
});

WinJS.Application.start();
var App = {};

define(function (require) {

    var Backbone = require('backbone'),
        $ = require('jquery'),
        patternC = require('collections/patterns'),
        mainV = require('views/mainview');

    return {
        run: function (activatedEventDetail) {
            var activationKinds = Windows.ApplicationModel.Activation.ActivationKind;
            var fetchPromise;

            var patternModel = new patternC();

            var mainview = new mainV({
                el: $("#content"),
                model: patternModel
            });

            if (activatedEventDetail.kind === activationKinds.launch) {              
                fetchPromise = patternModel.fetch();
            } else if (activatedEventDetail.kind === activationKinds.search) {

                fetchPromise = patternModel.fetch(activatedEventDetail.queryText)
                                           .then(function (results) {
                                               args.detail.searchSuggestionCollection.appendQuerySuggestion("TIMMY!");
                                               
                                           });

            }


            if (fetchPromise) {
                fetchPromise.then(function () {
                    mainview.render();
                })
            }
        }
    };
});
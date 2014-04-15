/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'models/pattern'
], function ($, _, Backbone, PatternsModel) {
    'use strict';

    var PatternsCollection = Backbone.Collection.extend({
        model: PatternsModel,

        initialize: function () {
            this.fetch();
        },

        fetch: function (searchQuery) {
            var fetchPromise;
            if (searchQuery) {
                fetchPromise = $.getJSON("http://www.colourlovers.com/api/patterns?format=json&keywords=" + encodeURIComponent(searchQuery));
            }

            else {
                fetchPromise = $.getJSON("http://www.colourlovers.com/api/patterns/top?format=json");
            }
            return fetchPromise.then(
              function (result) {
                  this.add(result);
                  return this;
              }.bind(this));
        }
    });

    return PatternsCollection;
});

/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var PatternModel = Backbone.Model.extend({
        url: '',

        initialize: function() {
        },

        defaults: {
            image: '\\images\\logo.scale-100.png',
            title: 'dummy'
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

    return PatternModel;
});

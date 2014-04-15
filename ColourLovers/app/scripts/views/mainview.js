/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'mustache'
], function ($, _, Backbone, JST, mustache) {
    'use strict';

    var MainviewView = Backbone.View.extend({
        template: JST['mainview-template'],

        tagName: 'div',

        id: 'MainviewView',

        className: 'MainviewView',

        events: { 'click .pattern-item': 'setBackground' },

        setBackground:function(e){
            e.preventDefault();
            var id = $(e.currentTarget).data("id");
            var item = this.model.get(id);
            this.selected = item;
            $("body").css('background-image', 'url(\''+item.get('imageUrl')+'\')');
        },

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },


        render: function () {
            var model = { models: this.model.toJSON() };

            this.$el.html(mustache.render(this.template, model));

            WinJS.UI.processAll(this.el);

        }
    });

    return MainviewView;
});

define(function() { this.JST = {
    "mainview-template" : '<div class="fragment homepage"><header aria-label="Header content" role="banner"><h1 class="titlearea win-type-ellipsis"><span class="pagetitle">Pattern lovers</span></h1></header><section aria-label="Main content" role="main"><div id="patterns">{{#models}}<div class="pattern-item" data-id="{{id}}"><img src="{{imageUrl}}" width="200" /><h3>{{title}}</h3><div data-win-control="WinJS.UI.Rating" data-win-options="{averageRating:{{numHearts}}}"></div></div>{{/models}}</div></section></div>',
    "done": "true"
  }; return this.JST;});
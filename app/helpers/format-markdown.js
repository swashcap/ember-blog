/*global Showdown:false*/
/*global Handlebars:false*/

import Ember from 'ember';

var showdown = new Showdown.converter();

export default Ember.Handlebars.makeBoundHelper(function (markdown) {
  return new Ember.Handlebars.SafeString(showdown.makeHtml(markdown));
});

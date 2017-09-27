import Ember from 'ember';
import algoliasearch from 'npm:algoliasearch';
import algoliasearchHelper from 'npm:algoliasearch-helper';

export default Ember.Component.extend({
  helper: null,
  imageAttribute: "large_photo.url",
  displayAttributes: ["_highlightResult.Title.value", "_highlightResult.ChannelName.value"],

  didReceiveAttrs() {
    this._super(...arguments);
    var client = algoliasearch('0HZJX3QJ82', 'e9d98e1b47e409340d5b60921ff0545a');
    var helper = algoliasearchHelper(client, 'live', {
      getRankingInfo: true
    });
    this.set('helper', helper);
  },

});

import Ember from 'ember';
import algoliasearch from 'npm:algoliasearch';
import algoliasearchHelper from 'npm:algoliasearch-helper';

export default Ember.Component.extend({
  hits: [],
  helper: null,
  imageAttribute: null,
  displayAttributes: [],

  didReceiveAttrs() {
    this._super(...arguments);
    if(this.get('helper')){
      this.get('helper').on('result', this.updateResults.bind(this));
      this.get('helper').setQuery("t");
      this.get('helper').search();
    }
  },

  updateResults(results){
    this.set('hits', results.hits);
  },

  // hitsObserver: Ember.on('init', Ember.observer('hits', function(){
  //   debugger;
  // }))
});

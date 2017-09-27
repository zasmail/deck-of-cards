import Ember from 'ember';
import algoliasearch from 'npm:algoliasearch';
import algoliasearchHelper from 'npm:algoliasearch-helper';

export default Ember.Route.extend({
  templateName: 'cards',
  controller: null,
  helper: null,

  model(params){
    var client = algoliasearch('0HZJX3QJ82', 'e9d98e1b47e409340d5b60921ff0545a');
    var helper = algoliasearchHelper(client, 'live');
    return helper;
  },

  setupController(controller, model){
    this.set('controller', controller);
    this.set('helper', model);
    controller.set('helper', this.get('helper'));
    this.get('helper').search();
  },

  helperObserver: Ember.on('init', Ember.observer('helper', function(){
    if(this.get('helper')){
      this.get('helper').on('result', this.updateResults.bind(this))
    }
  })),

  updateResults(results){
    this.set('hits', results.hits);
  },
});

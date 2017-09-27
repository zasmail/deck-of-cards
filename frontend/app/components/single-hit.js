import Ember from 'ember';

export default Ember.Component.extend({
  hit: null,
  imageAttribute: null,
  displayAttributes: [],

  image: Ember.computed('imageAttribute', 'hit', function(){
    var nestedArray = this.get('imageAttribute').split('.');
    this.nestedAttribute = this.get('hit');
    nestedArray.forEach(function(attr){
      if(this.nestedAttribute){
        this.nestedAttribute = this.nestedAttribute[attr];
      }
    }.bind(this));
    return this.nestedAttribute;
  }),

  content: Ember.computed('hit', 'displayAttributes', function(){
    this.attributes = [];
    this.get('displayAttributes').forEach(function(attr){
      this.attributes.addObject(this.handleNestedObject(attr, this.get('hit')));
    }.bind(this));
    return this.attributes;
  }),

  handleNestedObject: function(attribute, hit){
    var nestedArray = attribute.split('.');
    this.nestedAttribute = hit;
    nestedArray.forEach(function(attr){
      if(this.nestedAttribute){
        this.nestedAttribute = this.nestedAttribute[attr];
      } 
    }.bind(this));
    return this.nestedAttribute;
  },

});

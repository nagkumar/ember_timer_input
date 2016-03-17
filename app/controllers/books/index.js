import Ember from 'ember';
import groupBy from 'ember-group-by';

export default Ember.Controller.extend({
                                         booksByType: groupBy('model', 'type')
                                       });

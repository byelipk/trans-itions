import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    show() {
      this.toggleProperty('show');
    },
    slideFromBottom() {
      this.toggleProperty('slideFromBottom');
    },
    slideFromTop() {
      this.toggleProperty('slideFromTop');
    },
    slideFromLeft() {
      this.toggleProperty('slideFromLeft');
    }
  }
});

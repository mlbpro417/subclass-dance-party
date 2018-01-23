var NapoleanDancer2 = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  MakeDancer.call(this, top, left, timeBetweenSteps); //check the parameters
  this.$node = $('<span class="napolean2"><img src="src/napolean2.gif" width="120" height="120" alt="sdfsdf">');
  this.$node.animate({ height: 10, width: 10});
  this.setPosition(top, left);
  
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};

NapoleanDancer2.prototype = Object.create(MakeDancer.prototype);
NapoleanDancer2.prototype.constructor = NapoleanDancer2;


NapoleanDancer2.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  MakeDancer.prototype.step.call(this);
  // oldStep.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //this.$node.toggle(); commented out toggle to stop blinking
  
};

var NapoleanDancer = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  MakeDancer.call(this, top, left, timeBetweenSteps); //check the parameters
  this.$node = $('<span class="napolean"><img src="src/napolean.gif" width="80" height="90" alt="sdfsdf">');
  // this.$node.animate({ height: 10, width: 10});
  this.setPosition(top, left);
  
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};

NapoleanDancer.prototype = Object.create(MakeDancer.prototype);
NapoleanDancer.prototype.constructor = NapoleanDancer;


NapoleanDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  MakeDancer.prototype.step.call(this);
  // oldStep.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //this.$node.toggle(); commented out toggle to stop blinking
  
};

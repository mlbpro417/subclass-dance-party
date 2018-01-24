describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;
  var napoleanDancer;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new MakeBlinkyDancer(10, 20, timeBetweenSteps);
    
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });

  describe('napoleanDancer', function() {
    it('should add one napoleanDancer to the screen', function () {
      // napoleanDancer = new NapoleanDancer(10, 20, timeBetweenSteps);
      // napoleanDancer.step(); 
      // console.log(window.dancers); 
      //document.body.childNodes.span
      $(document).ready(function() {
        window.dancers = [];
        $('.addDancerButton').on('click', function(event) {
          /* This function sets up the click handlers for the create-dancer
           * buttons on dancefloor.html. You should only need to make one small change to it.
           * As long as the "data-dancer-maker-function-name" attribute of a
           * class="addDancerButton" DOM node matches one of the names of the
           * maker functions available in the global scope, clicking that node
           * will call the function to make the dancer.
           */
          //keyword trigger
           
          var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

          // get the maker function for the kind of dancer we're supposed to make
          var dancerMakerFunction = window[dancerMakerFunctionName];

          // make a dancer with a random position

          var dancer = new dancerMakerFunction(
            $('body').height() * Math.random(),
            $('body').width() * Math.random(),
            Math.random() * 1000
          );
          dancers.push(dancer);
          $('body').append(dancer.$node);
        });
        
      });
      $('.addDancerButton').trigger('click');
      console.log(window.dancers);
      expect(window.dancers.length).to.not.equal(0);
    });
  });
});


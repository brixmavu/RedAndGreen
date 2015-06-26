var assert = {
	passed: false,
	equals:function(desiredOutcome, Outcome) {

					if (desiredOutcome === Outcome){
						this.passed = true;
        				
					} 
					else  {
						this.passed = false;
   					
					}
				}
		}

var TestMyCode = {


	numberOfTestsRan: 0,
	numberOfTestsPassed: 0,

	run:function(name,assertTest){
      
    this.numberOfTestsRan = this.numberOfTestsRan + 1;

	var newSqr = document.createElement("div");

	newSqr.id = "div"+this.numberOfTestsRan;
	newSqr.style.width = "300px";
	newSqr.style.height = "300px";
	newSqr.style.border = "5px solid black";
	newSqr.style.display = "inline-block"

	document.body.appendChild(newSqr);

	var rg = new RedOrGreen(newSqr.id);
      this.name=name;
      assertTest(assert);
      if (assert.passed){
         rg.makeGreen();
         newSqr.innerHTML = name;
         this.numberOfTestsPassed = this.numberOfTestsPassed + 1;
      }
      else{
         rg.makeRed();
         newSqr.innerHTML = name;
      }

      document.getElementById('Outcome').innerHTML = "number of tests passed : " + this.numberOfTestsPassed + " out of " + this.numberOfTestsRan;
      document.body.appendChild(Outcome);

		}

	}

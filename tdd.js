var assert = {
	equals:function(desiredOutcome, Outcome) {
			var rg = new RedOrGreen("square"); 
					if (desiredOutcome === Outcome){		
        				rg.makeGreen();
					} 
					else  {
   						rg.makeRed();
					}
				}
		}

var TestMyCode = {

		run: function  (name, test) {
			// body...
			this.name = name;
			test(assert);
		}

	};


	//(Outcome !== desiredOutcomen 
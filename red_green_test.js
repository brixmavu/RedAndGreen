
	var rg = new RedOrGreen("square");

   rg.makeGreen();  
   if(document.getElementById('square').style.backgroundColor === 'green'){
   		alert("success");	
   }
   else{
   		alert("failure");
   }
   

   rg.makeRed();
   if(document.getElementById('square').style.backgroundColor === 'red'){
         alert("success"); 
   }
   else{
         alert("failure");
   }
   
   //(backgroundColor == "red") ? true : false;

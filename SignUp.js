function myFunction()
 {		
        if (!/^[a-zA-Z]*$/g.test(document.myForm.name.value)) 
		{
        alert("Invalid characters in Name");
		//document.myForm.name.focus();
		return false;
		}
		
		var x = document.forms["myForm"]["age"].value;
		if(/^[a-zA-Z]*$/g.test(document.myForm.age.value)) 
		{
        alert("Invalid characters in Age");
		//document.myForm.age.focus();
		return false;
		}
		else if (x<18)
			alert("Age must be more than 18!");
		 
		var c = document.forms["myForm"]["city"].value;
		if (c != "Brampton" && c!= "Mississauga" && c!= "Toronto") 
		{
        alert("Invalid characters in City");
		//document.myForm.age.focus();
		return false;
		}
		
		
		if(!/^[A-Z][0-9][A-Z][0-9][A-Z][0-9]$/g.test(document.myForm.code.value)) 
		{
        alert("Invalid characters in Postal Code");
		
		return false;
		}
		if(!/^[A-Za-z0-9]+[@][a-zA-Z]*$/g.test(document.myForm.email.value)) 
		{
        alert("Invalid characters in email address");
		
		return false;
		}
}
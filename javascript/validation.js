function pagetest () {
	var status = true;
	var name = document.getElementById("fname").value;
	name = name.trim();// to remove white spacefrom begining and last

	if(name=="")
	{
		status = false;
		document.getElementById("fname").style.borderColor="red";

		document.getElementById("nameerror").innerHTML="Invalid Name";
	}else{
		document.getElementById("fname").style.borderColor="";


		document.getElementById("nameerror").innerHTML="";
	
	}

	// mobile no validation

	var mobile= document.getElementById("mobile").value;
	mobile = mobile.trim();// to remove white spacefrom begining and last

	if((mobile=="") || (mobile.length<10)  || (isNaN(mobile)))
	{
		status = false;
		document.getElementById("mobile").style.borderColor="red";

		document.getElementById("mobileerror").innerHTML="Invalid Mobile No";
	}else{
		document.getElementById("mobile").style.borderColor="";


		document.getElementById("mobileerror").innerHTML="";
	
	}
	//city validation starts

	var city = document.getElementById("city").value;
	city = city.trim();// to remove white spacefrom begining and last

	if(city=="")
	{
		status = false;
		document.getElementById("city").style.borderColor="red";

		document.getElementById("cityerror").innerHTML="Invalid Name";
	}else{
		document.getElementById("city").style.borderColor="";


		document.getElementById("cityerror").innerHTML="";
	
	}
	//adress validation starts
	var address = document.getElementById("address").value;
	address = address.trim();// to remove white spacefrom begining and last

	if(address=="")
	{
		status = false;
		document.getElementById("address").style.borderColor="red";

		document.getElementById("addresserror").innerHTML="Invalid Name";
	}else{
		document.getElementById("address").style.borderColor="";


		document.getElementById("addresserror").innerHTML="";
	
	}
	//gender validation starts
	var m = document.getElementById("m").checked;
	var f= document.getElementById("f").checked;
	if ((m==false) && (f==false)) 
	{
		status = false;
		document.getElementById("gendererror").innerHTML="Please Select Your Gender";
	}else{
		document.getElementById("gendererror").innerHTML="";
	}
	//T&C  validation STARTS
	
	var cnd = document.getElementById("cnd").checked;
	var cnd = document.getElementById("cnd").checked;
	if (cnd==false) 
	{
		status = false;
		document.getElementById("cnderror").innerHTML="Please Select Terms & Conditions";
	}else{
		document.getElementById("cnderror").innerHTML="";
	}
	// file upload validation

	var file=document.getElementById("file").value;
	//my-resume.doc, abc.xyz.jpg, a-b-c-d.jpg
	var filearray = file.split(".");//remove . and make as array
	var ext = filearray[filearray.length-1];
		
		if(ext !="jpg")
		{
			status = false;
			document.getElementById("fileerror").innerHTML="Please Select Valid File";
		}	else{
			document.getElementById("fileerror").innerHTML="";
		}
		alert(status);
		if (status==true) {
			document.getElementById("form1").submit();
		}
}
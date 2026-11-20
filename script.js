document.addEventListener("DOMContentLoaded",() =>{
	const readmeInput = document.getElementById("readmeInput");
	const refineBtn = document.getElementById("refineBtn");
	const clearBtn =document.getElementById("clearBtn");
	
	console.log("script is connected");
	clearBtn.addEventListener("click",()=>{
		readmeInput.value="";
		sessionStorage.removeItem("originalREADME");
		readmeInput.focus();
		console.log("README cleared");

	});

	refineBtn.addEventListener("click", () =>{
		const readme = readmeInput.value.trim();

		if (readme == ""){
			alert("Paste your Readm before continuing");
			return;
		}

		sessionStorage.setItem("originalREADME",readme);
		alert("README RECIEVED SUCCESSFULLY");
		console.log("ReadME stored",readme);

	});
	

});

// js rewrite sucks . and the sucks more , when the error was a basic typo .. ToT // 

document.addEventListener("DOMContentLoaded",() =>{
	const readmeInput = document.getElementById("readmeInput");
	const refineBtn = document.getElementById("refineBtn");
	const clearBtn =document.getElementById("clearBtn");
	
	const outputSectn = document.getElementById("outputSectn");
	const ouputTxt = document.getElementById("outputTxt");
	const copyBtn = document.getElementById("copyBtn");

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

		const demoOutput = "This is my project ,, and i am currently testing rn ,, and now i also gotta connect the AI api and shi#";

		outputTxt.value = demoOutput;
		outputSectn.style.display ="block";
		copyBtn.diabled =false;
		console.log("Demo README generated");

		

	});
	

	copyBtn.addEventListener("click", async()=>{
		const ouput = outputTxt.value;

		if (ouput.trim() == ""){
			return;
		}

		try{
			await navigator.clipboard.writeText(output);
			alert("README copied successfully!");

		} catch (error){
			outputTxt.focus();
			outputTxt.select();

			const copied = document.execCommand("copy");

			if (copied){
				alert("README copied successfully!");

			}else{
				alert("Unable to copy.Please copy manually");
			}
		}
	});

});

// js rewrite sucks . and the sucks more , when the error was a basic typo .. ToT // 

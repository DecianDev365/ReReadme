document.addEventListener("DOMContentLoaded",() =>{
	const readmeInput = document.getElementById("readmeInput");
	const refineBtn = document.getElementById("refineBtn");
	const clearBtn =document.getElementById("clearBtn");
	
	const outputSectn = document.getElementById("outputSectn")
	const ouputTxt = document.getElementById("outputTxt");
	const copyBtn = document.getElementById("copyBtn");

	const apiKeyInput =document.getElementById("apiKeyInput");
	const readmeInput = document.getElementById("readmeInput");


	console.log("script is connected");
	

	clearBtn.addEventListener("click",()=>{
		readmeInput.value="";
		sessionStorage.removeItem("originalREADME");
		readmeInput.focus();
		console.log("README cleared");

	});

	refineBtn.addEventListener("click", async () =>{
		const apiKey = apiKeyInput.value.trim();

		if (apiKey == ""){
			alert("Plz enter your Openrouter api key.");
			return;
		}

		const readme = readmeInput.value.trim();

		if (readme == ""){
			alert("Paste your Readm before continuing");
			return;
		}

		sessionStorage.setItem("originalREADME",readme);
		
		refineBtn.diabled = true ;
		refineBtn.textContent = "Rewrtiting ....";

		outputSectn.style.display ="block";
		outputTxt.value = "Your bad README is being cleaned .... ";
		copyBtn.disabled = true ;


		try {
			
			const response = await fetch(
    				"https://openrouter.ai/api/v1/chat/completions",
    			{
        			method: "POST",
        			headers: {
            					"Authorization": `Bearer ${apiKey}`,
           					 "Content-Type": "application/json"
        			},
        			body: JSON.stringify({
           			model: "openai/gpt-4o-mini",
           			messages: [
                			{
                   			 role: "user",
                   			 content: "Hello, how are you?"
                			}
            				]
        			})
    			}
			);

			const data = await response.json();

			console.log(data.choices[0].message.content);


		}
		

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

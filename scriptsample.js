function inject(){

	let containers = $(".issue-container");

	let sampleIds = ["qwe123","rty098","iop098","098rty","try654"];
	let sampleContent = ["Reminders not sent", "Calendars loading slowly", "Booking page frozen on selecting time zone", "Off hours booking from the booking page"];
	let sampleDescription = ["sfjhsdkfnkjsnfnsfsfddsfsgsg s gsg as gs ","sfjhsdkfnkjsnfnsfsfddsfsgsg s gsg as gs ","sfjhsdkfnkjsnfnsfsfddsfsgsg s gsg as gs ","sfjhsdkfnkjsnfnsfsfddsfsgsg s gsg as gs "];
	let sampleStatus = ["Pending", "Resolved", "Processing"];
	let sampleAssignee = ["Manesh","Pravin","Tamizh","Vinith"];

	let i = 0;

	//distinct container
	let ids = $(".issue-id");
	let contents = $(".issue-content");
	let descriptions = $(".issue-description");
	let statuss = $(".issue-status");
	let dates = $(".issue-date");
	let assignees = $(".issue-assignee");
	let assignedtos = $(".issue-assigned-to");

	while(i < 3){

		let j = 0;
		for(let id of ids){
			id.innerText = sampleIds[j];
			j++;
		}
		j = 0;
		for(let content of contents){
			content.innerText = sampleContent[j];
			j++;
		}
		j = 0;
		for(let content of descriptions){
			content.innerText = sampleDescription[j];
			j++;
		}
		j = 0;
		for(let content of statuss){
			content.innerText = sampleStatus[j];
			j++;
		}		
		j = 0;
		for(let content of dates){
			content.innerText = sampleAssignee[j];
			i++;
		}
		j = 0;
		for(let content of assignees){
			content.innerText = sampleAssignee[j];
			j++;
		}
		j = 0;
		for(let content of assignedtos){
			content.innerText = sampleAssignee[j];
			j++;
		}

		i++;
	}

}

function addactive(){

	function activate(elem){
		$(".nav-box-active").removeClass("nav-box-active").addClass("nav-box");
		$(elem).addClass("nav-box-active").removeClass("nav-box");
		
	}
	$(".nav-box").click(function(event){
		console.log(this);
		activate(this);
	})
}

	inject();
	addactive();
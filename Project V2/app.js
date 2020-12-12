console.log("app is running"); 

$("myForm").on("click", () => {
    console.log("this button works!")
    const input = $("#selectOcc").val();
    console.log(input);
 
  })
 



$(document).ready(function(){

    $("select").change(function(){
        $(this).find("option:selected").each(function(){
            let optionValue = $(this).attr("value");
            if(optionValue){
                $(".box").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else{
                $(".box").hide();
            }
        });
    }).change();
});

$("#call-api-btn").on("click", () => {
    console.log("Call api button was clicked!");
  
    const randomQuote = $.get(`https://api.quotable.io/random`, (data) => {
      console.log(data);
      $("#answer-label").html(data.content); 
    });
  });
  

  function makeTimer() {
	
		let endTime = new Date("25 December 2020 9:56:00 GMT+01:00");			
			endTime = (Date.parse(endTime) / 1000);

			let now = new Date();
			now = (Date.parse(now) / 1000);

			let timeLeft = endTime - now;

			let days = Math.floor(timeLeft / 86400); 
			let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  
			if (hours < "10") { hours = "0" + hours; }
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "10") { seconds = "0" + seconds; }

			$("#days").html(days + "<span>Days</span>");
				

	}

	setInterval(function() { makeTimer(); }, 1000);
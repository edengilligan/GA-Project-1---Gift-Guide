console.log("app is running");

window.initializeClock = function(clockId, dateId) {
  var getTimeRemaining = function(endtime) {
      var t = Date.parse(endtime) - (new Date()).getTime();
      var seconds = Math.floor( (t/1000) % 60 );
      var minutes = Math.floor( (t/1000/60) % 60);
      var hours = Math.floor( (t/(1000*60*60)) % 24);
      var days = Math.floor( t/(1000*60*60*24) );
      return {
          'total': t,
          'days': days,
          'hours': hours,
          'minutes': minutes,
          'seconds': seconds
      };
  }

  var clock = document.getElementById(clockId);
  var deadline = document.getElementById(dateId).value;
  var timeinterval = setInterval(function(){
      var t = getTimeRemaining(deadline);
      clock.innerHTML = 'days: ' + t.days + '<br>' + 'hours: ' + t.hours + '<br>' + 'minutes: ' + t.minutes + '<br>' + 'seconds: ' + t.seconds;
      if(t.total<=0){
          clearInterval(timeinterval);
      }
  }, 1000);
}


const images = [
  {
    url:
      "https://lh3.googleusercontent.com/RFEa4bGrEePYlIp5Y0IKHT79pkFdjLTkiN51nTI6QGyA-DavDxXDCU8od6Wsd7CxErJSkssmWcUBauqZjZq2wC5GpxNfoSoe__psLImZdJIItZT_1myb2qPGV1Ugl40jR67zRGsf=w2400",
    name: "Graduation",
  },
  {
    url:
      "https://lh3.googleusercontent.com/ONuRYpt_rkhUPqeQOcrLWQljO8FP7krQ9l4mJfKNFDZErx0Sd8w9UmbnE0_JHmFj1oM3SmLYl0FeiUdjBR03gANXVkY9azYBcPuAjnijNpMS4ztFZbq2YTBHJ445bdPcs-0MLUAG=w2400",
    name: "21st",
  },
  {
    url:
      "https://lh3.googleusercontent.com/GIsOM7kUTLO1xH8jnG_qz5BPF1QSiJGuc251fp3msHQpe_Z6WoP75b9YOY8iFXoV2JMsujT6iD3yb_f8bRUDwkzUWV-_NuCkgOWxaZmmF7tpljRxkoXDfi_la14oSbZ-_4nRMcrW=w2400",
    name: "30th",
  },
  {
    url:
      "https://lh3.googleusercontent.com/WxOO7zWkGJZDde82V4UNpZnRPaXSWPr6dC9wHJh7uBTrE6lbfizjn_uAJZk74xQhL6--4Qlbdp_tLOSg9vIoNu3EhHHq1A-UGYiy0z91DtpchVIhy_Mb4aiUnwycg-6dYeW38uPZ=w2400",
    name: "50th",
  },
  {
    url:
      "https://lh3.googleusercontent.com/hfktwHjYq1o9-dqjG0iwgw_SQfI7-GaPQPPxm8-C2vZhQ4rXuqKM0Ej8TwmwfS-kjbOiBWio-RorOFRvHwQgr55kwvGOHuu60DuT0UZ9BysXwlhmric7Zj8E60IVEjrkH3PU-UK_=w2400",
    name: "Anniversary",
  },
  {
    url:
      "https://lh3.googleusercontent.com/b9wBRZ3QmUbN9_n5OZVSd47a_e0-OOkXp5Ear60KM7f8gJzhHbH_9eTzSBPFExX4dUZQm6oJDG9YujQDYCrqNK103he_JhQxwHoJpNlvCuwXWGOMB5ag30PuXhioHOIhEa3sVJMf=w2400",
    name: "Wedding",
  }, 
  {
    url:
      "https://lh3.googleusercontent.com/7c_feazbPtzQfybwRJQFd9A6_xuSg3gx-pJ_fRZKX0NPAkKqcLL1eIbC_-FTMKJQFABqiHx5KVk7phXt6wi5JApKcCWErQKZ61Gqjvkoe98eoWMyWaVkA-d3yUrkBFRIJWelmUT0=w2400",
    name: "House-Warming",
  },
  {
    url:
      "https://lh3.googleusercontent.com/xAHxpTwnCeT9PLi2k8JafHF5Wff_JzbzJZoEJBTdg1gO9pLk073GkIi8t8gQNlPUCLfYGEgDZ77WxNeR4qiVJhLg0tuaMDAD-wF8Jd8u7L8_f38E9-vVqyiQWXdYDQFXp1hJXNR8=w2400",
    name: "Baby",
  },
];
images.forEach((el) => {
  console.log(el);
  const $button = $(`<button>${el.name}</button>`);
  const $el = `
        <div> 
        
            <div id="${el.name}">
                <img src=${el.url} /> 
            </div>
        </div>
    `;
  $("#container").append($button);
  $("#container").append($el);
  $(`#${el.name}`).hide(); 
  $button.on("click", () => {
    console.log("button click");
    $(`#${el.name}`).toggle(); 
  });
});


$("#call-api-btn").on("click", () => {
  console.log("Call api button was clicked!");

  const randomQuote = $.get(`https://api.quotable.io/random`, (data) => {
    console.log(data);
    $("#answer-label").html(data.content); 
  });
});


$("#test-me").on("click", () => {
  console.log("this button works!")
  const input = $("#dates").val();
  console.log(input);
  
})


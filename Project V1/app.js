
// checking that js is linked to html 
console.log("app is running");

// defining an array of objects
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

// forEach is mainly used to traverse an array or collection of elements 
// forEach is doing the for loop internally so less code is required. less detail 
// in forEach about how to do the loop, more info about the loop itself

images.forEach((el, index) => {
  // call back function within the forEach. 
  // when someone clicks on the 'each' option this code will run and link up the index number that was selected
  // el = the elmement/the object itself
  // index = similar to i in the for loop, it will map to the index of the array. 
  //eg index 0 is first element in el/images
  console.log(el);
  // checking el is defined & that this code is being read 
  const $opt = $(`<option value=${index}>${el.name}</option>`);
 // append dropbown id/array values
  $("#selectOcc").append($opt);
});

// change event works with dropdowns that detects the clicks on the dropdown selection. 
$("#selectOcc").on("change", (event) => {
  // call back function, event option refers to the dom event object of that option. 
  console.log("select", event.target.value);
// event is referencing the object, target is referencing the target you click/hoved etc, 
  console.log(images[event.target.value])
  // printing the url to the console to check this code is being read 
  $("#container").empty();
  // this clears the selection each time a new selection is made 
  $("#container").append(`<img src=${images[event.target.value].url} />`)
  // this shows the image once selection is made 
  })


  $("#call-api-btn").on("click", () => {
    console.log("Call api button was clicked!");
  
    const randomQuote = $.get(`https://api.quotable.io/random`, (data) => {
      console.log(data);
      $("#answer-label").html(data.content); 
    });
  });

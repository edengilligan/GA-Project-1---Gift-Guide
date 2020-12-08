console.log("app is running");

const images = [
  {
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrgrHGQvSu46UUiyt2D8OJgPzxBtqcIJ-sPQ&usqp=CAU",
    name: "Graduation",
  },
  {
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrgrHGQvSu46UUiyt2D8OJgPzxBtqcIJ-sPQ&usqp=CAU",
    name: "50th",
  },
  {
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrgrHGQvSu46UUiyt2D8OJgPzxBtqcIJ-sPQ&usqp=CAU",
    name: "21st",
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

$("#grad-btn").on("click", () => {
  console.log($("#grad-div").html());
  const children = $("#grad-div").html();
  console.log("grad button clicked");
  const gradImage = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrgrHGQvSu46UUiyt2D8OJgPzxBtqcIJ-sPQ&usqp=CAU" />`;
  if (children) {
    $("#grad-div img").toggle();
  } else {
    $("#grad-div").append(gradImage);
  }
});

$("#50th-btn").on("click", () => {
  console.log("50th button clicked");
  const fiftyImage = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrgrHGQvSu46UUiyt2D8OJgPzxBtqcIJ-sPQ&usqp=CAU" />`;
  $("#50-div").append(fiftyImage);
});

$("#21st-btn").on("click", () => {
  console.log("21st button was clicked!");
  const twentyImage = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrgrHGQvSu46UUiyt2D8OJgPzxBtqcIJ-sPQ&usqp=CAU" />`;
  $("#21-div").append(twentyImage);
});

$("#30th-btn").on("click", () => {
  console.log("30th button was clicked!");
  const thirtyImage = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrgrHGQvSu46UUiyt2D8OJgPzxBtqcIJ-sPQ&usqp=CAU" />`;
  $("#30-div").append(thirtyImage);
});

$("#anniversary-btn").on("click", () => {
  console.log("anniversary button was clicked!");
  const anniImage = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrgrHGQvSu46UUiyt2D8OJgPzxBtqcIJ-sPQ&usqp=CAU" />`;
  $("#anniversary-div").append(anniImage);
});

$("#wedding-btn").on("click", () => {
  console.log("wedding button was clicked!");
  const weddingImage = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrgrHGQvSu46UUiyt2D8OJgPzxBtqcIJ-sPQ&usqp=CAU" />`;
  $("#wedding-div").append(weddingImage);
});

$("#house-btn").on("click", () => {
  console.log("house button was clicked!");
  const houseImage = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrgrHGQvSu46UUiyt2D8OJgPzxBtqcIJ-sPQ&usqp=CAU" />`;
  $("#house-div").append(houseImage);
});

$("#baby-btn").on("click", () => {
  console.log("baby button was clicked!");
  const babyImage = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrgrHGQvSu46UUiyt2D8OJgPzxBtqcIJ-sPQ&usqp=CAU" />`;
  $("#house-div").append(babyImage);
});

$("#valentines-day-btn").on("click", () => {
  console.log("valentines day button was clicked!");
  const babyImage = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrgrHGQvSu46UUiyt2D8OJgPzxBtqcIJ-sPQ&usqp=CAU" />`;
  $("#valentines-div").append(babyImage);
});

$("#mothers-day-btn").on("click", () => {
  console.log("mothers day button was clicked!");
  const babyImage = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrgrHGQvSu46UUiyt2D8OJgPzxBtqcIJ-sPQ&usqp=CAU" />`;
  $("#mum-div").append(babyImage);
});

$("#fathers-day-btn").on("click", () => {
  console.log("Fathers day button was clicked!");
  const babyImage = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrgrHGQvSu46UUiyt2D8OJgPzxBtqcIJ-sPQ&usqp=CAU" />`;
  $("#dad-div").append(babyImage);
});

$("#call-api-btn").on("click", () => {
  console.log("Call api button was clicked!");

  const randomQuote = $.get(`https://api.quotable.io/random`, (data) => {
    console.log(data);
  });
});

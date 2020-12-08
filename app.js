console.log("app is running");

$("#call-api-btn").on("click", () => {
    console.log("Call api button was clicked!");
    // console.log("ash");
    // const movieName = $("#input-movie-box").val();
    const movieData = $.get(
      `https://api.quotable.io/random`,
      (data) => {
        console.log(data);
        
      }
    );
  });
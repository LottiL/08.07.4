$(".first").on('click', () => {
    console.log("Yeah, you clicked me")
  });

  $(".second").on('click', () => {
    $( ".first" ).text("Button")
  });

  $(".third").on('click', () => {
    $("button").css("background-color", "yellow");
  });  
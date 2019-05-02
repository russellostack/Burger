$(function () {
    $(".devour-btn").on("click", function (event) {
      var id = $(this).data("id");
      var newDevour = "true";
  
      var newDevourState = {
        devoured: newDevour
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(function () {
        location.reload();
      }
      );
    });
  
    $(".burger-adder").on("submit", function (event) {
      event.preventDefault();
  
      var newBurger = {
        name: $("#burger").val().trim(),
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function () {
          location.reload();
        }
      );
    });
  
  })
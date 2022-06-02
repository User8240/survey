$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const name = $("input#name").val();
    const flavor = $("input:radio[name=flavor]:checked").val();
    const music= $("#music").val();
    const born = $("#born").val();
    const color = $("#color").val();

    $(".name").text(name);
    $(".flavor").text(flavor);
    $(".music").text(music);
    $(".born").text(born);
    $(".color").text(color);

    $("#story").show();
    $("#hide").hide();
  });
});
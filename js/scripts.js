

var countUp = function(num, count) {

    var output = [];

    //While loop
    // var i = count;
    // while(i<=num){
    //     output.push(i);
    //     i += count;
    // }

    //For loop
    for(var i = count; i <= num; i+= count) {
        output.push(i);
    }

    //Do While loop
    // var i = count;
    // do {
    //     output.push(i);
    //     i += count;
    // } while(i <= num);

    return output;
}



$(document).ready(function() {

    $("form#countUp").submit(function(event) {
        var num = parseInt($("input#num").val());
        var count = parseInt($("input#count").val());

        var result = countUp(num, count);

        $(".output").text(result.join(", "));
        $("#result").show();
        event.preventDefault();
    });
});

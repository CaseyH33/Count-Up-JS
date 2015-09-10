var countUp = function(num, count) {

    var output = [];

    //While loop
    // var i = count;
    // while(i<=num){
    //     output.push(i);
    //     i += count;
    // }

    //For loop
    // for(var i = count; i <= num; i+= count) {
    //     output.push(i);
    // }

    //Do While loop
    var i = count;
    do {
        output.push(i);
        i += count;
        console.log(i);
    } while(i <= num);

    return output;
}



// $(document).ready(function() {
//
//     $("form#countUp").submit(function(event) {
//         var word = ($("input#word").val());
//         var result = countUp(word);
//
//         $(".answer").text(result);
//         $("#result").show();
//         event.preventDefault();
//     });
// });

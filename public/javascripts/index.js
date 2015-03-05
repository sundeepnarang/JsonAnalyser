/**
 * Created by Sundeep on 3/5/2015.
 */
$(function () {
   $("#json").submit(function(e){
       e.preventDefault();
   });
});

function send(){
    console.log("key - ",$("#key").val(),"body - ",$("#body").val());
    $.post('/parse',{key:$("#key").val(),body:$("#body").val()},function(data,status){
        console.log("\n\nParsed\ndata\n",data);
        if(status=='success'){
           $("form").remove();
           $("#analysed").remove();
           $(".container").append('<textarea class="form-control" id="analysed" rows="20">'+data+'</textarea><br><a href="/">Back</a>');
       }
    });
}
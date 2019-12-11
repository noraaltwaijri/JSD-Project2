var ajaxModule = function(){}

// Function that runs when the form is submitted
function display(){
    // q carries the input text  value
    var q = $('.form-control')[0].value
    // call to getResult function passing input value in string format
    getResult(String(q))
}
//  The main control function that 
function getResult(q){
    // Prototyping ajax function for a list of objects
    ajaxModule.prototype = {
        iterator: 1,
        timeoutClear: "",
        // Initializing the search
        init: function(request, callback) {
            var self = this;
            self.iterator++;
            request = encodeURIComponent(request.trim());
            this.callAjax(request, callback);
            $(".wrapper").html("").hide();
            $(".top-search").show();
            $(".main").hide();
            $(".loading").show(); 
        },
        // Connecting with the api and recieving the data
        callAjax: function(request) {
            var self = this;
            $.ajax({
                url: "https://pixabay.com/api/?username=mjweaver01&key=14575527-11d1fe353c639b01a445272a4&q=" + request + "&image_type=photo",
                success: function(response) {
                    self.parseResponse(response);
                },
                error: function(response) {
                    console.log(response);
                }
            })
        },
        // Display data obtained from API 
        parseResponse: function(response) {
            var self = this;
            $.each(response.hits, function(index, value) {
                $(".wrapper").prepend("<div class='gallery-item img card-type-1'" + index + "' style='width:" + value.webformatWidth + "px; height:" + value.webformatHeight + "px; background: url(" + value.webformatURL + ");'></div>");
            });
            self.timeoutClear = setTimeout(self.run, 500);
        },
        // Control HTML elements
        run: function() {
            $(".loading").hide();
            $(".main").hide();
            $(".wrapper").show();
            $(".top-search").show();
        }
      }

      // Creating the connect
      $(function() {setTimeout(new ajaxModule().init(q), 3000)})
    
}
# Happy Api

Happy API is a titanium CommonJS module that simplifies HTTP calls

## Installation

Add the file to your project.

## Example

    var API = require('happy_api').createHappyApi({timeout: 3000, endPoint: "http://elad.com/"});

    API.get("/posts", {
      params: {id: 3},
      success: function(e) {
        alert("elad")
      },
      error: function(e) {
        alert("error");
      },
      onLoading: function() {
        alert("show loading");
      }
    });

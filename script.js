$(document).ready(function () {


    var clearBtn = $("#clearBtn"); // Grabs clear button
    var searchBtn = $("#searchBtn"); // Grabs search button

    var queryURL = "https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key="; // API URL
    var apiKey = "qPBv778CLXsfbAA4nH6UkSF4BAiga0kb"; // API KEY


    var searchTerms = $("#search-terms"); // Grabs search terms
    var numberOfArticles = $("#numberOfArticles") // Grabs # of articles
    var startYear = $("#startYear") // Grabs start year
    var endYear = $("#endYear")  // Grabs end year

    searchBtn.on("click", function () {

        console.log(`Start year = ${startYear.val()} | End year = ${endYear.val()} | No. of Articles = ${numberOfArticles.val()} | Search terms = ${searchTerms.val()}`);

    })

    clearBtn.on("click", function () {
        searchTerms.val("");
        startYear.val("");
        endYear.val("");
        /* console.log(numberOfArticles.options.val()); */
    })



    $.ajax({
        url: queryURL + apiKey, // Grabs API URL from var as a value to the key "url"
        method: "GET" // Method protocol of retrieving desired data object
    }).then(function (response)) {
        var nyTimesApi = response;


        
    }));




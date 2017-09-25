$.getJSON('https://en.wikipedia.org/w/api.php?action=opensearch&search=chile&limit=10&namespace=0&format=json', function(data) {
    //data is the JSON string
    console.log(data);
});
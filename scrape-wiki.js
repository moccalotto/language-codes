// url: https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes

// just a stub to scrape via browser console.
//
// later we will use something better, like: https://scotch.io/tutorials/scraping-the-web-with-node-js
var langs = {};
$("#Table tbody tr").each(function() {
    var $this = $(this);
    var code = $this.find('td:eq(4)').text();
    langs[code] = {
        'englishName' : $this.find('td:eq(2)').text(),
        'nativeName': $this.find('td:eq(3)').text(),
        'code3' : $this.find('td:eq(5)').text()
    };
});

JSON.stringify(langs);

var request = require('request');

exports.getPrediction = function(req, res) {
    var fromStr = req.params.from;
    var toStr = req.params.to;

    var fromAirport;
    var toAirport;
    var toRegion;

    request('http://terminal2.expedia.com/suggestions/packages?maxresults=1&apikey=teGJ1Z9W3pGoQl0n5wGsAlJOXlveffWL&query='+fromStr, function (error, response, body) {
        var bodyJson = JSON.parse(body);
        fromAirport = bodyJson.sr[0].pt[0].t;
        //res.end(body);

        request('http://terminal2.expedia.com/suggestions/packages?maxresults=1&apikey=teGJ1Z9W3pGoQl0n5wGsAlJOXlveffWL&query='+toStr, function (error2, response2, body2) {
            var bodyJson2 = JSON.parse(body2);
            toAirport = bodyJson2.sr[0].pt[0].t;
            toRegion = bodyJson2.sr[0].id;
            //res.end(body);

            request('http://terminal2.expedia.com:80/packages?originAirport='+fromAirport+'&destinationAirport='+toAirport+'&departureDate=2015-03-15&returnDate=2015-03-20&regionid='+toRegion+'&limit=4&apikey=teGJ1Z9W3pGoQl0n5wGsAlJOXlveffWL', function (error3, response3, body3) {
                //var bodyJson3 = JSON.parse(body3);

                res.end(body3);
            });
        });
    });
};
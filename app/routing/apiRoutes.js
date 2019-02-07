var friendArr = require('../data/friends');

module.exports = function(app){
    
    app.get("/api/friends", function(req, res){
        res.json(friendArr);
    });

    app.post('/api/friends', function(req, res){
        friendArr.push(req.body);

        var comparisonArr = [];
        var arrTotal = 0;
        for (var i = 0; i < friendArr.length; i++) {
            var totalScoreArr = [];
            totalScoreArr.push(Number(friendArr[i].qOne), Number(friendArr[i].qTwo), Number(friendArr[i].qThree), Number(friendArr[i].qFour), Number(friendArr[i].qFive), Number(friendArr[i].qSix), Number(friendArr[i].qSeven), Number(friendArr[i].qEight), Number(friendArr[i].qNine), Number(friendArr[i].qTen), Number(friendArr[i].qEleven), Number(friendArr[i].qTwelve));
            
            var arrTotal = 0;
            totalScoreArr.forEach(function(num) {
                arrTotal += num;
                return arrTotal;
            })
            
            
            
            comparisonArr.push(arrTotal);
            
            console.log(totalScoreArr);
            console.log(arrTotal)
        }
        console.log(comparisonArr);
    })
};

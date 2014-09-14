$(function() {

stockX.globalInterval();
allStocks.recieveStocks();
});

var stockX = {
    money         : 100,
    pasMoney      : 1,
    moneyChange   : true,

    allStocks     : ['LNKD', 'ORCL', 'MSFT', 'YHOO'],
    allStocksInfo : [],


    globalInterval : function() {
        var t = 0;
        setInterval(function() {
            // #1 if
            if (stockX.money != stockX.pasMoney) {
                stockX.moneyChange = true; 
                stockX.pasMoney = stockX.money;
            }
            // #2 if
            if (stockX.moneyChange) {
                sidebar.renderMoney();
                stockX.moneyChange = false;
            }
            // #3 if stock timer
            t++;
            if (t == 100) {
                allStocks.recieveStocks();
                t = 0;
            }
            
        }, 10)
    },

    history_receiver : function(m) { 
        stockX.allStocksInfo.push(m[0][0]);
        if (stockX.allStocksInfo.length == stockX.allStocks.length) {
            allStocks.render();
        }
    },
};

PUBNUB.subscribe({
    channel : stockX.allStocks,
});
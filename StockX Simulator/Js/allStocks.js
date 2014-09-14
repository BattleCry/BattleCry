var allStocks = {
	recieveStocks : function() {
		for (i = 0; i < stockX.allStocks.length; i++) {
			PUBNUB.history({
			    limit    : 1,
			    channel  : stockX.allStocks[i],
			    callback : stockX.history_receiver
			});
		}
		
	},

	render : function() {	
		var html = '';
		console.log(stockX.allStocksInfo);
		console.log('');
		for (i = 0; i < stockX.allStocksInfo.length; i++) {
			html += '<div class="block" style="left: 0px; right: 0px; height: 30px; top: ' + (i*30) + 'px">'
			+ '			<div class="block" style="left: 0px; top: 0px; bottom: 0px; width: 50px">' + stockX.allStocksInfo[i].price + '</div>'
			+ '			<div class="block" style="left: 50px; top: 0px; bttom: 0px; width: 150px">' + stockX.allStocks[i] + '</div>'
			+ '		</div>';
		}
		$('#all-stocks').html(html);
		stockX.allStocksInfo = [];
	},
};
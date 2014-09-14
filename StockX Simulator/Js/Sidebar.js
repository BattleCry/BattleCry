var sidebar = {
	makePieGraph : function(editing, style, info) {
		var html = '';
		var total = 0;
		var curzindex = 0;
		for (i = 0; i < info.length; i++) {
			total += info[i].amount;
		}
		for (i = 0; i < info.length; i++) {

		}
		html += '<div style="position: absolute; background-color: ' + info[0].color + '; height: ' + (style.hole*2) + 'px; width: ' + (style.hole*2) + 'px; border-radius: 1000px; left: 50%; top: 50%; margin-left: -' + style.hole + 'px; margin-top: -' + style.hole + 'px; z-index: ' + curzindex + '"></div>';
		curzindex++;
		html += '<div style="position: absolute; background-color: ' + style.backgroundColor + '; height: ' + style.hole + 'px; width: ' + style.hole + 'px; border-radius: 1000px; left: 50%; top: 50%; margin-left: -' + style.hole/2 + 'px; margin-top: -' + style.hole/2 + 'px; z-index: ' + (curzindex+1) + '"></div>';
		$(editing).html(html);
		console.log(html);
		sidebar.makeStockChart(editing, style, info);
	},

	makeStockChart : function(editing, style, info) {
		var html = '';
		for (i = 0; i < info.length; i++) {
			html += '<div class="stock-chart-item" style="right: 0px; left: 0px; height: 25px; top: ' + (i*25) + 'px">'
			+ '			<div class="block" style="left: 5px; top: 3px; margin-top: 5px; width: 10px; height: 10px; background-color: '+ info[i].color + '"></div>'
			+ '			<div class="block" style="top: 4px; left: 20px; color: #7A7A7A">' + info[i].name + '</div>'
			+ '			<div class="block" style="top: 4px; right: 5px; color: #7A7A7A">' + info[i].amount + '</div>'
			+ '		</div>';
		}
		$('#stocks-chart').html(html);
		console.log(html);
		sidebar.renderMoney();
	},

	renderMoney : function() {
		$('#money').html(stockX.money);
	},
};
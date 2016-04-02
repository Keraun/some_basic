var event = {
	clientList: [], //订阅数据池
	listen: function(key, fn) {
		if (!this.clientList[key]) {
			this.clientList[key] = [];
		}
		//订阅的消息添加进缓存列表
		this.clientList[key].push(fn);
	},
	triggle: function() {
		//拿取函数参数
		var key = Array.prototype.shift.call(arguments);
		//拿取订阅的信息
		fns = this.clientList[key];

		//如果没有绑定对应的消息则结束
		if (!fns || fns.length === 0) {
			return false;
		}
		//arguments 是trigger时带上的参数。
		for (var i = 0, fn; fn = fns[i++]) {
			fn.apply(this, arguments);
		}
	}
};

//取消订阅
event.remove = function(key, fn) {
	var fns = this.clientList[key];

	if(!fns) { //如果key对应的消息没有被人订阅，则直接返回
		return false;
	}
	if(!fn) { //如果没有传入具体的回调函数，表示需要取消key对应消息的所有订阅
		fns && (fns.length = 0);
	}else {
		for(var l = fns.length - 1; l> =0;l--) { // 反向遍历订阅的回调函数列表
			var _fn = fns[l];
			if(_fn === fn) {
				fns.splice(l,1); //  删除订阅者的回调函数
			}
		}
	}
}

//定义installEvent函数，这个函数可以给所有的对象都动态安装发布－订阅功能。
var installEvent = function(obj) {
	for (var i in event) {
		obj[i] = event[i];
	}
};

//------------------------------------------
//使用方法。

var salesOffices = {};
installEvent(salesOffices);


salesOffices.listen('test1', function(price) {
	console.log(price);
});

salesOffices.listen('tes2', function(price) {
	console.log(price);
});

salesOffices.triggle('test1', 20000);
salesOffices.triggle('test2', 30000);
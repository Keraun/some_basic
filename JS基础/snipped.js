//验证手机号码
!/^1[0-9]\d{9}$/.test(data);
//验证电话号码(数字)
!/^[0-9\-]+$/.test(data);
//验证邮编
!/^\d{6}$/.test(data);
//检查文件类型
!/.[xls|xlsx]$/.test(upFile)
//jquery上传文件
$.ajax({
	url: 'customTrade/uploadTrade.rjson',
	type: 'POST',
	data: formData,
	contentType: false,
	processData: false,
	dataType: "json",
	success: function(returndata) {
		if (returndata.result == 1) {
			$.alert(returndata.message);
			that.pages.pagesModify({
				_t: new Date().getTime()
			}, false, false);
		} else {
			rc.showFail(returndata.message || "上传失败，稍后重试！");
		}
	},
	error: function(returndata) {
		rc.showFail(returndata.message || "上传失败，稍后重试！");
	}
});

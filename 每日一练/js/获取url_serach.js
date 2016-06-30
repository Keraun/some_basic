//请写出一个方法， 用于获取以下url中的参数值
var url = 'http://xxx.com?a=1&b=2';
//参考答案
function parseParam(url) {
    var a = document.createElement('a');
    a.href = url;
    var param = a.search,
        tmp = {};
    if (!param) return tmp;
    var paramArr = param.slice(1).split('&');
    paramArr.forEach(function(item) {
        var match = item.split('='),
            key = match[0],
            value = decodeURIComponent(match[1] || '');
        tmp[key] = value;
    });
    return tmp;
}

//---------------------------
//获取URL后面参数
function getUrlSearch(url) {
    var result = {},
        paramsArr;
    var targetA = document.createElement('a');
    targetA.href = url;
    tempArr = targetA.search;
    if (!tempArr) return result;
    try {
        paramsArr = decodeURI(tempArr).slice(1).split('&');
    } catch (e) {
        console.warn('url解析失败', e);
    }
    paramsArr.forEach(function(item, index) {
        var match = item.split('='),
            key = match[0],
            value = match[1] || '';

        result[key] = value;
    });
    return result;
}
//测试用例
var url = [
    'http://www.baidu.com',
    'www.baidu.com?code= &spm=190.10.10.0',
    '?code=0&spm=192.10.10.1',
    'http://www.baidu.com?code=1&spm=191.10.10.2',
    'http://www.baidu.com?code=3&spm=192.10.10.3#/module',
    ''
];

url.forEach(function(val, index) {
    val = encodeURI(val);
    console.log(getUrlSearch(val));
});
//输出
/*
{}
{ code: ' ', spm: '190.10.10.0' }
{ code: '0', spm: '192.10.10.1' }
{ code: '1', spm: '191.10.10.2' }
{ code: '2', spm: '192.10.10.3' }
{}
 */

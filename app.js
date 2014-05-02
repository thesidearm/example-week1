/**
 * @JSXIM hw1
 *  Js練習
 * @B00705033 陳秋中
 * @version 2014/04/27
 */

var http = require("http");
//開http用變數 並載入模組
var request = require("request");
//開request用變數 並載入模組
var url = "http://graph.facebook.com/GameOfThrones/photos?type=uploaded";
var port = 1337;

http.createServer(function (req, res){
 
    res.writeHeader(200, {"Content-Type": "text/html"});
    
    var data ="<html><head><style>table,th,td{border:5px solid black}</style></head><body><table style='width:850px'>";
    //style中建立表格
    
    request.get(url, function(err, body, result){
    result = JSON.parse(result);    //因為JSON是global所以不需載入
	  result.data.forEach(function(val, idx){	
	 	
        data += "<tr><td>><img src='" + val.images[2].source + "'width='600'/></td>";
	      data += "<td><Font color='181789'size='6'face='微軟正黑體'><p>" + val.name + "</p></Font></td></tr>";
    });

    data += "</body><html>";
    res.end(data); //回應在網頁端
    
    });
    
}).listen(port);

console.log("server create: " + port);

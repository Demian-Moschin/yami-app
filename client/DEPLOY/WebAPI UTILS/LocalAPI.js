var $ = require('jquery');

var API = function () {
	this.url = './db/data.json'
};//object API constructor

API.prototype = {
    getArticlesFromFile: function (callback) {
        $.ajax({
            url: this.url, 
            dataType: 'json',
            success: function (data) {
                console.log(data);
                callback(JSON.parse(data));
            }, //success

            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert(url + "Errors, trying to get realms" + errorThrown + textStatus);
            }//error
        })//jQuery.ajax
    }
} ;

module.exports = new API;//we make it singleton

//NOTA: En este caso, nuestro action creator va a contener un 
//metodo que va a llegar como callback en este singleton. 
//De esta manera, luego va a llegar al store que se requiera. 
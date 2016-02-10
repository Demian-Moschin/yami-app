var $ = require('jquery');

var API = function () {
	this.url = 'http://localhost:3000/api/students'
};//object API constructor

API.prototype = {
    getArticlesFromFile: function (callback) {
        $.ajax({
            url: this.url,
            dataType: 'json',
            success: function (data) {
              callback(data);
            }, //success

            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(this.url + "Errors, trying to get realms" + errorThrown + textStatus);
            }//error
        })//jQuery.ajax
    }
};

module.exports = new API;//we make it singleton

//NOTA: En este caso, nuestro action creator va a contener un
//metodo que va a llegar como callback en este singleton.
//De esta manera, luego va a llegar al store que se requiera.

var $ = require('jquery');

var API = function () {
  this.userName=   'DHM-USER';
    this.password = 'DHM-USER01';
    this.location = 'locale=en_US';
    this.key = 'mtu95u6w5zus93b2ssxjd9bmq8hnr5sr';
    this.genericURL= 'https://us.api.battle.net/wow/';
};

API.prototype = {
    getCharacterProfile: function (realm, characterName, callback) {
        var functionName = 'realm/status?/';
        $.ajax({
            url: this.genericURL + functionName + this.location + '&apikey=' + this.key,
            dataType: 'json',
            data: {
                realm: realm,
                characterName: characterName
            },

            success: function (data) {
                console.log(data);
                callback(data);
            }, //success

            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert(url + "Errors, trying to get realms" + errorThrown + textStatus);
            }//error
        })//jQuery.ajax
    },

    getRealm: function (callback) {
      var functionName = 'realm/status?/';
        $.ajax({
            url:this.genericURL + functionName + this.location +'&apikey=' + this.key,
            dataType:'json',

            success: function(data) {
              callback(data.realms);
            }, //success

            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert(url +  "Errors, trying to get realms" + errorThrown + textStatus );
            }//error
        })//jQuery.ajax
    }

} ;

module.exports = new API;

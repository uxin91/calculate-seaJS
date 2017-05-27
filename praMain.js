/**
 * Created by Administrator on 2017/5/27.
 */
define(function(require,exports,module){
    exports.show = function(){
        console.log('success');
    }
    var Calculate = require('./praCal.js');
    var cal = new Calculate('container');
    cal.init();



})

/**
 * Created by Administrator on 2017/5/27.
 */
define(function(require,exports,module){

    function Calculate(cId){
        this.container = document.getElementById(cId);
        this.btn = this.container.getElementsByTagName('input')[2];
        this.top = this.container.getElementsByTagName('input')[0];
        this.res = this.container.getElementsByTagName('input')[1];
        this.sele = this.container.getElementsByTagName('select')[0];
        this.d = this.container.getElementsByTagName('div')[0];

    }
    module.exports = Calculate;
    Calculate.prototype.init = function(){
        console.log(this);
        var that = this;
        this.btn.onclick=  function(){
            var a = that.top.value;
            var b = that.res.value;
            var sele = that.sele.value;
            var result = 0;
            switch(parseInt(sele)){
                case 1:
                    result =  that.sum(a,b);
                    break;
                case 2:
                    result = that.min(a,b);
                    break;
                case 3:
                    result = that.cheng(a,b);
                    break;
                case 4:
                    result = that.chu(a,b);
                    break;
            }
            that.d.innerHTML = result;
        }

    }
    
    Calculate.prototype.sum = function(a,b){
        return parseInt(a)+parseInt(b);
    }
    Calculate.prototype.min = function(a,b){
        return parseInt(a)-parseInt(b);
    }
    Calculate.prototype.cheng = function(a,b){
        return parseInt(a)*parseInt(b);
    }
    Calculate.prototype.chu = function(a,b){
        return parseInt(a)/parseInt(b);
    }


})

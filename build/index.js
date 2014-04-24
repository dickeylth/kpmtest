/*
combined files : 

gallery/kpmtest/src/index

*/
/**
 * @fileoverview 
 * @author 弘树<tiehang.lth@alibaba-inc.com>
 * @module kpmtest
 **/
KISSY.add('gallery/kpmtest/src/index',function (S, Node,Base) {
    var EMPTY = '';
    var $ = Node.all;

    var updated = '1122';

    var lastUpdated = '2014-04-24 18:43:08';

    /**
     * 
     * @class Kpmtest
     * @constructor
     * @extends Base
     */
    function Kpmtest(comConfig) {
        var self = this;
        //调用父类构造函数
        Kpmtest.superclass.constructor.call(self, comConfig);
    }
    S.extend(Kpmtest, Base, /** @lends Kpmtest.prototype*/{
        
        init: function(){
            var self = this;
            alert('init');
            console.log(12345);
        }        

    }, {ATTRS : /** @lends Kpmtest*/{

    }});
    return Kpmtest;
}, {requires:['node', 'base']});




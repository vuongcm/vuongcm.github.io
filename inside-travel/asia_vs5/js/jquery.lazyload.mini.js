!function(e){e.fn.lazyload=function(t){var o={threshold:0,failurelimit:0,event:"scroll",effect:"show",container:window};t&&e.extend(o,t);var r=this;return"scroll"==o.event&&e(o.container).bind("scroll",function(t){var n=0;r.each(function(){if(e.abovethetop(this,o)||e.leftofbegin(this,o));else if(e.belowthefold(this,o)||e.rightoffold(this,o)){if(n++>o.failurelimit)return!1}else e(this).trigger("appear")});var i=e.grep(r,function(e){return!e.loaded});r=e(i)}),this.each(function(){var t=this;void 0==e(t).attr("original")&&e(t).attr("original",e(t).attr("src")),"scroll"!=o.event||void 0==e(t).attr("src")||o.placeholder==e(t).attr("src")||e.abovethetop(t,o)||e.leftofbegin(t,o)||e.belowthefold(t,o)||e.rightoffold(t,o)?(o.placeholder?e(t).attr("src",o.placeholder):e(t).removeAttr("src"),t.loaded=!1):t.loaded=!0,e(t).one("appear",function(){this.loaded||e("<img />").bind("load",function(){e(t).hide().attr("src",e(t).attr("original"))[o.effect](o.effectspeed),t.loaded=!0}).attr("src",e(t).attr("original"))}),"scroll"!=o.event&&e(t).bind(o.event,function(o){t.loaded||e(t).trigger("appear")})}),e(o.container).trigger(o.event),this},e.belowthefold=function(t,o){if(void 0===o.container||o.container===window)var r=e(window).height()+e(window).scrollTop();else var r=e(o.container).offset().top+e(o.container).height();return r<=e(t).offset().top-o.threshold},e.rightoffold=function(t,o){if(void 0===o.container||o.container===window)var r=e(window).width()+e(window).scrollLeft();else var r=e(o.container).offset().left+e(o.container).width();return r<=e(t).offset().left-o.threshold},e.abovethetop=function(t,o){if(void 0===o.container||o.container===window)var r=e(window).scrollTop();else var r=e(o.container).offset().top;return r>=e(t).offset().top+o.threshold+e(t).height()},e.leftofbegin=function(t,o){if(void 0===o.container||o.container===window)var r=e(window).scrollLeft();else var r=e(o.container).offset().left;return r>=e(t).offset().left+o.threshold+e(t).width()},e.extend(e.expr[":"],{"below-the-fold":"$.belowthefold(a, {threshold : 0, container: window})","above-the-fold":"!$.belowthefold(a, {threshold : 0, container: window})","right-of-fold":"$.rightoffold(a, {threshold : 0, container: window})","left-of-fold":"!$.rightoffold(a, {threshold : 0, container: window})"})}(jQuery);
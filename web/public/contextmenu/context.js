/* 
 * Context.js
 * Copyright Jacob Kelley
 * MIT License
 */
var incrementingNumber = 1;
function getUniqueIncrementingNumber() {
	incrementingNumber++;
	return incrementingNumber;
}
var context = context || (function () {
    
	var options = {
		fadeSpeed: 100,
		filter: function ($obj) {
			// Modify $obj, Do not return
		},
		above: 'auto',
		preventDoubleContext: true,
		compress: false
	};

	function initialize(opts) {
		console.warn("initialize");
		options = $.extend({}, options, opts);
		
		$(document).on('click', 'html', function () {
            console.warn("onclick");
			$('.dropdown-context').fadeOut(options.fadeSpeed, function(){
				$('.dropdown-context').css({display:''}).find('.drop-left').removeClass('drop-left');
			});
		});
		if(options.preventDoubleContext){
			$(document).on('contextmenu', '.dropdown-context', function (e) {
				e.preventDefault();
			});
		}
		$(document).on('mouseenter', '.dropdown-submenu', function(){
            console.warn("thing");
			var $sub = $(this).find('.dropdown-context-sub:first'),
				subWidth = $sub.width(),
				subLeft = $sub.offset().left,
				collision = (subWidth+subLeft) > window.innerWidth;
			console.warn("collision detection, height " + $sub.height());
			let subHeight = $sub.height();
			let subUp = $sub.offset().top;
			let verticalCollision = (subHeight + subUp) > window.innerHeight - 50;
			let difference = (subHeight + subUp) - (window.innerHeight - 50);
			if (difference > subHeight) {
				difference = subHeight;
			}
			if(collision){
				$sub.css({
					left: - subWidth
				});
				console.warn("horizontal collision detected");
			}
			if (verticalCollision) {
                console.warn("vertical collision detected");
                $sub.addClass('dropdown-context-up');
                $sub.css({
					top: -difference
				});
			} else {
                console.warn("vertical collision removed");
                $sub.removeClass('dropdown-context-up');
			}
		});
		
	}

	function updateOptions(opts){
		console.warn("updateOptions");
		options = $.extend({}, options, opts);
	}

	function buildMenu(data, id, subMenu) {
		console.warn("buildMenu");
		var subClass = (subMenu) ? ' dropdown-context-sub' : '',
			compressed = options.compress ? ' compressed-context' : '',
			$menu = $('<ul class="dropdown-menu dropdown-context' + subClass + compressed+'" id="dropdown-' + id + '"></ul>');
        var i = 0, linkTarget = '';
        for(i; i<data.length; i++) {
        	if (typeof data[i].divider !== 'undefined') {
				$menu.append('<li class="divider"></li>');
			} else if (typeof data[i].header !== 'undefined') {
				$menu.append('<li class="nav-header">' + data[i].header + '</li>');
			} else {
				if (typeof data[i].href == 'undefined') {
					data[i].href = '#';
				}
				if (typeof data[i].target !== 'undefined') {
					linkTarget = ' target="'+data[i].target+'"';
				}
				if (typeof data[i].subMenu !== 'undefined') {
					$sub = ('<li class="dropdown-submenu"><a tabindex="-1" href="' + data[i].href + '">' + data[i].text + '</a></li>');
				} else {
					$sub = $('<li><a tabindex="-1" href="' + data[i].href + '"'+linkTarget+'>' + data[i].text + '</a></li>');
				}
				if (typeof data[i].action !== 'undefined') {
					var actiond = new Date(),
						actionID = 'event-' + actiond.getTime() * Math.floor(Math.random()*100000),
						eventAction = data[i].action;
					$sub.find('a').attr('id', actionID);
					$('#' + actionID).addClass('context-event');
					$(document).on('click.contextjs', '#' + actionID, eventAction);
				}
				$menu.append($sub);
				if (typeof data[i].subMenu != 'undefined') {
					var subMenuData = buildMenu(data[i].subMenu, id, true);
					$menu.find('li:last').append(subMenuData);
				}
			}
			if (typeof options.filter == 'function') {
				options.filter($menu.find('li:last'));
			}
		}
		return $menu;
	}

	function addContext(selector, data) {
        console.warn("addcontext");
		
		var d = new Date(),
			id = d.getTime() + getUniqueIncrementingNumber(),
			$menu = buildMenu(data, id);
			
		$('body').append($menu);
		
		
		$(document).on('contextmenu', selector, function (e) {
			e.preventDefault();
			e.stopPropagation();
			
			$('.dropdown-context:not(.dropdown-context-sub)').hide();
			
			$dd = $('#dropdown-' + id);
			if (typeof options.above == 'boolean' && options.above) {
				$dd.addClass('dropdown-context-up').css({
					top: e.pageY - 20 - $('#dropdown-' + id).height(),
					left: e.pageX - 13
				}).fadeIn(options.fadeSpeed);
			} else if (typeof options.above == 'string' && options.above == 'auto') {
				$dd.removeClass('dropdown-context-up');
				var autoH = $dd.height() + 12;
				if ((e.pageY + autoH) > $('html').height()) {
					$dd.addClass('dropdown-context-up').css({
						top: e.pageY - 20 - autoH,
						left: e.pageX - 13
					}).fadeIn(options.fadeSpeed);
				} else {
					$dd.css({
						top: e.pageY + 10,
						left: e.pageX - 13
					}).fadeIn(options.fadeSpeed);
				}
			}
		});
	}
	
	function destroyContext(selector) {
        console.warn("destroycontext");
		$(document).off('contextmenu', selector).off('click', '.context-event');
	}
	function unattachAllClicks() {
        console.warn("unattaching");
        $(document).off('click.contextjs');
    }
	
	return {
		init: initialize,
		settings: updateOptions,
		attach: addContext,
		unattachAllClicks: unattachAllClicks,
		destroy: destroyContext
	};
})();
/**
 * This jQuery plugin displays pagination links inside the selected elements.
 * 
 * This plugin needs at least jQuery 1.4.2
 *
 * @author Gabriel Birke (birke *at* d-scribe *dot* de)
 * @version 2.2
 * @param {int} maxentries Number of entries to paginate
 * @param {Object} opts Several options (see README for documentation)
 * @return {Object} jQuery Object
 */
(function($) {
	/**
	 * @class Class for calculating pagination values
	 */
	$.PaginationCalculator = function(maxentries, opts) {
		this.maxentries = maxentries;
		this.opts = opts;
	}

	$.extend($.PaginationCalculator.prototype, {
		/**
		 * Calculate the maximum number of pages
		 * @method
		 * @returns {Number}
		 */
		numPages: function() {
			return Math.ceil(this.maxentries / this.opts.items_per_page);
		},
		/**
		 * Calculate start and end point of pagination links depending on 
		 * current_page and num_display_entries.
		 * @returns {Array}
		 */
		getInterval: function(current_page) {
			var ne_half = Math.floor(this.opts.num_display_entries / 2);
			var np = this.numPages();
			var upper_limit = np - this.opts.num_display_entries;
			var start = current_page > ne_half ? Math.max(Math.min(current_page - ne_half, upper_limit), 0) : 0;
			var end = current_page > ne_half ? Math.min(current_page + ne_half + (this.opts.num_display_entries % 2), np) : Math.min(this.opts.num_display_entries, np);
			return {
				start: start,
				end: end
			};
		}
	});

	// Initialize jQuery object container for pagination renderers
	$.PaginationRenderers = {}

	/**
	 * @class Default renderer for rendering pagination links
	 */
	$.PaginationRenderers.defaultRenderer = function(maxentries, opts) {
		this.maxentries = maxentries;
		this.opts = opts;
		this.pc = new $.PaginationCalculator(maxentries, opts);
	}
	$.extend($.PaginationRenderers.defaultRenderer.prototype, {
		/**
		 * Helper function for generating a single link (or a span tag if it's the current page)
		 * @param {Number} page_id The page id for the new item
		 * @param {Number} current_page 
		 * @param {Object} appendopts Options for the new item: text and classes
		 * @returns {jQuery} jQuery object containing the link
		 */
		createLink: function(page_id, current_page, appendopts) {
			var lnk, np = this.pc.numPages();
			page_id = page_id < 0 ? 0 : (page_id < np ? page_id : np - 1); // Normalize page id to sane value
			appendopts = $.extend({
				text: page_id + 1,
				classes: ""
			}, appendopts || {});
			if(page_id == current_page) {
				lnk = $("<a class='current'>" + appendopts.text + "</a>");
			} else {
				lnk = $("<a>" + appendopts.text + "</a>")
					//.attr('href', this.opts.link_to.replace(/__id__/,page_id));
			}
			if(appendopts.classes) {
				lnk.addClass(appendopts.classes);
			}
			lnk.data('page_id', page_id);
			return lnk;
		},
		// Generate a range of numeric links 
		appendRange: function(container, current_page, start, end, opts) {
			var i;
			for(i = start; i < end; i++) {
				this.createLink(i, current_page, opts).appendTo(container);
			}
		},
		getLinks: function(current_page, eventHandler) {
			var begin, end,
				interval = this.pc.getInterval(current_page),
				np = this.pc.numPages(),
				fragment = $("<div class='pagination'></div>");

			// Generate "Previous"-Link
			if(this.opts.prev_text && (current_page > 0 || this.opts.prev_show_always)) {
				fragment.append(this.createLink(current_page - 1, current_page, {
					text: this.opts.prev_text,
					classes: "prev"
				}));
			}
			// Generate starting points
			if(interval.start > 0 && this.opts.num_edge_entries > 0) {
				end = Math.min(this.opts.num_edge_entries, interval.start);
				this.appendRange(fragment, current_page, 0, end, {
					classes: 'sp'
				});
				if(this.opts.num_edge_entries < interval.start && this.opts.ellipse_text) {
					$("<span class='pagination-break'>" + this.opts.ellipse_text + "</span>").appendTo(fragment);
				}
			}
			// Generate interval links
			this.appendRange(fragment, current_page, interval.start, interval.end);
			// Generate ending points
			if(interval.end < np && this.opts.num_edge_entries > 0) {
				if(np - this.opts.num_edge_entries > interval.end && this.opts.ellipse_text) {
					$("<span class='pagination-break'>" + this.opts.ellipse_text + "</span>").appendTo(fragment);
				}
				begin = Math.max(np - this.opts.num_edge_entries, interval.end);
				this.appendRange(fragment, current_page, begin, np, {
					classes: 'ep'
				});

			}
			// Generate "Next"-Link
			if(this.opts.next_text && (current_page < np - 1 || this.opts.next_show_always)) {
				fragment.append(this.createLink(current_page + 1, current_page, {
					text: this.opts.next_text,
					classes: "next"
				}));
			}
			$('a', fragment).click(eventHandler);
			return fragment;
		}
	});

	// Extend jQuery
	$.fn.pagination = function(maxentries, opts) {
			// Initialize options with default values
			$.getUrlParam = function(name){
				var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
				var r = window.location.search.substr(1).match(reg);
				if (r!=null) return unescape(r[2]); return null;
			}
			if($.getUrlParam("page") != "" && $.getUrlParam("page") != null){
				opts = $.extend({
					items_per_page: 1,
					num_display_entries: 5,
					current_page: parseInt($.getUrlParam("page")) - 1,
					num_edge_entries: 1,
					link_to: "#",
					prev_text: "<i></i>",
					next_text: "<i></i>",
					ellipse_text: "...",
					prev_show_always: false,
					next_show_always: false,
					renderer: "defaultRenderer",
					show_if_single_page: true,
					load_first_page: false,
					callback: function() {
						return false;
					}
				}, opts || {});
			}else{
				opts = $.extend({
					items_per_page: 1,
					num_display_entries: 5,
					current_page: 0,
					num_edge_entries: 1,
					link_to: "#",
					prev_text: "<i></i>",
					next_text: "<i></i>",
					ellipse_text: "...",
					prev_show_always: false,
					next_show_always: false,
					renderer: "defaultRenderer",
					show_if_single_page: true,
					load_first_page: false,
					callback: function() {
						return false;
					}
				}, opts || {});
			}
			

			var containers = this,
				renderer, links, current_page;
			//goto
			$(".page-btn").unbind("click");
			$(".page-btn").on("click", function() {
				var allPage = $(".allPage").text();
				//console.log(allPage);
				var goPage = $(".page-go input").val() - 1; //跳转页数
				if($(".page-go input").val()==""||$(".page-go input").val()==0){
					return false;
				}
//				if(goPage == -1) {
//					goPage = 0;
//				}
				if(goPage > -1 && goPage < allPage) {
					opts.current_page = goPage;
					$("#Pagination").pagination(allPage, opts);
					$("#Paginations").pagination(allPage, opts);
					selectPage(goPage);
					$("body, html").scrollTop(0);
				} else {
//					$("#Pagination").pagination(allPage, opts);
//					if($(".pages #Paginations"))
//					$("#Paginations").pagination(allPage, opts);
					return false;
				}
				//清空用户跳转页数
				$(".page-go input").val("");
			});

			/**
			 * This is the event handling function for the pagination links. 
			 * @param {int} page_id The new page number
			 */
			function paginationClickHandler(evt) {
				if($(evt.target).data('page_id') == undefined){
					if($(evt.target).parent().hasClass("prev") == true){
						$("body, html").scrollTop(0);
						if($(".pages #Paginations").css("display") == "block"){
							var links,
								new_current_page = parseInt($("#Paginations .pagination .current").text())-2,
								continuePropagation = selectPage(new_current_page);
							if(!continuePropagation) {
								evt.stopPropagation();
							}
						}else{
							var links,
								new_current_page = parseInt($("#Pagination .pagination .current").text())-2,
								continuePropagation = selectPage(new_current_page);
							if(!continuePropagation) {
								evt.stopPropagation();
							}
						}
						return continuePropagation;
					}else{
						$("body, html").scrollTop(0);
						var links,
							new_current_page = parseInt($("#Pagination .pagination .current").text()),
							continuePropagation = selectPage(new_current_page);
						if(!continuePropagation) {
							evt.stopPropagation();
						}
						return continuePropagation;
					}
				}else{
					$("body, html").scrollTop(0);
					var links,
						new_current_page = $(evt.target).data('page_id'),
						continuePropagation = selectPage(new_current_page);
					if(!continuePropagation) {
						evt.stopPropagation();
					}
					return continuePropagation;
				}

			}

			/**
			 * This is a utility function for the internal event handlers. 
			 * It sets the new current page on the pagination container objects, 
			 * generates a new HTMl fragment for the pagination links and calls
			 * the callback function.
			 */
			function selectPage(new_current_page) {
				// update the link display of a all containers
				containers.data('current_page', new_current_page);
				links = renderer.getLinks(new_current_page, paginationClickHandler);
				containers.empty();
				links.appendTo(containers);
				// call the callback and propagate the event if it does not return false
				var continuePropagation = opts.callback(new_current_page, containers);
				$("#Pagination .pagination a:not([class='current']):not([class='next']):not([class='prev'])").hover(function() {
					$(this).css({
						"color": "#fff",
						"border": "none",
						"background-color": "#2cb82c"
					});
				}, function() {
					$(this).css({
						"color": "#999",
						"border": "1px solid #dddddd",
						"background-color": "#fff"
					});
				});
				$(".pages #Pagination .pagination .prev").hover(function() {
					$(this).css("border", "1px solid #2cb82c");
					$(this).find("i").css("background-image", "url('/web/images/personcenter/page_left_hover.png')");
				}, function() {
					$(this).css("border", "1px solid #e6e6e6");
					$(this).find("i").css("background-image", "url('/web/images/personcenter/page_left_normal.png')");
				});

				$(".pages #Pagination .pagination .next").hover(function() {
					$(this).css("border", "1px solid #2cb82c");
					$(this).find("i").css("background-image", "url('/web/images/personcenter/page_right_hover.png')");
				}, function() {
					$(this).css("border", "1px solid #e6e6e6");
					$(this).find("i").css("background-image", "url('/web/images/personcenter/page_right_normal.png')");
				});
				$(".pages  .page-btn").hover(function() {
					$(this).css("border", "1px solid #2cb82c");				
				}, function() {
					$(this).css("border", "1px solid #e6e6e6");
				});
				return continuePropagation;
			}

			// -----------------------------------
			// Initialize containers
			// -----------------------------------
			current_page = parseInt(opts.current_page);
			containers.data('current_page', current_page);
			// Create a sane value for maxentries and items_per_page
			maxentries = (!maxentries || maxentries < 0) ? 1 : maxentries;
			opts.items_per_page = (!opts.items_per_page || opts.items_per_page < 0) ? 1 : opts.items_per_page;

			if(!$.PaginationRenderers[opts.renderer]) {
				throw new ReferenceError("Pagination renderer '" + opts.renderer + "' was not found in jQuery.PaginationRenderers object.");
			}
			renderer = new $.PaginationRenderers[opts.renderer](maxentries, opts);

			// Attach control events to the DOM elements
			var pc = new $.PaginationCalculator(maxentries, opts);
			var np = pc.numPages();
			containers.bind('setPage', {
				numPages: np
			}, function(evt, page_id) {
				if(page_id >= 0 && page_id < evt.data.numPages) {
					selectPage(page_id);
					$("#Pagination .pagination a:not([class='current']):not([class='next']):not([class='prev'])").hover(function() {
						$(this).css({
							"color": "#fff",
							"border": "none",
							"background-color": "#2cb82c"
						});
					}, function() {
						$(this).css({
							"color": "#999",
							"border": "1px solid #dddddd",
							"background-color": "#fff"
						});
					});
					$(".pages #Pagination .pagination .prev").hover(function() {
						$(this).css("border", "1px solid #2cb82c");
						$(this).find("i").css("background-image", "url('/web/images/personcenter/page_left_hover.png')");
					}, function() {
						$(this).css("border", "1px solid #e6e6e6");
						$(this).find("i").css("background-image", "url('/web/images/personcenter/page_left_normal.png')");
					});

					$(".pages #Pagination .pagination .next").hover(function() {
						$(this).css("border", "1px solid #2cb82c");
						$(this).find("i").css("background-image", "url('/web/images/personcenter/page_right_hover.png')");
					}, function() {
						$(this).css("border", "1px solid #e6e6e6");
						$(this).find("i").css("background-image", "url('/web/images/personcenter/page_right_normal.png')");
					});
					$(".pages  .page-btn").hover(function() {
						$(this).css("border", "1px solid #2cb82c");				
					}, function() {
						$(this).css("border", "1px solid #e6e6e6");
					});
					return false;
				}
			});
			containers.bind('prevPage', function(evt) {
				var current_page = $(this).data('current_page');
				if(current_page > 0) {
					selectPage(current_page - 1);
				}
				$("#Pagination .pagination a:not([class='current']):not([class='next']):not([class='prev'])").hover(function() {
					$(this).css({
						"color": "#fff",
						"border": "none",
						"background-color": "#2cb82c"
					});
				}, function() {
					$(this).css({
						"color": "#999",
						"border": "1px solid #dddddd",
						"background-color": "#fff"
					});
				});
				$(".pages #Pagination .pagination .prev").hover(function() {
					$(this).css("border", "1px solid #2cb82c");
					$(this).find("i").css("background-image", "url('/web/images/personcenter/page_left_hover.png')");
				}, function() {
					$(this).css("border", "1px solid #e6e6e6");
					$(this).find("i").css("background-image", "url('/web/images/personcenter/page_left_normal.png')");
				});

				$(".pages #Pagination .pagination .next").hover(function() {
					$(this).css("border", "1px solid #2cb82c");
					$(this).find("i").css("background-image", "url('/web/images/personcenter/page_right_hover.png')");
				}, function() {
					$(this).css("border", "1px solid #e6e6e6");
					$(this).find("i").css("background-image", "url('/web/images/personcenter/page_right_normal.png')");
				});
				$(".pages  .page-btn").hover(function() {
					$(this).css("border", "1px solid #2cb82c");				
				}, function() {
					$(this).css("border", "1px solid #e6e6e6");
				});
				return false;
			});
			containers.bind('nextPage', {
				numPages: np
			}, function(evt) {
				var current_page = $(this).data('current_page');
				if(current_page < evt.data.numPages - 1) {
					selectPage(current_page + 1);
				}
				$("#Pagination .pagination a:not([class='current']):not([class='next']):not([class='prev'])").hover(function() {
					$(this).css({
						"color": "#fff",
						"border": "none",
						"background-color": "#2cb82c"
					});
				}, function() {
					$(this).css({
						"color": "#999",
						"border": "1px solid #dddddd",
						"background-color": "#fff"
					});
				});
				$(".pages #Pagination .pagination .prev").hover(function() {
					$(this).css("border", "1px solid #2cb82c");
					$(this).find("i").css("background-image", "url('/web/images/personcenter/page_left_hover.png')");
				}, function() {
					$(this).css("border", "1px solid #e6e6e6");
					$(this).find("i").css("background-image", "url('/web/images/personcenter/page_left_normal.png')");
				});

				$(".pages #Pagination .pagination .next").hover(function() {
					$(this).css("border", "1px solid #2cb82c");
					$(this).find("i").css("background-image", "url('/web/images/personcenter/page_right_hover.png')");
				}, function() {
					$(this).css("border", "1px solid #e6e6e6");
					$(this).find("i").css("background-image", "url('/web/images/personcenter/page_right_normal.png')");
				});
				$(".pages  .page-btn").hover(function() {
					$(this).css("border", "1px solid #2cb82c");				
				}, function() {
					$(this).css("border", "1px solid #e6e6e6");
				});
				return false;
			});

			// When all initialisation is done, draw the links
			links = renderer.getLinks(current_page, paginationClickHandler);
			containers.empty();
			if(np > 1 || opts.show_if_single_page) {
				links.appendTo(containers);
			}
			// call callback function
			if(opts.load_first_page) {
				opts.callback(current_page, containers);
			}
			$("#Pagination .pagination a:not([class='current']):not([class='next']):not([class='prev'])").hover(function() {
				$(this).css({
					"color": "#fff",
					"border": "none",
					"background-color": "#2cb82c"
				});
			}, function() {
				$(this).css({
					"color": "#999",
					"border": "1px solid #dddddd",
					"background-color": "#fff"
				});
			});
			$(".pages #Pagination .pagination .prev").hover(function() {
				$(this).css("border", "1px solid #2cb82c");
				$(this).find("i").css("background-image", "url('/web/images/personcenter/page_left_hover.png')");
			}, function() {
				$(this).css("border", "1px solid #e6e6e6");
				$(this).find("i").css("background-image", "url('/web/images/personcenter/page_left_normal.png')");
			});

			$(".pages #Pagination .pagination .next").hover(function() {
				$(this).css("border", "1px solid #2cb82c");
				$(this).find("i").css("background-image", "url('/web/images/personcenter/page_right_hover.png')");
			}, function() {
				$(this).css("border", "1px solid #e6e6e6");
				$(this).find("i").css("background-image", "url('/web/images/personcenter/page_right_normal.png')");
			});
			$(".pages  .page-btn").hover(function() {
					$(this).css("border", "1px solid #2cb82c");				
				}, function() {
					$(this).css("border", "1px solid #e6e6e6");
				});
		} // End of $.fn.pagination block

})(jQuery);
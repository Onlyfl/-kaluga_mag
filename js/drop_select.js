		function DropDown(el) {
				this.dd = el;
				this.placeholder = this.dd.children('span');
				this.opts = this.dd.find('ul.dropdown > li > a');
				this.opts2 = this.dd.find('ul.dropdown > li > em');
				this.opts3 = this.dd.find('ul.dropdown > li > textarea');
				this.val = '';
				this.index = -1;
				this.initEvents();
			}
			DropDown.prototype = {
				initEvents : function() {
					var obj = this;

					obj.dd.on('click', function(event){
						$(this).addClass('active');
						return false;
					});

					obj.opts.on('click',function(){
						var opt = $(this);
						obj.val = opt.text();
						obj.index = opt.index();
						obj.placeholder.text(obj.val);
						obj.dd.removeClass('active');
						obj.placeholder.removeClass('wrapper-dropdown_text');
						return false;
					});
					obj.opts2.on('click',function(){
						var opt2 = $(this);
						
						obj.opts3.toggleClass('active_two');
						return false;
						
					});
					$.fn.enterKey = function (fnc) {
						return this.each(function () {
							$(this).keypress(function (ev) {
							var keycode = (ev.keyCode ? ev.keyCode : ev.which);
							if (keycode == '13') {
							fnc.call(this, ev);
									}
								})
							})
						}
						obj.opts3.enterKey(function () {
								obj.placeholder.text(obj.opts3.val());
						obj.dd.removeClass('active');
								
							});
					
				},
				getValue : function() {
					return this.val;
				},
				getIndex : function() {
					return this.index;
				}
			}

			$(function() {

				var dd = new DropDown( $('#dd') );
				var bb = new DropDown( $('#bb') );
				var aa = new DropDown( $('#aa') );

				$(document).click(function() {
					// all dropdowns
					$('.wrapper-dropdown-3').removeClass('active');
				});

			});
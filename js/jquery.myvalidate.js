function form_validate(form,errortype) {
	var errorspan2 = $("#error_foot");
	$(form).find("input[type='text']").bind({

		'blur': function() {
			$this = $(this);
			var $value = $this.val()
			var datarule = $this.attr("data-check");
			var errorspan1 = $this.parent("div").parent("td").next("td").find("span");
			
			if (datarule != undefined) {
				var dataarray = datarule.split(",")
				v_fn()
			}

			function data_inarray(rule_name) {
				return $.inArray(rule_name, dataarray)
			}

			function v_fn() {
				if (data_inarray("required") != -1) {
					if ($.trim($value) == "") {
						error_add("此项为必填")
					}
				}
				if (data_inarray("tel") != -1) {
					var isMobile = /^1[3|4|5|7|8]\d{9}$/;
					var isPhone = /^((0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/;
					if (!isMobile.test($value) && !isPhone.test($value)) {
						error_add("请输入正确的电话号码")
						return false
					}
				}
				if (data_inarray("username") != -1) {
					var reg = /^[\u4e00-\u9fa5]+$/i;
					if ($.trim($value) == "") {
						error_add("请输入您的姓名")
						return false
					} else if (!reg.test($value)) {
						error_add("请输入正确的姓名")
						return false
					}
				}
				
			}

			//添加错误样式

			function error_add(text) {
				if(errortype==1){
				errorspan1.html(text).addClass("error_yellow")
				}else if( errortype==2){
				errorspan2.html(text).addClass("error_yellow")	
				}
			}

		},
		'focus': function() {
			$this = $(this)
			var errorspan1 = $this.parent("div").parent("td").next("td").find("span");
			if (errorspan1.hasClass("error_yellow")) {
				errorspan1.removeClass("error_yellow").html("")
			}
			if(errorspan2.hasClass("error_yellow")){
				errorspan2.removeClass("error_yellow").html("")
			}
		}
	})
}
form_validate("#register1",1)
form_validate("#register2",2)


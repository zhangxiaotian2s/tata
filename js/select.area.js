function areaselect(){
	 var province=$("#province"),
	     city=    $("#city"),
	     area_error=$("#area_error");
	    
	var MapOne_op="",
	    MapTwo_op="";
	$.each(cityDataMap["MapOne"], function(key, value) {
		MapOne_op += "<option value='" + key + "'>" + value + "</option>"
	})
	province.append(MapOne_op);
	
	
	province.change(function(){
	     if(area_error.hasClass("error_yellow")){
	     	area_error.removeClass("error_yellow").html("")
	     }
		
		city.empty();
		MapTwo_op=" "
		var p_key=$(this).val();
		$.each(cityDataMap["MapTwo"], function(key, value) {
				var city_value = value.split("-")
				if (city_value[1] == p_key) {
					MapTwo_op += "<option value='" + key + "'>" + key + "</option>"
				}
			})
		city.append(MapTwo_op)
		
	})
	
	
	
}
$(document).ready(function(){
	areaselect()
})

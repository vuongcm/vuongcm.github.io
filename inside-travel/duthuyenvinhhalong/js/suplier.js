Date.prototype.formatdate = function (formatdate) {
    var o = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S": this.getMilliseconds()
    }
    if (/(y+)/.test(formatdate)) formatdate = formatdate.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o) if (new RegExp("(" + k + ")").test(formatdate)) formatdate = formatdate.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    return formatdate;
}
function show_mess_check_detail(mes) {
    $(".box_mess_check_detail").show();
    $(".box_mess_check_detail").html(mes);
}
function cruise_check_err(id){
    $(id).css("border","2px solid #ff6600");    
}
//Search cruise
function cruise_search(type){
    if (document.form_check_booking.con_sel_cruise.value == ""){
        cruise_check_err(".con_sel_cruise");
    }else{
        $("#updating").show();
        var name = $("#con_sel_cruise").val();
        $.ajax({
           type: "GET",
           url: SITE_URL+"/ajax-suplier.php?mod=search_suplier_ajax&name="+name+"&type="+type,
           success: function(xml){
                $('.cruise-list-ajax').html(xml);
                $("#updating").hide();
           },
           error: function(){}
        });
    }
}
function cruise_search1(){
    var d = new Date();
    if(document.form_check_booking.con_sel_cruise.value == ""){        
        cruise_check_err(".con_sel_cruise");
        return;
    }else{
        $(".con_sel_cruise").css("border","none");
    }
    if(document.form_check_booking.check_in.value == d.formatdate("dd/MM/yyyy")){
        cruise_check_err(".div_check_in");
        return;
    }else{
        $(".div_check_in").css("border","none");
    }
    if(document.form_check_booking.check_in.value == "" || document.form_check_booking.check_in.value == "Departure"){
        nocheckin = true;
        //cruise_check_err(".div_check_in");
        //return;
    }else{
        nocheckin = false;
        //$(".div_check_in").css("border","none");
    }
    if(document.form_check_booking.package_vir.value == ""){
        alert("Please select your package. Thanks!");
        return;
    }
    if(document.form_check_booking.nocabin.value < 1){
        cruise_check_err(".div_sel_cabin");
        return;
    }else{
        $(".div_sel_cabin").css("border","none");
    }
    var textseach = document.form_check_booking.con_sel_cruise.value;
    $("#updating").show();
    $.ajax({
        type: "GET",
        url: SITE_URL + "/ajax-suplier.php?mod=checksearch&textseach=" + textseach,
        success: function (xml) {
            var arr_html = xml.split('|');
            if (Number(arr_html[1]) == 1) {
                document.form_check_booking.search_cruise_id.value = arr_html[0];
                document.form_check_booking.action = document.form_check_booking.action + arr_html[2] + ".html";
                document.form_check_booking.submit();
            } else if (Number(arr_html[1]) == 0 && Number(arr_html[2]) != "") {
                document.form_check_booking.search_cruise_id.value = arr_html[0];    
                /*if(nocheckin!=true){            
                    document.form_check_booking.action = document.form_check_booking.action + arr_html[2] + "/booking.html";
                }else{
                    document.form_check_booking.action = document.form_check_booking.action + arr_html[2] + ".html";                  
                }*/
				document.form_check_booking.action = document.form_check_booking.action + arr_html[2] + ".html";                  		
                document.form_check_booking.submit();
            } else {
                $("#updating").hide();
                sear_cruise = $('#sear_cruise_home').val();
                if(sear_cruise==1){
                    document.form_check_booking.action = document.form_check_booking.action + "search.html";
                    document.form_check_booking.submit();    
                }else{
                    cruise_search();    
                }
            }
        },
        error: function () {}
    });
}

function cruise_search2() {
    var d = new Date();
    if (document.form_check_booking.con_sel_cruise.value == ""){        
        cruise_check_err(".con_sel_cruise");
        return;
    }else{
        $(".con_sel_cruise").css("border","none");
    }
    if (document.form_check_booking.check_in.value == d.formatdate("dd/MM/yyyy")){
        cruise_check_err(".div_check_in");
        return;
    }else{
        $(".div_check_in").css("border","none");
    }
    if (document.form_check_booking.check_in.value == "" || document.form_check_booking.check_in.value == "Check in"){
        cruise_check_err(".div_check_in");
        return;
    }else{
        $(".div_check_in").css("border","none");
    }
    if (document.form_check_booking.package_vir.value == ""){
        alert("Please select your package. Thanks!");
        return;
    }
    
    if (document.form_check_booking.noguest.value < 1) {
        cruise_check_err(".div_sel_guest");
        return;
    }else{
        $(".div_sel_guest").css("border","none");
    }
    var textseach = document.form_check_booking.con_sel_cruise.value;
    $("#updating").show();
    $.ajax({
        type: "GET",
        url: SITE_URL + "/ajax-suplier.php?mod=checksearch&textseach=" + textseach,
        success: function (xml) {
			$("#updating").hide();
			sear_cruise = $('#sear_cruise_home').val();
			if(sear_cruise==1){
				document.form_check_booking.action = document.form_check_booking.action + "search.html";
				document.form_check_booking.submit();    
			}else{
				cruise_search();    
			}
            /*var arr_html = xml.split('|');
            if (Number(arr_html[1]) ==4) {
                document.form_check_booking.search_cruise_id.value = arr_html[0];
                document.form_check_booking.action = document.form_check_booking.action + arr_html[2] + "/charter.html";
                document.form_check_booking.submit();
            } else if (Number(arr_html[1]) !=4 && Number(arr_html[1]) > 0) {
                document.form_check_booking.search_cruise_id.value = arr_html[0];
                document.form_check_booking.action = document.form_check_booking.action + arr_html[2] + "/booking.html";
                document.form_check_booking.submit();
            } else {
                $("#updating").hide();
                sear_cruise = $('#sear_cruise_home').val();
                if(sear_cruise==1){
                    document.form_check_booking.action = document.form_check_booking.action + "search.html";
                    document.form_check_booking.submit();    
                }else{
                    cruise_search();    
                }
            }*/
        },
        error: function () {}
    });
}
//Booking cruise
function cruise_booking() {
    var d = new Date(); 
    if (document.form_booking.package.value == 0){
        cruise_check_err(".div_package");
        return;
    }else{
        $(".div_package").css("border","none");
    }   
    if (document.form_booking.check_in.value == d.formatdate("dd/MM/yyyy")){
        cruise_check_err(".div_check_in");
        return;
    }else{
        $(".div_check_in").css("border","none");
    }
    if (document.form_booking.check_in.value == "" || document.form_booking.check_in.value == "Check in"){
        cruise_check_err(".div_check_in");
        return;
    }else{
        $(".div_check_in").css("border","none");
    }
    if (document.form_booking.nocabin.value < 1) {
        cruise_check_err(".div_sel_cabin");
        return;
    }else{
        $(".div_sel_cabin").css("border","none");
    }

    $("#updating").show();
    document.form_booking.action = document.form_booking.action + "booking.html";
    document.form_booking.submit();
}
function cruise_charter() {
    var d = new Date();    
    if (document.form_booking.package.value == 0){
        cruise_check_err(".div_package");
        return;
    }else{
        $(".div_package").css("border","none");
    }
    if (document.form_booking.check_in.value == d.formatdate("dd/MM/yyyy")){
        cruise_check_err(".div_check_in");
        return;
    }else{
        $(".div_check_in").css("border","none");
    }
    if (document.form_booking.check_in.value == "" || document.form_booking.check_in.value == "Check in"){
        cruise_check_err(".div_check_in");
        return;
    }else{
        $(".div_check_in").css("border","none");
    }
    if (document.form_booking.noguest.value < 1) {
        cruise_check_err(".div_sel_guest");
        return;
    }else{
        $(".div_sel_guest").css("border","none");
    }
    $("#updating").show();
    document.form_booking.action = document.form_booking.action + "charter.html";
    document.form_booking.submit();
}
function auto_complete(des_arr){
    var typecat = "";
    $("#con_sel_cruise").autocomplete(des_arr, {
        multiple: false,
        matchContains: true,
        minChars: 1,
        width: $("#con_sel_cruise").width,
        selectFirst: false,
        formatItem: function(data) {
            if(data.cat_id ==1 ){typecat ="Luxury"}
            if(data.cat_id ==2 ){typecat ="Deluxe"}
            if(data.cat_id ==3 ){typecat ="Budget"}
            if(data.cat_id ==4 ){typecat ="Private"}
    	   return data.name+"<span style='float:right'>"+typecat+"</span>";
        },
        formatResult: function(data) {  
    	   return data.name;
        }
    }).result(function(event, item) {
         if(item.cat_id == 4){
            $(".sel_guest").show();
            $.ajax({
                type: "GET",
                url: SITE_URL + "/ajax-cruise.php?mod=search_charter&noguest=" + item.noguest,
                success: function (xml) {
                    $(".sel_guest").html(xml);
                    $(".sel_guest").show();
                },
                error: function () {}
            });
            $("#btn_search1").show();
            $("#btn_search2").hide();
            $(".sel_cabin").hide();
            $("#btn_search").hide();
         }else{
            $(".sel_cabin").show();
            $(".sel_guest").hide();
            $("#btn_search").show();
            $("#btn_search1").hide();
            $("#btn_search2").hide();
         }
        //$('#loc_r_id').val(item.catid);
    });
}
//Tab home
function tab_group_cruise(tab){
    if($("#destinations-"+tab).html()==''){
        $("#updating").show();
        $.ajax({
            type: "GET",
            url: SITE_URL + "/ajax-cruise.php?mod=tab_group_cruise&tab="+tab,
            success: function (xml) {
                $("#destinations-"+tab).html(xml);
                $("#updating").hide();
            },
            error: function () {}
        });
    }
}
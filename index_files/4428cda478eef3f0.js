
    function deferred(){var a={done:[],fail:[]};var b={done:function(c){a.done.push(c);return b},fail:function(c){a.fail.push(c);return b}};return{resolve:function(){var d=0,c;for(;c=a.done[d++];){c.apply(this,arguments)}},reject:function(){var d=0,c;for(;c=a.fail[d++];){c.apply(this,arguments)}},promise:b}}var loader=function(a,g,c,d,h,i){if(!a){return}if(typeof g==="function"){d=g;g=""}if(typeof c==="function"){d=c;c=""}var e=function(){loader.loaded[a]=1;d&&d(a);d=null;clearTimeout(f)};if(loader.loaded[a]){if(loader.loading[a]){loader.loading[a]=0}setTimeout(function(){e()},0);return}if(loader.loading[a]){setTimeout(function(){loader(a,g,c,d,h,i)},10);return}loader.loading[a]=1;var f=setTimeout(function(){try{i(a)}catch(l){}},h||6000);var k=g||a.toLowerCase().split(/\./).pop().replace(/[\?#].*/,"");var b;if(k==="js"){b=document.createElement("script");b.setAttribute("type","text/javascript");b.setAttribute("src",a);b.setAttribute("async",true)}else{if(k==="css"){b=document.createElement("link");b.setAttribute("type","text/css");b.setAttribute("rel","stylesheet");b.setAttribute("href",a)}}if(c){b.charset=c}if(k==="css"){setTimeout(function(){e()},0)}else{b.onerror=function(){e();b.onerror=null};b.onload=b.onreadystatechange=function(){var l;if(!this.readyState||this.readyState==="loaded"||this.readyState==="complete"){setTimeout(function(){e()},0);b.onload=b.onreadystatechange=null}}}var j=(function(){var l=document.getElementsByTagName("script");return l[l.length-1]})();j.parentNode.insertBefore(b,j)};loader.loaded=window.__external_files_loaded=window.__external_files_loaded||{};loader.loading=window.__external_files_loading=window.__external_files_loading||{};loader.batch=function(){if(arguments.length==0){return}var e=Array.prototype.slice.call(arguments);if(Object.prototype.toString.call(e[0])=="[object Array]"){e=e[0]}var f=deferred();var a=[];var d=function(){a.pop();if(a.length===0){f.resolve()}};for(var c=0,b;b=e[c++];){a.push(b);loader(b,d)}return f.promise};
    Do(function() {
      loader.batch([
        'http://img3.douban.com/f/shire/ae32cb8310a09ba836b958b79d2cd1e706db2fed/css/ui/dialog.css',
        'http://img3.douban.com/f/shire/4b3bad5e25de78678d700dd5353570dce3e6bbcc/js/ui/dialog.js'
      ]).done(function() {
        var encodeHTML=function(a){return a.replace(/\&/g,"&amp;").replace(/\"/g,"&quot;").replace(/\'/g,"&apos;").replace(/\</g,"&lt;").replace(/\>/g,"&gt;")};function deferred(){var a={done:[],fail:[]};var b={done:function(c){a.done.push(c);return b},fail:function(c){a.fail.push(c);return b}};return{resolve:function(){var d=0,c;for(;c=a.done[d++];){c.apply(this,arguments)}},reject:function(){var d=0,c;for(;c=a.fail[d++];){c.apply(this,arguments)}},promise:b}}function asyncRequest(a,d,e){var c=deferred();var b=(e||"get").toLowerCase();$.ajax({url:a,type:b,dataType:"json",data:(b==="post")?$.extend(d,{ck:get_cookie("ck")}):d,error:function(f){c.reject(f)},success:function(f){c.resolve(f)}});return c.promise}var DOULIST_ADDITEM="/j/doulist/{doulist_id}/additem";var DOULIST_EDITITEM="/j/doulist/{doulist_id}/edititem";var DOULIST_COMMENT="/j/doulist/{doulist_id}/poke";var DOULIST_CREATE="/j/doulist/add";var DOULIST_LIST="/j/doulist/cat";var DOULIST_SEARCH="/j/doulist/search";var validateForm=function(c,d){var a=true;var b;for(var e in d){if(d.hasOwnProperty(e)){b=c.find(e);a=d[e](b);if(a){validateForm.cleanError(b)}}}return a};validateForm.displayError=function(c,a){if(!c){return}var b=c.closest(".item");var d=b.find(".form-field-error");if(d.length===0){d=$('<div class="form-field-error"></div>').appendTo(b)}d.show().html(a)};validateForm.cleanError=function(a){a.closest(".item").find(".form-field-error").hide()};function doulistCustomeEvents(a){var b=a.node.find(".bn-cancel");a.node.bind("dialog-error",function(d,c){a.setContent('<div class="doulist-submit-success"><p>'+c+'</p>         <div class="item-submit">           <span class="bn-flat"><input type="button" value="关闭" class="bn-cancel"></span>         </div>       </div>      ').update();b.click(function(){a.close()});setTimeout(function(){a.close()},3000)});a.node.bind("dialog-success",function(h,c){a.setTitle("添加成功").setContent('<div class="doulist-submit-success">         <i></i>已经添加到<a href="'+c.url+'" target="_blank">'+c.name+'</a>         <div>           <p>窗口将在<b class="num">3</b>秒后关闭</p>           <span class="bn-flat"><input type="button" value="关闭" class="bn-cancel"></span>         </div>       </div>      ');b=a.node.find(".bn-cancel");b.click(function(){a.close();i&&clearTimeout(i)});var d=a.node.find(".num"),g=d.text(),f,i;(function(){f=f||arguments.callee;i=setTimeout(function(){d.text(--g);g?f():a.close()},1000)})()})}var doulistDialogForm=typeof doulistDialogForm==="undefined"?{}:doulistDialogForm;(function(){var d=function(e){var f=e.node.find("form");f.submit(function(g){g.preventDefault();var h={choice:f.find('[name="dl_choose"]:checked').val(),subjectId:f.find("input[name=subject_id]").val(),comment:f.find('textarea[name="comment"]').val(),sync:f.find("#dlg-opt-share").attr("checked")?"1":""};a[h.choice](e,f,h).bind("form-submit-error",function(j,i){e.node.trigger("dialog-error",i)}).bind("form-submit-success",function(j,i){e.node.trigger("dialog-success",i)})});f.bind("form-submit-fail",function(g,h){validateForm.displayError(f.find("input[name=dl_title]"),h)});doulistCustomeEvents(e)};var a={dl_new:c,dl_exist:b};function c(e,g,h){var f={"input[name=dl_title]":function(i){if(i.val()===""){validateForm.displayError(i,"请给你的列表起一个名称");return false}return true}};if(validateForm(g,f)){asyncRequest(DOULIST_CREATE,{title:g.find("input[name=dl_title]").val(),cat:g.find("input[name=dl_cat]").val(),sid:h.subjectId,comment:h.comment,sync_to_mb:h.sync},"post").done(function(i){if(i.r){g.trigger("form-submit-fail",i.err);return}i.sid=h.subjectId;i.doulist_id=i.id;i.name=encodeHTML(i.name);g.trigger("form-submit-success",i)})}else{e.update()}return g}function b(f,g,h){var e=g.find("select[name=dl_id] option:selected");asyncRequest(DOULIST_ADDITEM.replace("{doulist_id}",e.val()),{sid:h.subjectId,comment:h.comment,sync_to_mb:h.sync},"post").done(function(i){if(i.r){g.trigger("form-submit-error",i.err);return}i.sid=h.subjectId;i.doulist_id=e.val();i.name=$.trim(encodeHTML(e.text()));g.trigger("form-submit-success",i)});return g}doulistDialogForm.initForm=d})();$(document).delegate(".lnk-doulist-add","click",function(b){b.preventDefault();var a=$(this);if(!a.data("clicked")){var c=$.extend($(this).data(),{link:this.href});var d={};for(key in c){if(c.hasOwnProperty(key)){d[$.camelCase(key)]=c[key]}}showDoulistDialog(d);getExistDoulist(current_doulist_dialog,d,a);doulistDialogForm.initForm(current_doulist_dialog);a.data("clicked",true)}});var current_doulist_dialog;function showDoulistDialog(a){if(current_doulist_dialog){current_doulist_dialog.close()}var b=current_doulist_dialog=dui.Dialog({title:"添加到"+a.catename+"豆列",width:500,content:('<form action="" method="get">        <div class="doulist-bd">        <div class="item">          <label>选择豆列</label>          <div class="dl-bd">            <div class="dl-item">              <label for="dl_new"><input type="radio" name="dl_choose" id="dl_new" value="dl_new" checked />新建豆列</label><div class="dl_new_title"><input name="dl_title" id="dl_title" type="text" class="basic-input" placeholder="输入新豆列名称" ></div>            </div>          </div>        </div>        <div class="item">          <label>添加评语<br/><span>（选填）</span></label>          <textarea id="doulist_item_comment" class="basic-textarea" name="comment"></textarea>        </div>        <input type="hidden" name="dl_cat" value="{{cate}}">        <input type="hidden" name="subject_id" value="{{id}}">       </div>       <div class="doulist-ft">         <span class="bn-flat"><input type="submit" value="保存"></span>       </div>     </form>      ').replace(/{{[^{}]+}}/g,function(c){return a[c.replace(/[{}]/g,"")]})},true).open();b.update();b.node.bind("dialog:close",function(){b.node.remove()});b.node.bind("dialog:change",function(){b.update()}).addClass("dialog-doulist")}function getExistDoulist(b,a,c){asyncRequest(DOULIST_LIST,{cat:a.cate,sid:a.id}).done(function(f){if(f.r||f.doulist.length===0){b.update();return}var d='<option value="{{id}}">{{name}}</option>';var g='<label for="dl_exist" class="label_dl_exist"><input type="radio" name="dl_choose" id="dl_exist" value="dl_exist" checked>已有豆列</label><div class="dl_exist_select"><select class="dl_id" id="dl_id" name="dl_id"></div>';$(f.doulist).each(function(h,e){g+=d.replace(/{{[^{}]+}}/g,function(i){return encodeHTML(e[i.replace(/[{}]/g,"")])})});g+="</select>";b.node.find("#dl_new").removeAttr("checked");$("<div />",{"class":"dl-item dl-item-exist"}).insertBefore($(".dl-item")).html(g);$(".dl_new_title").hide();b.node.find("form #doulist_item_comment").val(f.comment);b.update();handleDoulist(a);c.data("clicked",false)}).fail(function(){b.update();c.data("clicked",false)})}function handleDoulist(a){var b=current_doulist_dialog;var e=$("#dl_new");var g=$(".dl_new_title");var d=$(".form-field-error");var f=$("#dl_title");var c=$("#dl_id");b.node.find('[name="dl_choose"]').bind("change",function(){var h=$(".form-field-error");e.attr("checked")?(g.show()&&h.show()&&f.focus()&&c.addClass("dl_id_disable")):g.hide()&&h.hide()&&c.removeClass("dl_id_disable");b.update()});b.node.find("form select").change(function(){var i=$(this).val();var h=DOULIST_COMMENT.replace("{doulist_id}",i);asyncRequest(h,{sid:a.id}).done(function(j){b.node.find("form #doulist_item_comment").val(j.comment)}).fail(function(){})})};
      });
    });
  
    if (!window.DoubanShareMenuList) {
        window.DoubanShareMenuList = [];
    }
    var __cache_url = __cache_url || {};
    (function(u){
        if(__cache_url[u]) return;
        __cache_url[u] = true;
        window.DoubanShareIcons = 'http://img3.douban.com/f/shire/3c8da10d6081bd1b2d13d3733b2ac201535c5d0f/pics/ic_shares2.png';
        var initShareButton = function() {
          $.ajax({url:u,dataType:'script',cache:true});
        };
        if (typeof Do == 'function' && 'ready' in Do) {
          Do('http://img3.douban.com/f/shire/ae32cb8310a09ba836b958b79d2cd1e706db2fed/css/ui/dialog.css',
            'http://img3.douban.com/f/shire/4b3bad5e25de78678d700dd5353570dce3e6bbcc/js/ui/dialog.js',
            initShareButton);
        } else if(typeof Douban == 'object' && 'loader' in Douban) {
          Douban.loader.batch(
            'http://img3.douban.com/f/shire/ae32cb8310a09ba836b958b79d2cd1e706db2fed/css/ui/dialog.css',
            'http://img3.douban.com/f/shire/4b3bad5e25de78678d700dd5353570dce3e6bbcc/js/ui/dialog.js'
          ).done(initShareButton);
        }
    })('http://img3.douban.com/f/shire/29d220c1b2ce66f0971d871ef37a76baa3ea9201/js/lib/sharebutton.js');
    
var douban_src = 'http://www.douban.com';
var fav_type = 'default';
var fav_url = '#';
  function deferred(){var a={done:[],fail:[]};var b={done:function(c){a.done.push(c);return b},fail:function(c){a.fail.push(c);return b}};return{resolve:function(){var d=0,c;for(;c=a.done[d++];){c.apply(this,arguments)}},reject:function(){var d=0,c;for(;c=a.fail[d++];){c.apply(this,arguments)}},promise:b}}var loader=function(a,g,c,d,h,i){if(!a){return}if(typeof g==="function"){d=g;g=""}if(typeof c==="function"){d=c;c=""}var e=function(){loader.loaded[a]=1;d&&d(a);d=null;clearTimeout(f)};if(loader.loaded[a]){if(loader.loading[a]){loader.loading[a]=0}setTimeout(function(){e()},0);return}if(loader.loading[a]){setTimeout(function(){loader(a,g,c,d,h,i)},10);return}loader.loading[a]=1;var f=setTimeout(function(){try{i(a)}catch(l){}},h||6000);var k=g||a.toLowerCase().split(/\./).pop().replace(/[\?#].*/,"");var b;if(k==="js"){b=document.createElement("script");b.setAttribute("type","text/javascript");b.setAttribute("src",a);b.setAttribute("async",true)}else{if(k==="css"){b=document.createElement("link");b.setAttribute("type","text/css");b.setAttribute("rel","stylesheet");b.setAttribute("href",a)}}if(c){b.charset=c}if(k==="css"){setTimeout(function(){e()},0)}else{b.onerror=function(){e();b.onerror=null};b.onload=b.onreadystatechange=function(){var l;if(!this.readyState||this.readyState==="loaded"||this.readyState==="complete"){setTimeout(function(){e()},0);b.onload=b.onreadystatechange=null}}}var j=(function(){var l=document.getElementsByTagName("script");return l[l.length-1]})();j.parentNode.insertBefore(b,j)};loader.loaded=window.__external_files_loaded=window.__external_files_loaded||{};loader.loading=window.__external_files_loading=window.__external_files_loading||{};loader.batch=function(){if(arguments.length==0){return}var e=Array.prototype.slice.call(arguments);if(Object.prototype.toString.call(e[0])=="[object Array]"){e=e[0]}var f=deferred();var a=[];var d=function(){a.pop();if(a.length===0){f.resolve()}};for(var c=0,b;b=e[c++];){a.push(b);loader(b,d)}return f.promise};
  Do(function() {
    loader.batch([
      'http://img3.douban.com/f/shire/ae32cb8310a09ba836b958b79d2cd1e706db2fed/css/ui/dialog.css',
      'http://img3.douban.com/f/shire/4b3bad5e25de78678d700dd5353570dce3e6bbcc/js/ui/dialog.js',
      'http://img3.douban.com/f/sns/356f2de9a7f8cc87fc48093c5439a06ef4f9b8da/css/sns/tag.css',
      'http://img3.douban.com/f/sns/6110987b4ef71a316ec46c79a9a48612ba59d3dd/css/sns/tag_editor.css',
      'http://img3.douban.com/f/sns/f98a57424167be66f4b092f60b2864a78edf285b/js/sns/tag_editor.js',
      'http://img3.douban.com/f/sns/e87fc7e21434035a4d12db4ed95489e6d5facbdc/js/sns/tag_editor_dialog.js'
    ]).done(function() {
      (typeof Do==="function"?Do:$).call(null,function(){if(typeof hasInitFavBtn!=="undefined"){return}hasInitFavBtn=1;$("html").delegate(".btn-fav","click",function(o){o.preventDefault();var t=$(o.currentTarget),r=t.hasClass("fav-cancel")?1:0,u=t.data(),v="/j/like_tags",p="",l=true,m="fav-tag-tip",s=t.offset(),q=[],n="",k;for(i in u){if(typeof u[i]==="number"){u[i]=t.attr("data-"+i)}}u.ck=get_cookie("ck");u.q="quiet";n=u.tag_align;q=[s.left,s.top,t.outerWidth()];if(t.hasClass("stat-processing")){return}h();function j(x){var w=this;$.post_withck(v,{tags:x,lid:p},function(y){y=$.parseJSON(y);if(y.r===0){w.close()}},"POST")}function h(){t.addClass("stat-processing");$.ajax({type:r?"delete":"post",url:"/j/like",data:u,success:function(w){t.removeClass("stat-processing");if(w.r===0){if(r){t.removeClass("fav-cancel").addClass("fav-add").attr("title","标为喜欢?");if(u.update_num){e(t,-1)}}else{t.removeClass("fav-add").addClass("fav-cancel").attr("title","取消喜欢?");if(u.update_num){e(t,1)}p=w.lid;k=$.fn.TagEditorDialog($("#fav-tag-template"),{title:t.text(),cls:m,autoClose:true,multi:true,callback:j});k.show("","",l,q,n);d(k.dialog.node)}}},dataType:"json"})}});function d(j,h){if(!c(j)){b(j,h)}}function c(j){var h=window.scrollY||window.pageYOffset||document.documentElement.scrollTop;if(j.offset().top>h){return true}}function b(l,j){var k={scrollTop:l.offset().top-50},h={time:500};_options=$.extend({},h,j);$("html,body").animate(k,_options.time)}var f=douban_src+"/j/like",g=$(window),e=function(k,m){var l=k.parent(),j=l.find(".fav-num"),h;if(j.length===0){j=l.find(".fav-num-note")}$("#fav-userlist").hide();if(j.length===0){j=$(['<span class="fav-num" data-tkind="',k.data("tkind"),'" data-tid="',k.data("tid"),'"><a href="'+fav_url+'">0人</a>喜欢</span>'].join(""));l.prepend(j)}h=parseInt(j.find("a").text(),10)+m;if(h===0){j.remove();return}j.find("a").text(h+"人")},a=function(n,k){if(!$.isArray(k)){$("#fav-userlist").hide();return}var l=0,p,q,m,j=["<ul>"];if(k.length>0){for(;p=k[l++];){j.push(["<li>",'<a href="',douban_src,"/people/",p.uid,'" target="_blank" class="pic"><img src="',p.icon_avatar,'" width="24" height="24"></a>','<a href="',douban_src,"/people/",p.uid,'" target="_blank">',p.screen_name,"</a>","</li>"].join(""))}j.push("</ul>")}else{j=["<span>啊哦…喜欢这个的人都不愿意露脸</span>"]}n.removeClass("arrow-bottom").find(".bd").css({height:l>9?220:"auto",overflow:l>9?"auto":"hidden"}).html(j.join(""));q=n.offset();m=n.height();if(q.top-g.scrollTop()+m>g.height()-40){n.addClass("arrow-bottom").css("top",q.top-m-55)}};$("html").bind("click",function(j){var h=$("#fav-userlist");if(h.length===0||h.css("display")==="none"||j.target.tagName==="A"){return}if(!$.contains(h[0],j.target)){h.hide()}});$("html").delegate(".fav-num a","click",function(l){if(fav_type!=="default"){return}l.preventDefault();var k=$(l.currentTarget),n=k.offset(),m=k.parent().data(),h=[m.tkind,m.tid].join(""),j=$("#fav-userlist");if(j.length===0){j=$(['<div id="fav-userlist" class="fav-userlist">','<div class="hd"><a href="" class="btn-close">X</a></div>','<div class="bd">','</div><i class="arrow"></i>',"</div>"].join("")).appendTo("body");j.find(".btn-close").click(function(o){o.preventDefault();j.hide()})}j.removeClass("arrow-bottom").find(".bd").css("height","auto").html("加载中...");j.css({top:n.top+22,"margin-left":(function(o){return -1*Math.floor(o.width()/2-n.left+o.offset().left)-10})($("#content"))}).show();$.get(f,{tkind:m.tkind,tid:m.tid,alt:"xd"},function(o){a(j,o)},"jsonp")})});
    });
  });

    Do.add('dshare', {path: 'http://img3.douban.com/f/shire/27757b9a3d889f1335d9c0259d130a7aacfcd2df/js/dshare.js', type: 'js', requires:['dialog']});
    Do('dshare', function () {
        $('#share-site').delegate(".shuo", "click", function(){
            $("#share-site").find(".lnk-sharing").click();
            return false;
        })
    });
    Do('dialog', function () {
        var srcNoPic = 'http://img3.douban.com/view/site/large/public/f47d5dbe18c36b9.jpg',
            srcAddPic = 'http://img3.douban.com/pics/site/icon_default_large_hover.png';

        $('#no-pic').hover(
            function () { $('img', this).attr('src', srcAddPic); },
            function () { $('img', this).attr('src', srcNoPic); }
        ).click(function (e) {
            e.preventDefault();
            location.href = '/' + $('body').attr('id') + '/admin/icon';
        });

        /* like site */
        var site_is_commercial = false;
        $('.site-follow').delegate('#like', 'click', function (e) {
            e.preventDefault();
            var site_id = $("body").attr('id');
            var followed = $('#followed').val();
            $.post_withck(
                '/j/site/'+site_id+'/like',
                function (o) {
                    if (!site_is_commercial && followed == 0){
			var dlg = dui.Dialog({
			    width: 300,
			    title: '我关注这个小站',
			    content: '已关注计算传播学小站的广播更新，可以随时取消关注',
			    buttons:[{
				text: '确定',
				method: function(o) {
				    $('.site-follow').html(
				    "<span>我关注这个小站。</span><span><a id=\"unlike\" href=\"#\" class=\"lnk-unfollow\" title=\"确实不再关注 计算传播学 吗?\">&gt;取消</a></span><input id=\"followed\" type=hidden value=\"1\"/>");
				    dlg.close();
				    }
			    }]
			}).open()
                        dlg.node.find('.dui-dialog-close').click(function(){
                            location.reload(1);
                        });
                    } else {
                        location.reload(1);
                    }

                }
            );
        });

        /* cancel like*/
        $('.site-follow').delegate('#unlike', 'click', function (e) {
            e.preventDefault();
            var site_id = $("body").attr('id');
            var followed = $('#followed').val();
            $.post_withck(
                '/j/site/'+site_id+'/unlike',
                function (o) {
                    if (site_is_commercial){
                        $.post_withck(
                            '/j/site/'+site_id+'/unfollow',
                            function (o) {
                                location.reload();
                        });

                    } else {
                    if (followed == 1){
                        var refresh_follow_button = function(){
                             $('#followed').val(0);
                             return $('.site-follow').html('<a id="like" href="#" class="lnk-follow">关注</a><input id="followed" type=hidden value=\"0\"/>');
                        };
                        var dlg = dui.Dialog({
                            width: 300,
			    title: '取消关注这个小站',
			    content: '已取消关注计算传播学小站的广播更新',
			    buttons: [{
				text: '确定',
				method: function(o) {
				    refresh_follow_button();
				    dlg.close();
				}
			    }]
                        }).open();
                       dlg.node.find('.dui-dialog-close').click(function(){
                           location.reload(1);
                       });
                     }
                    else {
                        location.reload();
                     }
                   }
           });
        });
    });

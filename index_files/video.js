Douban.init_add_video=function(c){var a=$(this)[0].href,b=function(d){if(d){d.preventDefault()}Douban.remote_submit_json(this.node.find("form")[0],$.proxy(function(f){var e;if(!f.error){location.reload();return}e=this.node.find(".bd .attn");if(e.length===0){this.node.find(".bd").append('<div class="attn">'+f.error+"</div>")}else{e.html(f.error)}this.updateSize();this.updatePosition()},this),false)};$.getJSON(a,function(d){var e=dui.Dialog({title:"添加视频",content:d.html,width:500,buttons:[{text:"添加",method:function(f){b.call(f,null)}},"cancel"]}).open();e.node.find("form").submit($.proxy(b,e))})};Douban.init_edit_video=function(c){var a=$(this).attr("href"),b=function(d,e){Douban.remote_submit_json(d,$.proxy(function(g){var f;if(!g.error){location.reload();return}f=this.node.find(".bd .attn");if(f.length===0){this.node.find(".bd").append('<div class="attn">'+g.error+"</div>")}else{f.html(g.error)}this.updateSize();this.updatePosition()},e),false)};$.getJSON(a,function(d){var e=dui.Dialog({title:"修改视频",content:d.html,width:500,buttons:[{text:"修改",method:function(f){b(f.node.find("form")[0],f)}},"cancel"]}).open();e.node.find("form").submit(function(f){f.preventDefault();b(this,e)})})};
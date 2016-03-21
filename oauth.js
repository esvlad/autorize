function vk_popup(options)
{
  var
    screenX = typeof window.screenX != 'undefined' ? window.screenX : window.screenLeft,
    screenY = typeof window.screenY != 'undefined' ? window.screenY : window.screenTop,
    outerWidth = typeof window.outerWidth != 'undefined' ? window.outerWidth : document.body.clientWidth,
    outerHeight = typeof window.outerHeight != 'undefined' ? window.outerHeight : (document.body.clientHeight - 22),
    width = options.width,
    height = options.height,
    left = parseInt(screenX + ((outerWidth - width) / 2), 10),
    top = parseInt(screenY + ((outerHeight - height) / 2.5), 10),
    features = (
      'width=' + width +
        ',height=' + height +
        ',left=' + left +
        ',top=' + top
      );
  return window.open(options.url, 'vk_oauth', features);
}

function doLogin(a) {
  var win;
	if(a==1){
  var redirect_uri = 'http://www.gorobzor.ru/?a=1';
  var url = 'http://oauth.vkontakte.ru/authorize?client_id='ключ_приложения'&display=popup&redirect_uri=' + redirect_uri;
	}
	else if(a==2){
  var redirect_uri = 'http://www.gorobzor.ru/?a=2';
  var url = 'https://oauth.yandex.ru/authorize?client_id='ключ_приложения'&display=popup&response_type=code&redirect_uri=' + redirect_uri;	
	}
	else if(a==3){
  var redirect_uri = 'http://www.gorobzor.ru/?a=3';
  var url = 'https://www.facebook.com/dialog/oauth?client_id='ключ_приложения'&response_type=code&scope=email,user_birthday&redirect_uri=' + redirect_uri;	
	}
  var nowuri = 'http://www.gorobzor.ru/';
  var uri_regex = new RegExp(nowuri);
  if(a==3){
  win = vk_popup({
    width:820,
    height:500,
    url:url
  });
	}
	else{
  win = vk_popup({
    width:620,
    height:370,
    url:url
  });
	}

  var watch_timer = setInterval(function () {
    try {
      if (uri_regex.test(win.location)) {
        clearInterval(watch_timer);

        setTimeout(function () {
          win.close();
          document.location.reload();
        }, 0);
      }
    } catch (e) {

    }
  }, 0);
}

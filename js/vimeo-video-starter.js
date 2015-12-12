<script>
    /*

     var player = $('#player1')[0];
     var playerOrigin = '*';

     if (window.addEventListener) {
     window.addEventListener('message', onMessageReceived, false);
     }
     else {
     window.attachEvent('onmessage', onMessageReceived, false);
     }

     function onMessageReceived(event) {
     if (!(/^https?:\/\/player.vimeo.com/).test(event.origin)) {
     return false;
     }

     if (playerOrigin === '*') {
     playerOrigin = event.origin;
     }

     var data = JSON.parse(event.data);
     console.log('ey');
     switch (data.event) {
     case 'ready':
     console.log('ready');
     post('addEventListener', 'pause');
     post('addEventListener', 'finish');
     post('addEventListener', 'playProgress');
     break;
     case 'playProgress':
     console.log('progress');
     break;
     case 'pause':
     console.log('pause');
     break;
     case 'finish':
     console.log('finish');
     break;
     }
     }

     function post(action, value) {
     var data = {
     method: action
     };

     if (value) {
     data.value = value;
     }

     var message = JSON.stringify(data);
     player.contentWindow.postMessage(data, playerOrigin);
     }
     $(document).on('click','.hitter',function(e){
     e.preventDefault();
     var data = {
     method: 'play'
     }
     data = JSON.stringify(data);
     player.contentWindow.postMessage(data, '*');
     })

     */
</script>

<div id="phone" class="col-md-4 offset1">
<div class="phone">
<iframe id="player1" src="https://player.vimeo.com/video/128993012?api=1&player_id=player1" width="304" height="541" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>
</div>
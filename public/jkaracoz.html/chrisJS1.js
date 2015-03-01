<script>
        var locationId = "Rock+Climbing+Amazing"
        $.ajax({url:'https://ajax.googleapis.com/ajax/services/search/images?v=1.0&imgsz=huge&imgtype=photo&rsz=1&tbs=iar:xw&q=' + locationId,
           dataType: 'JSONP',
          jsonpCallback: 'callback',
          type: 'GET',
          success: function (data) {
            $.each(data.responseData.results, function(i,item){
            $("<img/>").attr("src", item.unescapedUrl).prependTo("#results");
            if ( i == 10 ) return false;
          });
            
            }
           });
</script>

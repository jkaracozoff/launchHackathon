(function(){
    
    var min = 80, max = 600, pad_right = 3, input = document.getElementById('month2');

    input.style.width = min+'px';
    input.onkeypress = input.onkeydown = input.onkeyup = function(){
        var input = this;
        setTimeout(function(){
            var tmp = document.createElement('div');
            tmp.style.padding = '0';
            if(getComputedStyle)
                tmp.style.cssText = getComputedStyle(input, null).cssText;
            if(input.currentStyle)
                tmp.style = input.currentStyle;
            tmp.style.width = '';
            tmp.style.position = 'absolute';
            tmp.innerHTML = input.value.replace(/&/g, "&amp;")
                                       .replace(/</g, "&lt;")
                                       .replace(/>/g, "&gt;")
                                       .replace(/"/g, "&quot;")
                                       .replace(/'/g, "&#039;")
                                       .replace(/ /g, '&nbsp;');
            input.parentNode.appendChild(tmp);
            var width = tmp.clientWidth+pad_right+1;
            tmp.parentNode.removeChild(tmp);
            if(min <= width && width <= max)
                input.style.width = width+'px';
        }, 1);
    }

})();
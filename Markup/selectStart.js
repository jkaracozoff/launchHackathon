/*s = win.getSelection? win.getSelection() : {};
			if(s.rangeCount){ 
				R = s.getRangeAt(n);
			} else {
				if(doc.createRange){
					R = doc.createRange();
					R.setStart(doc.body, 0);
				} else 
				if (doc.selection){ // <IE9
					R = doc.selection.createRange();
					R = R.getBookmark();
				}
			}

*/
var range = document.createRange();
//range.setStart(document.getElementById('location'),1);
//range.setEnd(document.getElementById('location'),1);
range.selectNodeContents(document.getElementById('location'));

var sel = window.getSelection();
sel.removeAllRanges();
sel.addRange(range);
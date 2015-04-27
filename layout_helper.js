function changeWeaponPane(paneID) {
	var paneElements=document.querySelectorAll('.weapons'),
	    i=0,
	    l=paneElements.length;
	for(i; i < l; i++) {
		if(paneElements[i].id != paneID) {
			paneElements[i].style.display='none';
		}
		else {
			paneElements[i].style.display='inherit';
		}
	}
}

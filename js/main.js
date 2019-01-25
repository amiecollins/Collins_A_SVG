(() => {

	var allTheIcons = document.querySelectorAll('.isanicon');

	function logMyId() {
		// log some stuff to the dev tools
		console.log(this.id);
	}

	allTheIcons.forEach(currentIcon => currentIcon.addEventListener('click', logMyId));
})();



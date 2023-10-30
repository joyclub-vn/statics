// Remove commas from numbers in meta tax
document.querySelectorAll('.vamtam-meta-tax').forEach(function (e) {
	e.innerHTML = e.innerHTML.replace(/,/g, '');
});
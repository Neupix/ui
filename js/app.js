/* caching vars */
var $body = $('body');
var $fade = $('#fade');

/* starting */

var currentSection = $('section')[0];
var currentArticle = $(currentSection).find('article')[0];

//showing inly the first article in the section
$('section').each(function() {
	$(this).find('article').first().addClass('active');
});

$('#side a').on('click', function(event) {

});


/*
 * UI FUNCTIONS
 */

/* primitive functions */
function loadArticle(article) {
	$(currentArticle).removeClass('active');
	currentArticle = $(article)[0];
	$(currentArticle).addClass('active');
}

function closeSide() {
	$body.removeClass('showSide');
}

function titleSection(title) {
	$(currentSection).find('.title').html(title);
}


/* ui functions */
$('*[open-nav]').on('click', function() {
	event.preventDefault();
	$body.addClass('showSide');
});

$('*[data-article]').on('click', function() {
	event.preventDefault();
	loadArticle($(this).attr('data-article'));
	titleSection($(this).html());
	closeSide();
})

$fade.on('click', closeSide);
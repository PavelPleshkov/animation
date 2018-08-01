/*$(document).ready(function(){
        $('.dummy').viewportChecker();
    });*/

jQuery(document).ready(function() {
	jQuery('.main-slideshow-wrapper').addClass("hiddenContent").viewportChecker({
		classToRemove: 'hiddenContent',
		classToAdd: 'visibleContent animated slideInUp',
		offset: 100
	});

	jQuery('.main-service').addClass("hiddenContent").viewportChecker({
		classToRemove: 'hiddenContent',
		classToAdd: 'visibleContent animated fadeIn',
		offset: 100
	});

	jQuery('.main-work-title').addClass("hiddenContent").viewportChecker({
		classToRemove: 'hiddenContent',
		classToAdd: 'visibleContent animated fadeIn',
		offset: 100
	});

	jQuery('.main-work-title-line').addClass("hiddenContent").viewportChecker({
		classToRemove: 'hiddenContent',
		classToAdd: 'visibleContent animated fadeInLeft',
		offset: 50
	});

	jQuery('.main-work-items-wrapper a').addClass("hiddenContent").viewportChecker({
		classToRemove: 'hiddenContent',
		classToAdd: 'visibleContent animated fadeIn',
		offset: 100
	});

	jQuery('.footer-top-item').addClass("hiddenContent").viewportChecker({
		classToRemove: 'hiddenContent',
		classToAdd: 'visibleContent animated fadeIn',
		offset: 100
	});

	// jQuery('.footer-bottom-wrapper p:first-child').addClass("hiddenContent").viewportChecker({
	// 	classToRemove: 'hiddenContent',
	// 	classToAdd: 'visibleContent animated fadeInLeft',
	// 	offset: 100
	// });

	// jQuery('.footer-bottom-wrapper p:last-child').addClass("hiddenContent").viewportChecker({
	// 	classToRemove: 'hiddenContent',
	// 	classToAdd: 'visibleContent animated fadeInRight',
	// 	offset: 100
	// });
});
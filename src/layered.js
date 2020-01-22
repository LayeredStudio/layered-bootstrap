
// CSS
import './layered.scss'


// JS
import jQuery from 'jquery'
import bootstrap from 'bootstrap'


// Start UI
jQuery(function($) {

	// Tooltips
	$('[data-toggle="tooltip"]').tooltip();

	$('.js-version').text(`v${L.version || 1}`)

})



/* UI Elements */

L = L || {}

L.toast = function(content, title, options) {

	if (typeof title === 'object') {
		options = title
		title = null
	}

	options = Object.assign({
		type:		'default',
		subtitle:	'',
		delay:		10000,
	}, options || {});

	options.delay = Number.isInteger(options.delay) && options.delay > 0 ? `data-delay="${options.delay}"` : 'data-autohide="false"';
	content = content || '';

	var toasts = jQuery('.toasts');
	if (!toasts.length) {
		toasts = jQuery('<div class="toasts" aria-live="polite" aria-atomic="true" style="position: fixed;bottom: 1rem;right: 1rem;"></div>').appendTo(document.body);
	}

	title = title ? `<div class="toast-header">
		<strong class="mr-auto">${title}</strong>
		<small>${options.subtitle}</small>
		<button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
			<span aria-hidden="true">&times;</span>
		</button>
	</div>` : '';

	return jQuery(`<div class="toast toast-${options.type}" role="alert" aria-live="assertive" aria-atomic="true" ${options.delay}>
		${title}
		<div class="toast-body">${content}</div>
	</div>`).appendTo(toasts).toast('show');
}

L.toast.info = function(content, title, options) {
	options = options || {};
	options.type = 'info';
	return L.toast(content, title, options);
}

L.toast.success = function(content, title, options) {
	options = options || {};
	options.type = 'success';
	return L.toast(content, title, options);
}

L.toast.warning = function(content, title, options) {
	options = options || {};
	options.type = 'warning';
	return L.toast(content, title, options);
}

L.toast.error = function(content, title, options) {
	options = options || {};
	options.type = 'error';
	return L.toast(content, title, options);
}

window.jQuery = jQuery

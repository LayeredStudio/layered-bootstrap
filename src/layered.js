
// CSS
import './layered.scss'


// JS
import { Toast } from 'bootstrap'


// Start UI
document.addEventListener('DOMContentLoaded', () => {
	// Tooltips
	//$('[data-toggle="tooltip"]').tooltip();

	const $jsVersion = document.querySelector('.js-version')
	if ($jsVersion) {
		$jsVersion.innerText = `v${L.version || 1}`
	}
});



/* UI Elements */

L = L || {}

L.toast = function(content, options) {
	options = {
		type:		'secondary',
		subtitle:	'',
		animation:	true,
		autohide:	true,
		delay:		7000,
		...options
	}

	let $toasts = document.querySelector('.toast-container');
	if (!$toasts) {
		$toasts = document.createElement('div')
		$toasts.classList.add('toast-container', 'position-fixed', 'bottom-0', 'end-0', 'p-3')
		$toasts.setAttribute('aria-live', 'polite')
		$toasts.setAttribute('aria-atomic', 'true')
		document.body.appendChild($toasts)
	}

	const $toast = document.createElement('div')
	$toast.classList.add('toast', `bg-${options.type}`, 'text-white', 'border-0')

	const $toastContent = document.createElement('div')
	$toastContent.classList.add('toast-body')
	$toastContent.innerText = content
	$toast.appendChild($toastContent)
	$toast.setAttribute('role', 'alert')
	$toast.setAttribute('aria-live', 'assertive')
	$toast.setAttribute('aria-atomic', 'true')

	$toasts.appendChild($toast)

	const toast = new Toast($toast, {
		animation: options.animation,
		autohide: options.autohide,
		delay: options.delay,
	})

	toast.show()

	return toast
}

L.getUrlParam = (key, hash) => {
	const qs = hash ? location.hash : location.search
	const params = new URLSearchParams(qs.slice(1))

	return params.get(key)
}

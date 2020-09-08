(function($){

	$(document).ready(function() {

		/* ---------------------------------------------- /*
		 * Contact form ajax
		/* ---------------------------------------------- */

		$('#contact-de-form').find('input,textarea').jqBootstrapValidation({
			preventSubmit: true,
			submitError: function($form, event, errors) {
				// additional error messages or events
			},
			submitSuccess: function($form, event) {
				event.preventDefault();

				var submit          = $('#contact-de-form submit');
				var ajaxResponse    = $('#contact-de-response');

				var email           = $('#contact-de-form input[name="email"]').val();
				var name           = $('#contact-de-form input[name="name"]').val();
				var message         = $('#contact-de-form input[name="message"]').val();

				$.ajax({
					type: 'POST',
					url: 'assets/php/contact-de.php',
					dataType: 'json',
					data: {
						email: email,
						name: name,
						message: message,
					},
					cache: false,
					beforeSend: function(result) {
						submit.empty();
						submit.append('<i class="fa fa-cog fa-spin"></i> Wait...');
					},
					success: function(result) {
						if(result.sendstatus == 1) {
							ajaxResponse.html(result.message);
							$form.fadeOut(500);
						} else {
							ajaxResponse.html(result.message);
						}
					}
				});
			}
		});

	});

})(jQuery);
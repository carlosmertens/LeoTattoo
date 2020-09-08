(function($){

	$(document).ready(function() {

		/* ---------------------------------------------- /*
		 * Contact form ajax
		/* ---------------------------------------------- */

		$('#contact-form').find('input,textarea').jqBootstrapValidation({
			preventSubmit: true,
			submitError: function($form, event, errors) {
				// additional error messages or events
			},
			submitSuccess: function($form, event) {
				event.preventDefault();

				var submit          = $('#contact-en-form submit');
				var ajaxResponse    = $('#contact-en-response');

				var email           = $('#contact-en-form [name="email"]').val();
				var name           = $('#contact-en-form [name="name"]').val();
				var message         = $('#contact-en-form [name="message"]').val();

				$.ajax({
					type: 'POST',
					url: 'assets/php/contact-en.php',
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
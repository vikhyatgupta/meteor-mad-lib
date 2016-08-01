Template.body.events({
	'submit form': function(event, template){
		event.preventDefault();
		console.log("Hello, World");
	}
});
Template.body.events({
	'submit form': function(event, template){
		event.preventDefault();
		console.log("Hello, World");
		let exclamation = template.find('#exclamation').value;
		let adverb = template.find('#adverb').value;
		let noun = template.find('#noun').value;
		let verb= template.find('#verb').value;
		let madlib = exclamation +" you say, as you " + adverb +
		", jump onto your "+ noun + " and "+ verb + " into the sunset.";
		console.log(madlib);
	}
});
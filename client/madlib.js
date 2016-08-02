import { Template } from 'meteor/templating';

Template.body.events({
  'submit .form-horizontal'(event, template) {
    event.preventDefault();

    // console.log('Hello, world');
    let exclamation = template.find("input[name=exclamation]").value;
    let adverb = template.find("input[name=adverb]").value;
    let noun = template.find("input[name=noun]").value;
    let verb = template.find("input[name=verb]").value;

    const madlib = `"${exclamation}!", you say as you ${adverb} jump onto your ${noun} and ${verb} off into the sunset`;

    $('#madlib').hide();
    $('#madlib').html(madlib);
    $('#madlib').css('color', '#0000ff');
    $('#madlib').fadeIn('slow', function() {});
  },
});
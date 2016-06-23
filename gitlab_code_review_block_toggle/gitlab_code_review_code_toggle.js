$('.diff-file').each(function(index, element) {
  var id = 'toggle-' + index;
  element.id = id;
  var js = "$('#" + id + " .diff-content').toggle();";
  var button = '<button onClick="' + js + '">Toggle Visibility</button>';
  $(element).prepend(button);
});

// Add toggle to each code block
$('.diff-file').each(function(index, element) {
  var id = 'toggle-' + index;
  element.id = id;
  var js = "$('#" + id + " .diff-content').toggle();";
  var button = '<button onClick="' + js + '">Toggle Visibility</button>';
  $(element).prepend(button);
});

// Add classes to cassette blocks
$('.diff-file .diff-header span:first-child:not(.commit-short-id)').each(function (index, element) {
  var text = $(element).text();
  if (text.substr(text.length - 3) == 'yml') {
    $(element).parent().next().addClass('cassette-toggle');
  }
});

// Add batch controls
var cassetteControl = "$('.cassette-toggle').toggle()";
var control = "$('.diff-content')";
var styles = 'position: fixed; left: 10px; z-index: 1000;';

var cassetteButton = '<button style="' + styles + 'top: 10px;' + '" onClick="' + cassetteControl + '">Toggle Cassettes (yml)</button>';
var showButton = '<button style="' + styles + 'top: 35px;' + '" onClick="' + control + '.show()' + '">Show All</button>';
var hideButton = '<button style="' + styles + 'top: 60px;' + '" onClick="' + control + '.hide()' + '">Hide All</button>';

$('body').append(cassetteButton, showButton, hideButton);

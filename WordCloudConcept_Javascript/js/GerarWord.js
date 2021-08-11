
var btn = document.getElementById('button-gerar');
var container = document.querySelector('.container');

btn.addEventListener('click', function() {
    
  if(container.style.display === 'block') {
      container.style.display = 'none';
  } else {
      container.style.display = 'block';
  }
});

anychart.onDocumentReady(function() {
	
	// format the tooltips
	var formatter = "{%value}{scale:(1)(1000)(1000)(1000)|( dozen)( thousand)( million)( billion)}";
	var tooltip = chart.tooltip();
	tooltip.format(formatter);

	// format the angles
	chart.angles([0, -45, 90]);

  var data = [
    {"x": "Mandarin chinese", "value": 1090000000, category: "Sino-Tibetan"},
    {"x": "English", "value": 983000000, category: "Indo-European"},
    {"x": "Hindustani", "value": 544000000, category: "Indo-European"},
    {"x": "Spanish", "value": 527000000, category: "Indo-European"},
    {"x": "Arabic", "value": 422000000, category: "Afro-Asiatic"},
    {"x": "Malay", "value": 281000000, category: "Austronesian"},
    {"x": "Russian", "value": 267000000, category: "Indo-European"},
    {"x": "Bengali", "value": 261000000, category: "Indo-European"},
    {"x": "Portuguese", "value": 229000000, category: "Indo-European"},
    {"x": "French", "value": 229000000, category: "Indo-European"},
    {"x": "Hausa", "value": 150000000, category: "Afro-Asiatic"},
    {"x": "Punjabi", "value": 148000000, category: "Indo-European"},
    {"x": "Japanese", "value": 129000000, category: "Japonic"},
    {"x": "German", "value": 129000000, category: "Indo-European"},
    {"x": "Persian", "value": 121000000, category: "Indo-European"}
  ];

 // create a tag (word) cloud chart
  var chart = anychart.tagCloud(data);

   // set a chart title
  chart.title('15 most spoken languages')
  // set an array of angles at which the words will be laid out
  chart.angles([0])
  // enable a color range
  chart.colorRange(true);
  // set the color range length
  chart.colorRange().length('80%');

  // display the word cloud chart
  chart.container("container");
  chart.draw();

});








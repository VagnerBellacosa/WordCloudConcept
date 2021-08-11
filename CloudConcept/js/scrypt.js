anychart.onDocumentReady(function () {

    // Data
  var data = [
    {"x": "Digital Innovation One", "value": 1090000000, category: "DIO"},
    {"x": "Bootcamp", "value": 983000000, category: "Comunidade"},
    {"x": "Labs", "value": 544000000, category: "Comunidade"},
    {"x": "Projetos", "value": 527000000, category: "Comunidade"},
    {"x": "Desafio Codigo", "value": 422000000, category: "Comunidade"},
    {"x": "Artigos", "value": 281000000, category: "Comunidade"},
    {"x": "Reputaçao", "value": 267000000, category: "Comunidade"},
    {"x": "XP", "value": 261000000, category: "Comunidade"},
    {"x": "Level", "value": 229000000, category: "Comunidade"},
    {"x": "Vagner Bellacosa", "value": 229000000, category: "DEV"},
    {"x": "DEV", "value": 150000000, category: "Comunidade"},
    {"x": "Html", "value": 148000000, category: "Linguagem"},
    {"x": "JavaScript", "value": 129000000, category: "Linguagem"},
    {"x": "CSS", "value": 129000000, category: "Linguagem"},
    {"x": "Game Developer", "value": 121000000, category: "Bootcamp"},
	{"x": "C Sharp", "value": 121000000, category: "Linguagem"},
	{"x": "Python", "value": 121000000, category: "Linguagem"},
	{"x": "PHP", "value": 121000000, category: "Linguagem"},
	{"x": "Java", "value": 121000000, category: "Linguagem"},
	{"x": "Dot Net", "value": 121000000, category: "Linguagem"},
	{"x": "Angular", "value": 121000000, category: "Linguagem"},
	{"x": "ReactJS", "value": 121000000, category: "Linguagem"},
	{"x": "MS SQL", "value": 121000000, category: "Base de Dados"},
	{"x": "Become Remote", "value": 121000000, category: "Bootcamp"},
	{"x": "My SQL", "value": 121000000, category: "Base de Dados"},
	{"x": "Cloud Computer", "value": 121000000, category: "Arquitetura"},
	{"x": "Azure", "value": 121000000, category: "Arquitetura"},
	{"x": "Blockchain", "value": 121000000, category: "Tecnologia"},
	{"x": "Linux", "value": 12100000, category: "Sistema Operacional"},
	{"x": "Android", "value": 12100000, category: "Sistema Operacional"},
	{"x": "IOS", "value": 12100000, category: "Sistema Operacional"},
	{"x": "Windows", "value": 12100000, category: "Sistema Operacional"},
	{"x": "Kotlin", "value": 12100000, category: "Framework"},	
	{"x": "MS-DOS", "value": 121000, category: "System"}	
  ];

  // create a tag cloud chart
  var chart = anychart.tagCloud(data);

  // set the chart title
  chart.title('Digital Innovation One')
  // set array of angles, by which words will be placed
  // chart.angles([0])
  chart.angles([0, -45, 90])
  // enable color range
  chart.colorRange(true);
  // set color range length
  chart.colorRange().length('80%');

//  chart.background().stroke("5 black");
chart.background().fill({
//  keys: ["#fff", "#66f", "#fff"],
   keys: ["#000", "#000", "#000"],
  angle: 130,
});

//  font-family: 'Anton', cursive;

  // display chart
  chart.container("container");
  chart.draw();
  
    // format the tooltips
  var formatter = "{%value}{scale:(1)(1000)(1000)(1000)|( dozen)( thousand)( million)( billion)}";
  var tooltip = chart.tooltip();
  tooltip.format(formatter);


});

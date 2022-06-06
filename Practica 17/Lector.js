var fs = require("fs").promises;
var parse = require("csv-parse/sync");

/*var parser = parse.parse({colums:false}, function(err, records){
    console.log(records);
});

fs.createReadStream(__dirname+'/listado.csv').pipe(parser);
*/

(async function(){
    const fileContent =await fs.readFile(__dirname+'/listado.csv');
    const records = parse.parse(fileContent, {columns:true});
    console.log(records);
})();

var fs = require("fs");
var stringify = require("csv-stringify");

// json de datos
var data =[
    {"region": "Estados Unidos", "Idioma": "Ingles"},
    {"region": "El Salvador", "Idioma": "Español"}
];

stringify.stringify(data,{
    header: true
},function (err, output){
    fs.writeFileSync(__dirname+"/data.csv", output);
});
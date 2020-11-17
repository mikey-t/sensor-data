import CsvParser from './CsvParser.js'

const DATA_PATH = './datafiles/'

console.log('sensor data parser - js edition\n')

const parser = new CsvParser()

let records = await parser.parseFiles(DATA_PATH)

//console.log(records)

let tempsForRoom2 = records.filter(r => r.area == '2').map(r => r.temperature)

console.log(tempsForRoom2)
console.log('num results: ' + tempsForRoom2.length)

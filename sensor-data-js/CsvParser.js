import csv from 'csv-parser'
import fs from 'fs-extra'
import path from 'path'

export default class CsvParser {
    async parseFiles(dataDirPath) {
        let results = []
        let files = fs.readdirSync(dataDirPath)
        for await (const file of files) {
            results.push(...await this.parseFile(path.join(dataDirPath, file)))
        }
        return results
    }

    async parseFile(path) {
        return new Promise((resolve) => {
            let results = []
            fs.createReadStream(path)
                .pipe(csv())
                .on('data', (data) => results.push(data))
                .on('end', () => {
                    resolve(results)
                })
        })
    }
}

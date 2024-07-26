// xmlファイルを読み込んで、jsonファイルに変換する

const fs = require('fs');
const xml2js = require('xml2js');

const parser = new xml2js.Parser();

fs.readFile(__dirname + '/test.xml', (err, data) => {
    parser.parseString(data, (err, result) => {
        if (err) {
        console.log(err);
        return;
        }
        fs.writeFile(__dirname + '/sample.json', JSON.stringify(result, null, 2), (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Done');
        });
    });
    }
);

// sample.jsonを読み込み、resultを出力する

fs.readFile(__dirname + '/sample.json', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data.book);
});
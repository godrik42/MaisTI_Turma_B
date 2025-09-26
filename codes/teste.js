const txt = '{"galera": [{"a":"b", "b":"d"},{"a":"c","b":"e"}]}'
const dados = JSON.parse(txt)

console.log(dados.galera[0]);
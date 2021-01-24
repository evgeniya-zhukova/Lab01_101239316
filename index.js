const fs = require('fs')

if (fs.existsSync("canada.txt")) {
    fs.unlinkSync("canada.txt")
}

if (fs.existsSync("usa.txt")) {
    fs.unlinkSync("usa.txt")
}

var data = fs.readFileSync('input_countries.csv', 'utf8')

fs.writeFile("canada.txt", `${data}`, (err) => {
    if(err)
    {
        console.log(`Error : ${err}`)
    }else{
        console.log("Write Sucess")
    }
})

fs.writeFile("usa.txt", `${data}`, (err) => {
    if(err)
    {
        console.log(`Error : ${err}`)
    }else{
        console.log("Write Sucess")
    }
})

/*
//Async
fs.readFile("input_countries.csv", (err, data) => {
    if(err)
    {
        console.log(`Error : ${err}`)
    }else{
        console.log(data.toString('utf-8'))
        //console.log(data[0].charCodeAt())
    }
})

var data = fs.readFileSync('input_countries.csv', 'utf8')
console.log(`Data: ${data}`)

fs.writeFile("output.txt", "Hello World", (err) => {
    if(err)
    {
        console.log(`Error : ${err}`)
    }else{
        console.log("Write Sucess")
    }
})

fs.appendFile("output.txt", "Hello World - 2", (err) => {
    if(err)
    {
        console.log(`Error : ${err}`)
    }else{
        console.log("Write Sucess")
    }
})

var dataBuffer = Buffer.alloc(10)
console.log(dataBuffer)

fs.open("input_countries.csv", "r", (err, fd) => {
    fs.read(fd, dataBuffer, 0, dataBuffer.length, 5, (err, bytesRead) => {
        console.log(dataBuffer.toString())
    })
})*/

const http = require('http');
const fs = require('fs');
const portNumber = 8080;

const httpServer = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        readFile(redirectToHtml(`views/index`), res);
    } 
    else if (req.url === '/about') {
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        readFile(redirectToHtml(`views/about`), res);
    } 
    else if (req.url === '/contact') {
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        readFile(redirectToHtml(`views/contact`), res);
    } 
    else{
        res.writeHead(404, {
            "Content-Type": "text/html"
        });
        readFile(redirectToHtml(`views/404`), res);
    }
});

const redirectToHtml = (url) => {
    return `${url}.html`;
};


const readFile = (file_path, res) => {
    if (fs.existsSync(file_path)) {
        fs.readFile(file_path, (error, data) => {
            if (error) {
                console.log(error);
                handleError(res);
                return;
            }
            res.write(data);
            res.end();
        });
    }
};

httpServer.listen(portNumber, () => {
    console.log(`Server is listening on port ${portNumber}`);
});
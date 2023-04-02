const fs = require("fs");
const url = require("url");
const http = require("http");

const data = fs.readFileSync(`./data.json`, "utf-8");
const object = JSON.parse(data);
const template = fs.readFileSync(`./index.html`, "utf-8");

function replaceValue(temp, obj) {
  let returnVal = temp.replace(`{{%%#MONEY1#%%}}`, obj[1].balanceMoney);
  for (let i = 0; i < 7; i++) {
    returnVal = returnVal.replace(`{%DATA${i + 1}%}`, obj[0][i].amount);
  }
  console.log(obj[1]);
  returnVal = returnVal.replace(`{{%%#MONEY2#%%}}`, obj[1].amount);
  //   console.log(returnVal);
  return returnVal;
}

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.writeHead(200, {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    let objectToReturn = replaceValue(template, object);
    res.end(objectToReturn);
  } else if (pathName === "/product") {
    res.end("This is the product");
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1>Page not found!</h1>");
  }
});

server.listen(5500, "127.0.1.1", () => {
  console.log("Listening to requests on port 8000");
});

import http from "http";
import fs from "fs";

const server = http.createServer((req: any, res: any) => {
  if (req.url === "/view-image") {
    fs.readFile("./dist/images/veryhappydog.jpg", (err, data) => {
      console.log("err", err);
      console.log("data", data);

      if (err) {
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/html");
        res.write("404 Not Found");
        res.end();
        return;
      }

      res.setHeader("Content-Type", "image/jpeg");
      res.write(data);
      res.end();
    });
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.write("404 Not Found");
    res.end();
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});

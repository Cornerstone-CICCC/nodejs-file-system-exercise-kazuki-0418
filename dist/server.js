"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const fs_1 = __importDefault(require("fs"));
const server = http_1.default.createServer((req, res) => {
    if (req.url === "/view-image") {
        fs_1.default.readFile("./dist/images/veryhappydog.jpg", (err, data) => {
            console.log("err", err);
            console.log("data", data);
            if (err) {
                res.statusCode = 404;
                res.setHeader("Content-Type", "text/html");
                res.write("404 Not Found");
                res.end();
                return;
            }
            // 画像のContent-Typeを指定する
            res.setHeader("Content-Type", "image/jpeg");
            res.write(data);
            res.end();
        });
    }
    else {
        // その他のURLの場合は404を返す
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/html");
        res.write("404 Not Found");
        res.end();
    }
});
server.listen(3000, () => {
    console.log("Server is running on port 3000");
});

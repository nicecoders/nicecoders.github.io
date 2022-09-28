"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const generateSnippets = () => new Promise((resolve) => {
    const jsonSnippets = `{}`;
    (0, fs_1.writeFile)(__dirname + '/../snippets/generated.json', jsonSnippets, (error) => {
        if (error) {
            console.error(error);
        }
        return resolve(true);
    });
});
generateSnippets();
exports.default = generateSnippets;
//# sourceMappingURL=test.js.map

import { writeFile } from 'fs';

const generateSnippets = () =>
  new Promise((resolve) => {
    const jsonSnippets = `{}`;
    writeFile(
      __dirname + '/../snippets/generated.json',
      jsonSnippets,
      (error) => {
        if (error) {
          console.error(error);
        }
        return resolve(true);
      },
    );
  });

generateSnippets()

export default generateSnippets;

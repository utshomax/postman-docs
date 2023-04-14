const fs = require('fs');
const path = require('path');


function renameMdToMdx(directory) {
  const files = fs.readdirSync(directory);

  files.forEach((file) => {
    const filePath = path.join(directory, file);
    const fileStat = fs.statSync(filePath);

    if (fileStat.isDirectory()) {
      // Recursively traverse the subdirectory
      renameMdToMdx(filePath);
    } else if (path.extname(file) === '.md') {
      // Rename .md to .mdx
      const newFilePath = path.join(directory, path.basename(file, '.md') + '.mdx');
      fs.renameSync(filePath, newFilePath);
      console.log(`Renamed: \${filePath} -> \${newFilePath}`);
    }
  });
}

const rootDirectory = '../docs';
renameMdToMdx(rootDirectory);


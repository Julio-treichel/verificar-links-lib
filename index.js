import chalk from 'chalk';
import fs from 'fs';

function extraiLinks(texto) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm
  const listaDeLinks = [];
  let temp;
  while ((temp = regex.exec(texto)) !== null) {
    listaDeLinks.push({ [temp[1]] : temp[2] })
  }
  return listaDeLinks;
}

function terr (erro) {
  throw new Error(chalk.red(erro.code, 'deu erro'))
}

async function lerArquivo (localDoArquivo) {
  const encoding = 'utf-8';
  try {
    const texto = await fs.promises.readFile(localDoArquivo, encoding);
    console.log(extraiLinks(texto));
  } catch(e) {
    terr(e);
  }
}

// lerArquivo('./file/texto.md');

export default lerArquivo
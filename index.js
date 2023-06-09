import fs from 'fs';
import chalk from 'chalk';

function trataErro(erro){
    throw new Error(chalk.red(erro.code, 'Não há arquivo no diretório'))
}

// async/await
async function pegaArquivo(caminhoDoArquivo){
    try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
        console.log(chalk.green(texto))
    } catch (erro) {
        trataErro(erro)
    } finally {
        // finally vai sempre ser executado, e não recebe parametros
        console.log(chalk.yellow('operação concluída'));
    }
}


// promises com then()
// function pegaArquivo(caminhoDoArquivo){
//     const encoding = 'utf-8';
//     fs.promises
//         .readFile(caminhoDoArquivo, encoding)
//         .then((texto) => console.log(chalk.green(texto)))
//         .catch(trataErro)
//         // .catch((erro) => trataErro)
// }

// function pegaArquivo(caminhoDoArquivo){
//     const encoding = 'utf-8';
//     fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//         if (erro){
//             trataErro(erro);
//         }
//         console.log(chalk.green(texto))
//     })
// }

pegaArquivo('./arquivos/texto.md')
pegaArquivo('./arquivos/')
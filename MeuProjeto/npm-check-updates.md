# O que é `npm-check-updates`?

`npm-check-updates` é uma ferramenta de linha de comando que atualiza as dependências do seu arquivo `package.json` para as versões mais recentes.

## Instalação

Para instalar o `npm-check-updates` globalmente, execute o seguinte comando:
```bash
npm install -g npm-check-updates
```


## Usage

Check the latest versions of all project dependencies:

```sh
$ ncu
Checking package.json
[====================] 5/5 100%

 eslint             7.32.0  →    8.0.0
 prettier           ^2.7.1  →   ^3.0.0
 svelte            ^3.48.0  →  ^3.51.0
 typescript         >3.0.0  →   >4.0.0
 untildify          <4.0.0  →   ^4.0.0
 webpack               4.x  →      5.x

Run ncu -u to upgrade package.json
```


LINKS 

- [ncu - GitHub](https://github.com/raineorshine/npm-check-updates)

- [ncu - npm](https://www.npmjs.com/package/npm-check-updates).
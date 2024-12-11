# Start-Angular
Desenvolvimento SPA com Angular

# [Setup a new project locally](https://angular.dev/installation)

```CMD
npm install -g @angular/cli

ng new --minimal -g MeuProjeto

cd .\MeuProjeto\

npm start
```

# [The Angular CLI](https://angular.dev/tools/cli)

```
ng g --help
```

Para personalizar os comandos do `ng generate` no Angular, você pode configurar várias opções editando o arquivo `angular.json`. O `angular.json` é o arquivo de configuração angular que descreve a estrutura do projeto, além de fornecer opções para build, serve, e gerar componentes, módulos, serviços, etc.
  
```json
      "schematics": {
        "@schematics/angular:component": {
          "inlineTemplate": false,
```

## [Components](https://angular.dev/essentials/components)

Todos os modulos que não são o modulo principal tem que importar o [CommonModule]

```
ng g c navegacao/menu
ng g c navegacao/home
ng g c navegacao/footer

```

## Services

[http-client](https://angular.dev/guide/http)


### [Fake Backend](backend/readme.md)



# Links 

- [API Reference](https://angular.dev/api)
- [Generating code using schematics](https://angular.dev/tools/cli/schematics)
- [Angular workspace configuration](https://angular.dev/reference/configs/workspace-config)
- [Angular Material](https://material.angular.io)
- [Angular](https://angular.io/)
- [Nx - Getting Started](https://nx.dev/l/r/getting-started/intro)
- [Augury](https://augury.rangle.io/)
- [Bootstrap](https://getbootstrap.com/)

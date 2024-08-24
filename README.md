
# API Champions League ⚽🏆

## Descrição

Este projeto é uma API para gerenciamento de jogadores e clubes da Champions League, construída utilizando uma arquitetura de n-layers. A aplicação é implementada em TypeScript com Express e está estruturada em várias camadas para separar responsabilidades, facilitando a manutenção e escalabilidade.

## Arquitetura

A arquitetura da aplicação é composta pelas seguintes camadas:

1. **Entrada**: Onde as requisições dos clientes são recebidas na porta 3333.
2. **Controllers**: Responsáveis por receber as requisições HTTP e interagir com os serviços apropriados.
3. **Services**: Contêm a lógica de negócios e manipulam as operações principais, chamando os repositórios para acessar os dados.
4. **Repositories**: Lidam diretamente com o acesso aos dados, seja em um banco de dados ou outra forma de armazenamento.
5. **Models**: Definem a estrutura dos dados (como Player e Club).
6. **Data**: Simula o armazenamento de dados usando JSON ou arrays.

### Diagrama de Arquitetura

![Arquitetura do Projeto](/docs/arquitetura%20do%20projeto.png)

## Instalação

Para instalar as dependências do projeto, execute:

```bash
npm install
```

## Scripts

Os scripts disponíveis para rodar a aplicação são:

- **`npm run start:dev`**: Inicia o servidor em modo de desenvolvimento usando o arquivo `.env`.
- **`npm run start:watch`**: Inicia o servidor em modo de desenvolvimento e fica observando mudanças no código.
- **`npm run start:dist`**: Compila o código para produção e inicia o servidor a partir do código compilado.

## Endpoints

### Players

- **GET /players**: Retorna a lista de todos os jogadores.
- **GET /players/:id**: Retorna informações de um jogador específico pelo ID.
- **POST /players**: Cria um novo jogador.
- **DELETE /players/:id**: Exclui um jogador específico pelo ID.
- **PATCH /players/:id**: Atualiza as estatísticas de um jogador específico pelo ID.

### Clubs

- **GET /clubs**: Retorna a lista de todos os clubes.

## Estrutura do Projeto

```plaintext
src/
|-- data/
|    |--database.json
|-- controllers/
|   |-- player-controller.ts
|   |-- club-controller.ts
|
|-- model/
|   |-- player-model.ts
|   |-- club-model.ts
|
|-- repositories/
|   |-- player-repository.ts
|   |-- club-repository.ts
|
|-- services/
|   |-- player-service.ts
|   |-- club-service.ts
|
|-- utils/
|   |-- http-helper.ts
|
|-- router.ts
|-- server.ts
|-- app.ts
```

## Utilização

Para iniciar o servidor, execute:

```bash
npm run start:dev
```

Após iniciar o servidor, a API estará disponível na porta 3333.

## Tecnologias Utilizadas

- **TypeScript**: Linguagem utilizada para escrita do código.
- **Express**: Framework para construção da API.
- **CORS**: Middleware para habilitar CORS.
- **TSUP**: Bundler para compilar o código TypeScript.
- **TSX**: Ferramenta para rodar TypeScript diretamente.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para enviar issues e pull requests para melhorias.

## Licença

Este projeto está licenciado sob a licença ISC.


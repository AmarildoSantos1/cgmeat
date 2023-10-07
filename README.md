# Bless Basket

Este é um projeto que utiliza as tecnologias Node.js, Express, React, Vite e MongoDB.

## Tecnologias Utilizadas

- Node.js
- Express
- React
- Vite
- MongoDB

## Melhorias Feitas no Novo Backend

O novo backend apresenta várias melhorias em relação à versão anterior:

1. *Código Mais Organizado*: O código foi reestruturado e organizado para facilitar a manutenção e o desenvolvimento futuro.

2. *Mensagens de Erro Corrigidas*: As mensagens de erro foram revisadas e corrigidas para garantir que sejam exibidas nos momentos corretos e sejam informativas.

3. *Arquivo .env Adicionado*: Um arquivo `.env` foi criado e agora está presente no projeto para gerenciar variáveis de ambiente sensíveis.

4. *Implementação do README*: Um README foi criado para documentar o projeto e fornecer informações importantes aos colaboradores e usuários.

5. *Autenticação Funcionando 100%*: Todas as rotas relacionadas à autenticação foram testadas via Postman e agora funcionam perfeitamente.

6. *CRUD dos Produtos Funcionando 100%*: Todas as rotas relacionadas à criação, leitura, atualização e exclusão de produtos foram testadas via Postman e estão funcionando corretamente.

7. *CRUD dos Usuários Funcionando 100%*: Todas as rotas relacionadas à criação, leitura, atualização e exclusão de usuários foram testadas via Postman e estão funcionando corretamente.

8. *Criação da Rota createUser*: Uma nova rota, `createUser`, foi adicionada para facilitar o registro de novos usuários.

9. *Middleware Funcionando*: O middleware foi implementado e está funcionando corretamente para lidar com solicitações e autorização.

## Página de Login

1. A página de login possui campos para "Login" e "Senha".
2. Há um link na página de login para a página de criação de novos usuários.
3. O token de autenticação só é gerado se o usuário estiver cadastrado.
4. Ambos os campos de "Login" e "Senha" são obrigatórios.
5. As mensagens de erro são apresentadas com notificações.

## Página de Registro de Novos Usuários

1. As mensagens de erro são apresentadas com notificações.
2. Os campos "Nome", "Email" e "Senha" são obrigatórios.
3. Não é possível adicionar dois usuários com o mesmo email.

## Página de Criação de Produtos

1. Não é possível adicionar dois produtos com o mesmo código.
2. Os campos "Nome", "Preço", "Código" e "Categoria" são obrigatórios.

## Página Home (Visualização dos Produtos)

1. Todos os produtos criados na página de Criação de Produtos são listados na página Home.
2. A página Home exibe o preço, a data de validade e o nome do produto.

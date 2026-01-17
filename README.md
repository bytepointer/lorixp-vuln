## IMPORTANTE

- Este repositório foi criado com o objetivo de conscientizar desenvolvedores sobre falhas XSS e documentar o bug que será enviado para à equipe de desenvolvimento da Loritta.

## Tipo de vulnerabilidade

- A vulnerabilidade é um XSS stored (Cross Site Scripting Stored), muito comum em aplicações Web, ao qual permite a injeção de scripts através do innerHtml ou em alguma entrada de script do html, como no caso de `href`. O XSS pode ser utilizado para o envio de requisições utilizando os cookies de sessão do usuário.

## Como a vulnerabilidade funciona?

* 2025 Patched Vulnerability

- Antes de agosto de 2025, era possível manter xss stored em muitos locais do antigo painel.
- Após a correção de MrPowerGamerBR no antigo painel, ainda havia uma entrada de stored xss na lista de cargos do autorole, quando você criava um cargo no servidor com o name de `<img src=x onerror="alert('xss')"` e fosse no autorole e clicasse em cargos, automaticamente o xss era executado.

* 01/01/2026 Working Vulnerability

- Em qualquer configurador de embed, é possível enviar uma url de título, ao qual aparecerá como um botão com href na página. Através disso, é possível enviar um href malicioso como `javascript:alert("xss")` que ocasionará execução de script na página ao clicar no botão.

## Exploração da vulnerabilidade

- Antigamente, era possível obter cargos em qualquer servidor ao qual a vítima tinha poder administrativo, já que com uma falha xss era possível enviar solicitações para o dashboard de um servidor no mesmo cluster. Apesar dos servidores estarem separados em clusters, era possível você criar servidores e adicionar a Loritta até atingir o cluster do servidor alvo.

- Atualmente, a vulnerabilidade foi fortalecida caso a vítima tenha permissões de `Manage Roles` e `Manage Messages` através da criação de uma chave API da Loritta e a utilização do Giveaway Roles.

## O que a vulnerabilidade afeta?

- Através dessa vulnerabilidade, é possível obter cargos em servidores de outros indívíduos e até mesmo roubar todos seus sonhos, ocasionando no fim de patrimônios de sonhos e servidores grandes.

## Como evitar falhas XSS?

- Sanitizar entradas de inputs e outputs (ex: saídas através de `<select>` obtendo dados de um servidor), verificando se está sendo armazenado algum código HTML no servidor.

## Fatores que aumentam as chances do clique do usuário

- Ofuscação de código;
- Colocando uma mensagem bobinha na frente da função (ex. `javascript:"LORI_ERROR"...`);
- Atacantes podem utilizar engenharia social para fazer usuários clicarem no href por curiosidade.

# POC

https://youtu.be/113ddcnBnfM

# Credits

bytepointer

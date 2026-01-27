# Requisitos

## Requisitos Funcionais

### RF-01 — Cadastro e Autenticação de Usuário

O sistema deve permitir que o usuário crie uma conta utilizando e-mail e senha, com opção de autenticação social.

### RF-02 — Perfil Clínico do Usuário

O sistema deve permitir que o usuário informe e edite dados clínicos relevantes, incluindo:

- Tipo de diabetes

- Peso corporal

- Meta glicêmica

### RF-03 — Registro de Alimentos

O sistema deve permitir que o usuário registre alimentos consumidos, informando:

- Nome do alimento

- Quantidade/porção

- Horário da refeição

### RF-04 — Cálculo de Carboidratos

O sistema deve calcular automaticamente a quantidade total de carboidratos da refeição com base nos alimentos registrados.

### RF-05 — Base de Dados de Alimentos

O sistema deve disponibilizar uma base de dados de alimentos com informações nutricionais, incluindo carboidratos por porção.

### RF-06 — Histórico de Refeições

O sistema deve permitir a visualização do histórico de refeições e consumo diário de carboidratos.

### RF-07 — Relatórios e Gráficos

O sistema deve gerar relatórios visuais (gráficos) do consumo de carboidratos por período (diário, semanal e mensal).

### RF-08 — Ajuste Manual

O sistema deve permitir que o usuário ajuste manualmente valores de carboidratos quando necessário.

## Requisitos Não Funcionais

### RNF-01 — Usabilidade

O sistema deve possuir interface simples, intuitiva e acessível para usuários leigos, incluindo suporte a fontes maiores e alto contraste.

### RNF-02 — Desempenho

O sistema deve responder às principais operações do usuário em até 2 segundos em condições normais de uso.

### RNF-03 — Disponibilidade

O sistema deve estar disponível 99,5% do tempo, excluindo períodos de manutenção programada.

### RNF-04 — Segurança

O sistema deve:

- Armazenar senhas utilizando algoritmos de hash seguro

- Proteger dados sensíveis conforme a LGPD

### RNF-05 — Portabilidade

O sistema deve ser compatível com dispositivos Android e iOS.

### RNF-06 — Escalabilidade

O sistema deve suportar aumento progressivo de usuários sem degradação perceptível de desempenho.

### RNF-07 — Manutenibilidade

O sistema deve ser desenvolvido com arquitetura modular, facilitando correções e evolução contínua.

### RNF-08 — Confiabilidade

O sistema deve garantir integridade dos dados, evitando perdas em caso de falhas ou interrupções inesperadas.

# Testes para GerenciadorDeTarefas

## Objetivos
Este documento descreve os testes unitários criados para a classe GerenciadorDeTarefas. O objetivo dos testes é garantir que todos os métodos da classe funcionem corretamente e que a lógica de manipulação de tarefas esteja livre de erros. Os testes cobrem funcionalidades como adição, remoção, atualização, listagem, e ordenação de tarefas, além da manipulação de tags e prioridades.

## Estrutura dos Testes
Os testes foram escritos usando o framework Jest e estão organizados para verificar a funcionalidade de cada método da classe GerenciadorDeTarefas. A seguir, está a descrição de cada grupo de testes:

1. Adicionar Tarefa   
Teste: `deve adicionar uma tarefa com sucesso`.

Objetivo: Verificar se uma tarefa é adicionada corretamente ao gerenciador quando a descrição é válida.

Descrição: Adiciona uma tarefa com uma descrição válida e verifica se ela está presente na lista de tarefas.

- Teste: `não deve adicionar tarefa com descrição muito curta`.

Objetivo: Garantir que uma tarefa com descrição muito curta não seja adicionada.

Descrição: Tenta adicionar uma tarefa com uma descrição menor ou igual a 3 caracteres e verifica se um erro é lançado.


2. Remover Tarefa
Teste: `deve remover uma tarefa com sucesso`

Objetivo: Testar se uma tarefa pode ser removida corretamente pelo seu ID.

Descrição: Adiciona uma tarefa e, em seguida, remove-a. Verifica se a tarefa foi removida da lista.


4. Buscar Tarefa por ID
Teste: `deve buscar uma tarefa por ID`

Objetivo: Confirmar que é possível buscar uma tarefa pelo seu ID.

Descrição: Adiciona uma tarefa e verifica se ela pode ser recuperada pelo seu ID.


6. Atualizar Tarefa
Teste: `deve atualizar uma tarefa`

Objetivo: Testar se uma tarefa pode ser atualizada com novos dados.

Descrição: Adiciona uma tarefa e, em seguida, atualiza seus dados. Verifica se as alterações foram aplicadas.


8. Listar Tarefas
Teste: `deve listar todas as tarefas`

Objetivo: Verificar se todas as tarefas adicionadas são listadas corretamente.

Descrição: Adiciona múltiplas tarefas e verifica se todas são retornadas pela função de listagem.


10. Contar Tarefas
Teste: `deve contar o número de tarefas`

Objetivo: Confirmar que o número total de tarefas é contado corretamente.

Descrição: Adiciona uma tarefa e verifica se a contagem de tarefas está correta.


12. Marcar Tarefa como Concluída
Teste: `deve marcar uma tarefa como concluída`

Objetivo: Testar se uma tarefa pode ser marcada como concluída.

Descrição: Adiciona uma tarefa e marca-a como concluída. Verifica se o status de conclusão foi atualizado corretamente.


14. Listar Tarefas Concluídas
Teste: `deve listar tarefas concluídas`

Objetivo: Verificar se a lista de tarefas concluídas está correta.

Descrição: Adiciona uma tarefa concluída e verifica se ela aparece na lista de tarefas concluídas.


16. Listar Tarefas Pendentes
Teste: `deve listar tarefas pendentes`

Objetivo: Confirmar que a lista de tarefas pendentes está correta.

Descrição: Adiciona uma tarefa pendente e verifica se ela aparece na lista de tarefas pendentes.


18. Remover Tarefas Concluídas
Teste: `deve remover todas as tarefas concluídas`

Objetivo: Garantir que todas as tarefas concluídas são removidas.

Descrição: Adiciona uma tarefa concluída e verifica se ela é removida corretamente.


20. Buscar Tarefa por Descrição
Teste: `deve buscar tarefa por descrição`

Objetivo: Confirmar que tarefas podem ser buscadas por uma parte da descrição.

Descrição: Adiciona uma tarefa e verifica se ela pode ser recuperada por uma parte da sua descrição.


22. Adicionar Tag a Tarefa
Teste: `deve adicionar uma tag a uma tarefa`

Objetivo: Verificar se uma tag pode ser adicionada a uma tarefa.

Descrição: Adiciona uma tarefa e uma tag a essa tarefa, e verifica se a tag foi adicionada corretamente.


24. Remover Tag de Tarefa
Teste: `deve remover uma tag de uma tarefa`

Objetivo: Garantir que uma tag pode ser removida de uma tarefa.

Descrição: Adiciona uma tarefa com tags e remove uma tag específica, verificando se a tag foi removida.


26. Listar Tarefas por Tag
Teste: `deve listar tarefas por tag`

Objetivo: Confirmar que tarefas podem ser listadas com base em uma tag.

Descrição: Adiciona uma tarefa com uma tag e verifica se ela é listada corretamente ao buscar por essa tag.


28. Buscar Tarefas por Data
Teste: `deve buscar tarefas por data`

Objetivo: Verificar se tarefas podem ser recuperadas com base na data.

Descrição: Adiciona uma tarefa com uma data específica e verifica se ela pode ser recuperada ao buscar por essa data.


30. Atualizar Prioridade
Teste: `deve atualizar a prioridade de uma tarefa`

Objetivo: Confirmar que a prioridade de uma tarefa pode ser atualizada.

Descrição: Adiciona uma tarefa e altera sua prioridade, verificando se a prioridade foi atualizada corretamente.


32. Listar Tarefas por Prioridade
Teste: `deve listar tarefas por prioridade`

Objetivo: Verificar se tarefas podem ser listadas com base em sua prioridade.

Descrição: Adiciona uma tarefa com uma prioridade específica e verifica se ela é listada corretamente ao buscar por essa prioridade.


34. Contar Tarefas por Prioridade
Teste: `deve contar tarefas por prioridade`

Objetivo: Confirmar que o número de tarefas por prioridade é contado corretamente.

Descrição: Adiciona uma tarefa e verifica a contagem de tarefas para uma prioridade específica.


36. Marcar Todas as Tarefas como Concluídas
Teste: `deve marcar todas as tarefas como concluídas`

Objetivo: Garantir que todas as tarefas possam ser marcadas como concluídas.

Descrição: Adiciona uma tarefa e a marca como concluída, depois marca todas as tarefas como concluídas e verifica o status.


38. Reabrir Tarefa
Teste: `deve reabrir uma tarefa`

Objetivo: Verificar se uma tarefa pode ser reaberta após ser marcada como concluída.

Descrição: Adiciona uma tarefa como concluída e reabre-a, verificando se o status de conclusão foi revertido.


40. Ordenar Tarefas por Data
Teste: `deve ordenar tarefas por data`

Objetivo: Confirmar que as tarefas são ordenadas corretamente por data.

Descrição: Adiciona tarefas com datas diferentes e verifica se elas são ordenadas pela data de forma crescente.


42. Ordenar Tarefas por Prioridade
Teste: `deve ordenar tarefas por prioridade`

Objetivo: Garantir que as tarefas são ordenadas corretamente por prioridade.

Descrição: Adiciona tarefas com prioridades diferentes e verifica se elas são ordenadas pela prioridade de forma crescente.


## GitHub Actions

[![Build and Tests](https://github.com/ugioni/unit-tests-jest/actions/workflows/node.js.yml/badge.svg?branch=master)](https://github.com/ugioni/unit-tests-jest/actions/workflows/node.js.yml)

## SonarCloud

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ugioni_unit-tests-jest&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ugioni_unit-tests-jest)

## Executar Testes

Para executar este projeto, siga os passos abaixo:

Instale o [Node JS](https://nodejs.org/) (versão >= 20.x)
Execute `npm install`  para instalar todas as dependências do projeto.
Execute `npm run test` para executar toda a suíte de testes.
Execute `npm run coverage` para executar toda a suíte de testes com cobertura de código.
Todos os artefatos de execução podem ser encontrados em `./coverage`. Se você quiser remover esses arquivos, execute `npm run clean`.




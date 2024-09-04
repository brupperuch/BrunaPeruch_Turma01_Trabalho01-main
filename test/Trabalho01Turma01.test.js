const GerenciadorDeTarefas = require('../src/Trabalho01Turma01'); // Ajuste o caminho conforme a localização do seu arquivo Trabalho01Turma01.js
describe('GerenciadorDeTarefas', () => {
    let gerenciador;

    beforeEach(() => {
        gerenciador = new GerenciadorDeTarefas();
    });

    test('Deve adicionar uma tarefa com sucesso', () => {
        const tarefa = { id: 1, descricao: 'Comprar leite', concluida: false, prioridade: 2 };
        gerenciador.adicionarTarefa(tarefa);
        expect(gerenciador.listarTarefas()).toContainEqual(tarefa);
    });

    test('Não deve adicionar tarefa com descrição muito curta', () => {
        const tarefa = { id: 2, descricao: 'A', concluida: false, prioridade: 1 };
        expect(() => gerenciador.adicionarTarefa(tarefa)).toThrow('Erro ao cadastrar tarefa');
    });

    test('Deve remover uma tarefa com sucesso', () => {
        const tarefa = { id: 3, descricao: 'Ler livro', concluida: false, prioridade: 1 };
        gerenciador.adicionarTarefa(tarefa);
        gerenciador.removerTarefa(3);
        expect(gerenciador.buscarTarefaPorId(3)).toBeUndefined();
    });

    test('Deve buscar uma tarefa por ID', () => {
        const tarefa = { id: 4, descricao: 'Estudar', concluida: false, prioridade: 3 };
        gerenciador.adicionarTarefa(tarefa);
        expect(gerenciador.buscarTarefaPorId(4)).toEqual(tarefa);
    });

    test('Deve atualizar uma tarefa', () => {
        const tarefa = { id: 5, descricao: 'Trabalhar', concluida: false, prioridade: 2 };
        gerenciador.adicionarTarefa(tarefa);
        gerenciador.atualizarTarefa(5, { descricao: 'Trabalhar muito' });
        expect(gerenciador.buscarTarefaPorId(5).descricao).toBe('Trabalhar muito');
    });

    test('Deve listar todas as tarefas', () => {
        const tarefa1 = { id: 6, descricao: 'Comprar pão', concluida: false, prioridade: 1 };
        const tarefa2 = { id: 7, descricao: 'Fazer exercício', concluida: false, prioridade: 3 };
        gerenciador.adicionarTarefa(tarefa1);
        gerenciador.adicionarTarefa(tarefa2);
        expect(gerenciador.listarTarefas()).toEqual([tarefa1, tarefa2]);
    });

    test('Deve contar o número de tarefas', () => {
        gerenciador.adicionarTarefa({ id: 8, descricao: 'Ler jornal', concluida: false, prioridade: 2 });
        expect(gerenciador.contarTarefas()).toBe(1);
    });

    test('deve marcar uma tarefa como concluída', () => {
        const tarefa = { id: 9, descricao: 'Comprar frutas', concluida: false, prioridade: 1 };
        gerenciador.adicionarTarefa(tarefa);
        gerenciador.marcarTarefaComoConcluida(9);
        expect(gerenciador.buscarTarefaPorId(9).concluida).toBe(true);
    });

    test('deve listar tarefas concluídas', () => {
        const tarefa = { id: 10, descricao: 'Limpar a casa', concluida: true, prioridade: 1 };
        gerenciador.adicionarTarefa(tarefa);
        expect(gerenciador.listarTarefasConcluidas()).toContainEqual(tarefa);
    });

    test('deve listar tarefas pendentes', () => {
        const tarefa = { id: 11, descricao: 'Pagar contas', concluida: false, prioridade: 1 };
        gerenciador.adicionarTarefa(tarefa);
        expect(gerenciador.listarTarefasPendentes()).toContainEqual(tarefa);
    });

    test('deve remover todas as tarefas concluídas', () => {
        const tarefa = { id: 12, descricao: 'Jogar futebol', concluida: true, prioridade: 2 };
        gerenciador.adicionarTarefa(tarefa);
        gerenciador.removerTarefasConcluidas();
        expect(gerenciador.listarTarefas()).not.toContainEqual(tarefa);
    });

    test('deve buscar tarefa por descrição', () => {
        const tarefa = { id: 13, descricao: 'Ir ao médico', concluida: false, prioridade: 3 };
        gerenciador.adicionarTarefa(tarefa);
        expect(gerenciador.buscarTarefaPorDescricao('médico')).toContainEqual(tarefa);
    });

    test('deve adicionar uma tag a uma tarefa', () => {
        const tarefa = { id: 14, descricao: 'Lavar roupa', concluida: false, prioridade: 1 };
        gerenciador.adicionarTarefa(tarefa);
        gerenciador.adicionarTagATarefa(14, 'urgente');
        expect(gerenciador.buscarTarefaPorId(14).tags).toContain('urgente');
    });

    test('deve remover uma tag de uma tarefa', () => {
        const tarefa = { id: 15, descricao: 'Comprar presente', concluida: false, prioridade: 2, tags: ['importante'] };
        gerenciador.adicionarTarefa(tarefa);
        gerenciador.removerTagDaTarefa(15, 'importante');
        expect(gerenciador.buscarTarefaPorId(15).tags).not.toContain('importante');
    });

    test('deve listar tarefas por tag', () => {
        const tarefa = { id: 16, descricao: 'Enviar e-mail', concluida: false, prioridade: 1, tags: ['trabalho'] };
        gerenciador.adicionarTarefa(tarefa);
        expect(gerenciador.listarTarefasPorTag('trabalho')).toContainEqual(tarefa);
    });

    test('deve buscar tarefas por data', () => {
        const tarefa = { id: 17, descricao: 'Fazer relatório', concluida: false, prioridade: 2, data: '2024-09-01' };
        gerenciador.adicionarTarefa(tarefa);
        expect(gerenciador.buscarTarefasPorData('2024-09-01')).toContainEqual(tarefa);
    });

    test('deve atualizar a prioridade de uma tarefa', () => {
        const tarefa = { id: 18, descricao: 'Reunião', concluida: false, prioridade: 1 };
        gerenciador.adicionarTarefa(tarefa);
        gerenciador.atualizarPrioridade(18, 3);
        expect(gerenciador.buscarTarefaPorId(18).prioridade).toBe(3);
    });

    test('deve listar tarefas por prioridade', () => {
        const tarefa = { id: 19, descricao: 'Estudar', concluida: false, prioridade: 2 };
        gerenciador.adicionarTarefa(tarefa);
        expect(gerenciador.listarTarefasPorPrioridade(2)).toContainEqual(tarefa);
    });

    test('deve contar tarefas por prioridade', () => {
        gerenciador.adicionarTarefa({ id: 20, descricao: 'Preparar apresentação', concluida: false, prioridade: 2 });
        expect(gerenciador.contarTarefasPorPrioridade(2)).toBe(1);
    });

    test('deve marcar todas as tarefas como concluídas', () => {
        gerenciador.adicionarTarefa({ id: 21, descricao: 'Comprar livros', concluida: false, prioridade: 1 });
        gerenciador.marcarTodasComoConcluidas();
        expect(gerenciador.listarTarefasConcluidas().length).toBe(1);
    });

    test('deve reabrir uma tarefa', () => {
        const tarefa = { id: 22, descricao: 'Fazer compras', concluida: true, prioridade: 1 };
        gerenciador.adicionarTarefa(tarefa);
        gerenciador.reabrirTarefa(22);
        expect(gerenciador.buscarTarefaPorId(22).concluida).toBe(false);
    });

    test('deve ordenar tarefas por data', () => {
        const tarefa1 = { id: 23, descricao: 'Revisar código', concluida: false, prioridade: 3, data: '2024-09-03' };
        const tarefa2 = { id: 24, descricao: 'Escrever relatório', concluida: false, prioridade: 1, data: '2024-09-01' };
        gerenciador.adicionarTarefa(tarefa1);
        gerenciador.adicionarTarefa(tarefa2);
        gerenciador.ordenarTarefasPorData();
        expect(gerenciador.listarTarefas()).toEqual([tarefa2, tarefa1]);
    });

    test('deve ordenar tarefas por prioridade', () => {
        const tarefa1 = { id: 25, descricao: 'Entregar projeto', concluida: false, prioridade: 3 };
        const tarefa2 = { id: 26, descricao: 'Comprar material', concluida: false, prioridade: 1 };
        gerenciador.adicionarTarefa(tarefa1);
        gerenciador.adicionarTarefa(tarefa2);
        gerenciador.ordenarTarefasPorPrioridade();
        expect(gerenciador.listarTarefas()).toEqual([tarefa2, tarefa1]);
    });
});

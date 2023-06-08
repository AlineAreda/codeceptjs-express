Feature('tasks');

const tasks = new DataTable(['name'])

tasks.add(['Automatizar scripts de Teste'])
tasks.add(['Escrever os scripts de testes'])
tasks.add(['Executar os testes'])
tasks.add(['Evidênciar os testes'])

Data(tasks).Scenario('deve poder cadastrar uma nova tarefa @task', ({ I, tasksPage, current }) => {
    const taskName = current.name

    I.deleteByHelper(taskName)

    tasksPage.create(taskName)
    tasksPage.haveTask(taskName)
}).tag('positive')

Scenario('não deve poder cadastrar tarefa com nome duplicado', ({ I, tasksPage }) => {
    const task = {
        name: 'Levantar cobertura de testes',
        is_done: false
    }

    I.deleteByHelper(task.name)
    I.postTask(task)

    tasksPage.create(task.name)
    tasksPage.popUpHaveText('Task already exists!')
    
}).tag('negative')


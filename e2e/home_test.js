Feature('home')

Scenario('web App deve estar online', ({ I }) => {
    I.amOnPage('/')
    I.seeTitleEquals('Gerencie suas tarefas com Mark L')
})
const { I } = inject();

module.exports = { 
  
  
  create: function (taskName) {
    I.amOnPage('/')
    I.fillField('#newTask', taskName)
    I.click('Create')
  },

  haveTask: function(taskName) {
    I.see(taskName, '.task-item')
  },

  popUpHaveText: function(text) {
    I.see(text, '.swal2-html-container')
  }
}

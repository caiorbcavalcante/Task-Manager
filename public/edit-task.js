const taskIDDOM = document.querySelector('.task-edit-id')
const taskNameDOM = document.querySelector('.task-edit-name')
const taskCompletedDOM = document.querySelector('.task-edit-completed')
const editFormDOM = document.querySelector('.single-task-form')
const editBtnDOM = document.querySelector('.task-edit-btn')
const formAlertDOM = document.querySelector('.form-alert')

const params = window.location.search
const id = new URLSearchParams(params).get('id')
let tempTitle

// Mostra a task no formulário
const showTask = async () => {
  try {
    const { data } = await axios.get(`http://localhost:3000/api/v1/tasks/${id}`)
    const task = data.task

    if (!task) {
      formAlertDOM.style.display = 'block'
      formAlertDOM.textContent = 'Task not found'
      return
    }

    const { _id: taskID, title, completed } = task
    taskIDDOM.textContent = taskID
    taskNameDOM.value = title
    tempTitle = title
    taskCompletedDOM.checked = completed || false
  } catch (error) {
    console.error('Error fetching task:', error)
    formAlertDOM.style.display = 'block'
    formAlertDOM.textContent = 'Error fetching task, please try again'
  }
}

showTask()

// Atualiza a task
editFormDOM.addEventListener('submit', async (e) => {
  e.preventDefault()
  editBtnDOM.textContent = 'Loading...'

  try {
    const updatedTitle = taskNameDOM.value
    const updatedCompleted = taskCompletedDOM.checked

    const { data } = await axios.patch(`http://localhost:3000/api/v1/tasks/${id}`, {
      title: updatedTitle,
      completed: updatedCompleted
    })

    const task = data.task || data // para garantir compatibilidade com seu backend

    taskIDDOM.textContent = task._id
    taskNameDOM.value = task.title
    tempTitle = task.title
    taskCompletedDOM.checked = task.completed || false

    formAlertDOM.style.display = 'block'
    formAlertDOM.textContent = 'Success, task updated!'
    formAlertDOM.classList.add('text-success')
  } catch (error) {
    console.error('Error updating task:', error)
    taskNameDOM.value = tempTitle
    formAlertDOM.style.display = 'block'
    formAlertDOM.textContent = 'Error updating task, please try again'
  } finally {
    editBtnDOM.textContent = 'Edit'
    setTimeout(() => {
      formAlertDOM.style.display = 'none'
      formAlertDOM.classList.remove('text-success')
    }, 3000)
  }
})

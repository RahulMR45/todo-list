document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('tasks');
    document.getElementById('add-task').addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        
        if (taskText) {
            addTask(taskText);
            taskInput.value = '';
            showAlert('Task added successfully!', 'success');
        }
    });

    function addTask(taskText) {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(taskItem);
            showAlert('Task deleted successfully!', 'danger');
        });
        
        taskItem.appendChild(deleteButton);
        taskItem.addEventListener('click', function() {
            taskItem.classList.toggle('completed');
        });
        
        taskList.appendChild(taskItem);
    }

    function showAlert(message, type) {
        const alertDiv = document.createElement('div');
        alertDiv.textContent = message;
        alertDiv.className = `alert alert-${type}`;
        document.body.appendChild(alertDiv);

        setTimeout(() => {
            alertDiv.remove();
        }, 1500);
    }
});
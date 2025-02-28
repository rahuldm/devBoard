const completeButtons = document.querySelectorAll(".completed");
for (const completeButton of completeButtons) {
    completeButton.addEventListener("click", () => {

        const taskValue = document.getElementById('task-assigned').innerText;
        const convertedValue = parseInt(taskValue);
        const updatedValue = convertedValue - 1;
        document.getElementById('task-assigned').innerText = updatedValue;
        const completedTask = document.getElementById('completed-task').innerText;

        const convertedCompletedTask = parseInt(completedTask);
        const updatedCompletedTask = convertedCompletedTask + 1;

        document.getElementById('completed-task').innerText = updatedCompletedTask;
       

        completeButton.disabled = true;
        if (updatedValue === 0) {
            alert("Board update successfully!");
            alert("Congrats !!! You have  completed all the tasks!");
        } else {
            alert("Board update successfully!");
        }
        
    });
   
}

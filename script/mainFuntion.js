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


        const card = completeButton.closest('.card'); 
        const title = card.querySelector("h3").innerText;
        console.log(title);

        const time = getTime();

        const transHistory = document.getElementById('transaction-history');
        const p = document.createElement('p');
        p.style.backgroundColor = "#4CAF50";
        p.style.color = "white"; 
        p.style.padding = "10px"; 
        p.style.margin = "10px auto"; 
        p.style.width = "80%"; 
        p.style.borderRadius = "5px"; 
        p.style.textAlign = "center"; 
        p.innerText = `You have completed the task ${title}  at ${time}`;
        transHistory.appendChild(p);
       

        completeButton.disabled = true;
        if (updatedValue === 0) {
            alert("Board update successfully!");
            alert("Congrats !!! You have  completed all the tasks!");
        } else {
            alert("Board update successfully!");
        }

        
        
    });
   
}
document.getElementById('color').addEventListener('click', function() {
    document.body.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
});

function getTime() {
    const date = new Date();
    const time = date.toLocaleTimeString();
    return time;
}

function getFormattedDate() {
    const date = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

const todayDate = document.getElementById('time').innerText = getFormattedDate();
document.getElementById('discover-page').addEventListener('click', function(event){
    event.preventDefault();
    window.location.href = './blog.html';
}); 





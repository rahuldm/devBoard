document.getElementById('back').addEventListener('click', function(event){
    event.preventDefault();
    console.log("Back to Home");
    window.location.href = './index.html';
});
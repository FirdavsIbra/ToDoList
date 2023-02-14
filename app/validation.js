function validation(){
    if(!todoInput.value){
        alert("Text is empty. Please try again!");
        return;
    }
    if(todoInput.value.length >= 45){
        alert("Text lenght is long. Please try again!");
        setTimeout(function() {
            todoInput.value = "";
          }, 0);
        return;
    }
    const dateArray = date.value.split("-");
    const today = new Date();

    if(new Date(dateArray[0], dateArray[1]-1, dateArray[2]) < today) {
        alert("Input date is earlier than today's date. Please try again!");
        return;
    }

    if(!date.value) {
        alert("Date was not added. Please try again!");
        return;
    }
}
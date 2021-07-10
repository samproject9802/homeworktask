const handleSubmit = () => {
    let title = document.getElementById('titleField').value;
    let desc = document.getElementById('descField').value;

    if (title != "" && desc != "") {
        alert("Your playlist has been added, with the title is "+"' "+title+" '"+" and description is "+"' "+desc+"' ");
    } else {
        alert("Please fill the blank field");
    }
}
const handleSubmit = () => {
    let title = document.getElementById('titleField').value;
    let desc = document.getElementById('descField').value;

    if (title != "" && desc != "") {
        alert("Your playlist has been added, with the title is "+"' "+title+" '"+" and description is "+"' "+desc+"' ");
    } else {
        alert("Please fill the blank field");
    }
}

axios.get('https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json')
    .then(function (response) {
    // handle success
        console.log(response.data.album.images[1].url);
        document.getElementById('playlistthumb').src = response.data.album.images[1].url;
        document.getElementById('trackTitle').innerHTML = response.data.album.name;
        document.getElementById('artist').innerHTML = response.data.album.artists[0].name;
        document.getElementById('album').innerHTML = response.data.album.name;
    })
    .catch(function (error) {
    // handle error
        alert(error);
    })
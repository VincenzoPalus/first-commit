async function aalbums() {

    const albums = [
        "5327691",
        "363906907",
        "217489292",
        "359324967",
        "313482367",
        "65373012",
        "75621062%27%27",
    ]

    console.log(albums)

    for (let k=0 ; k <= (albums.length) ; k++) {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${albums[k]}`);
        const album = await response.json();
        console.log(album);

        
            var title = document.querySelector('#pls');
            var artist = album.contributors
            title.innerHTML += `<div class= "card mb-3 mb-lg-3 ms-3 m-2 p-3 ms-sm-5 ms-md-4 ms-lg-4 m-lg-1 ms-xl-3 m-xxl-2  text-bg-dark rounded-2 border-none" style="width: 13.5rem">
        <img class ="card-img-top rounded-2" src="${album.cover_big}"></img>
        <div class="card-body p-0">
        <div>
            <h3 class="card-title fs-6 pt-3">${album.title}</h3>
            </div>
            <p class= "card-text text-white-50">${artist[0].name}</p>
        </div>
    </div>`;
        

    }


    var button = document.querySelector('#hide_divs');
    button.addEventListener('click', hide);
    function hide() {
        if (title.style.flexWrap === "wrap") {
            title.style.flexWrap = "nowrap";
        } else {
            title.style.flexWrap = "wrap";
        }
    }

}


aalbums()




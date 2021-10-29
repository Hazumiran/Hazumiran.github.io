async function renderMovie() {
    const response = await fetch("film.json");
    const movieJSON = await response.json();

    var coding = "";
    movieJSON.forEach((res) => {
        var htmlSegment = `<div class="card">
        <p><img src="${res.gambar}" width="220px"></p>
                            <h1>${res.judul}</h1>
                            <h2>${res.deskripsi}</h2>                                                        
                            <a href="${res.link}" class="link" target="_blank"><button >Lihat Detail</button></a> 
                        </div>`;

        coding += htmlSegment;
    });

    var container = document.querySelector(".container");
    container.innerHTML = coding;
}
renderMovie();
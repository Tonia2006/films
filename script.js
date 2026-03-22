document.addEventListener('DOMContentLoaded', () => {
    const films =[
        {
            name: "Вовча варта",
            poster: "https://upload.wikimedia.org/wikipedia/en/6/60/Wolfwalkers.png",
            genre: "Фентезі",
            reting: "87",
            year: "2020",
            type: "Мультик"
        },

        {
            name: "Таймлесс: Рубінова книга",
            poster: "https://kinogo.media/uploads/posts/2021-10/1634995417_iphone360_707257.jpg",
            genre: "Романтика",
            reting: "60",
            year: "2013",
            type: "фільм"
        },

        {
            name: "Чорнильне сердце",
            poster: "https://uaserials.com/posters/6971.jpg",
            genre: "Фентезі",
            reting: "61",
            year: "2008",
            type: "фільм"
        },

        {
            name: "Ван Піс",
            poster: "https://eneyida.tv/uploads/posts/2020-06/1591197109_1.jpg",
            genre: "Комедія",
            reting: "90",
            year: "1999",
            type: "аніме"
        },

        {
            name: "Сім'я Шпигуна",
            poster: "https://cdn.hikka.io/content/anime/spy-x-family-season-3-21987e/6PDeSrA_uppS3F7OEl6U-A.jpg",
            genre: "Комедія",
            reting: "82",
            year: "2022",
            type: "аніме"
        },

        {
            name: "Вонка",
            poster: "https://cdn-ksvod.kyivstar.ua/content/HLS/VOD/IMAGE4/658b0087e4b0e5834e90e659/IMAGE_2_3_XL.jpg",
            genre: "Сімейне",
            reting: "69",
            year: "2023",
            type: "фільм"
        },
    ]

    function addMovie() {
        const title = document.getElementById("name-input").value;
        const genre = document.getElementById("genre-input").value;
        const rating = document.getElementById("rating-input").value;
        const img = document.getElementById("image-input").value;
        const year = document.getElementById("year-input").value;
        const type = document.getElementById("type-input").value;

        
      
        const movie = {
          name: title,
          poster: img,
          genre: genre,
          reting: rating,
          year: Number(year),
          type: type

        };
      
        films.push(movie);
        create_block(movie);
      }

    const add = document.querySelector("button")
    add.addEventListener('click', addMovie)

    const library = document.querySelector(".library")

    function create_block(film) {
        const block = document.createElement('div')
        block.classList.add('card')

        const img = document.createElement('img')
        img.src = film['poster']
        img.classList.add("img-html")

        const name = document.createElement('h3')
        name.classList.add('name-html')
        name.textContent = film.name

        const reting = document.createElement('p')
        reting.classList.add("reting-html")
        reting.textContent = "Рейтинг: " + film.reting

        const year = document.createElement('p')
        year.classList.add("year-html")
        year.textContent = "Рік виходу: " + film.year

        const type = document.createElement('p')
        type.classList.add("type-html")
        type.textContent = "Тип: " + film.type

        const genre = document.createElement("p")
        genre.classList.add("genre-html")
        genre.textContent = "Жанр: " + film.genre

        block.appendChild(name)
        block.appendChild(img)
        block.appendChild(genre)
        block.appendChild(reting)
        block.appendChild(year)
        block.appendChild(type)
        
        library.appendChild(block)
    }
    
    for (let i = 0; i < films.length; i += 1) {
        create_block(films[i])
    }

})
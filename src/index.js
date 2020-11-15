import axios from 'axios';

const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=car`;
let page = '&page=$1';
const perPage = `&per_page=12`;
const key = `&key=15900106-2c235e732bb321ca7ec900d93`;

const divImg = document.querySelector('div');

axios.get(url + page + perPage + key)
    .then(response => {
        console.log(response);
        const { hits } = response.data;
        // hits.map(el => {
        // const img = document.createElement('img');
        //     img.setAttribute('src', el.largeImageURL);
        //     divImg.prepend(img)
        // })
        const murkup = hits.reduce((acc, el) => acc + `<img src=${el.largeImageURL}>`, '');
        divImg.insertAdjacentHTML("beforeend", murkup)
        console.log(hits)
    })
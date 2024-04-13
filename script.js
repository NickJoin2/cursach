// слайдер первый -----------------------------------------------------------------

let slidesIndex = 0;

const items = document.querySelectorAll('.item');

const slideshow = () => {
    for (let i = 0; i < items.length; i++) {
        items[i].style.display = 'none';
    }

    slidesIndex++;

    if (slidesIndex >= items.length) {
        slidesIndex = 0;
    }

    items[slidesIndex].style.display = "block";
}

slideshow();

let intervalId;

// const interval = () => {
//     intervalId = setInterval(() => {
//         slideshow();
//     }, 4000);
// }

interval();

const imgs = document.querySelectorAll('.img');

imgs.forEach(img => {
    img.addEventListener('mouseover', function () {
        console.log('очищает интервал')
        clearInterval(intervalId);
    });

    img.addEventListener('mouseout', function () {
        console.log('запускает интервал')
        interval();
    });
})
// слайдер первый -----------------------------------------------------------------

// render ul lista -----------------------------------------------------------------

const ul = document.querySelector('#render__list');
// const dataRender = [
//     {
//         id: 1,
//         img: "https://avatars.mds.yandex.net/get-marketcms/1776516/img-0426bd11-ad00-4c88-9874-f8d3196e92d1.jpeg/optimize",
//         title: 'Хохломскую роспись',
//         text: "Хохломскую роспись традиционный русский стиль декоративно-прикладного искусства, основанный на росписи предметов домашнего обихода",
//         data: "25 февраля 2024",
//         button: 1,
//     },
//     {
//         id: 2,
//         img: "https://avatars.mds.yandex.net/get-marketcms/944743/img-8ef9c236-c35b-40f1-b6b5-c214f2e414a8.jpeg/optimize",
//         title: 'Гжельская роспись',
//         text: "Гжельская роспись: традиционный вид русского фарфора и керамики, характеризующийся яркими синими и белыми узорами на голубом фоне.",
//         data: "12 март 2021",
//         button: 2,
//     },
//     {
//         id: 3,
//         img: "https://avatars.mds.yandex.net/get-marketcms/944743/img-910bc401-a554-4efd-a12d-4c2c83716b55.jpeg/optimize",
//         title: 'Палехская миниатюр',
//         text: "Палехская миниатюра: техника росписи деревянных изделий, таких как шкатулки и игрушки, с использованием ярких красок и узоров.",
//         data: "01 июнь 2024",
//         button: 3,
//     },
//     {
//         id: 4,
//         img: "https://avatars.mds.yandex.net/get-marketcms/1490511/img-f4344806-54f1-49a3-aa46-7093c2b8727a.jpeg/optimize",
//         title: 'Русский народный танец',
//         text: "Русский народный танец: множество разнообразных танцевальных стилей, отражающих культуру и традиции различных регионов России.",
//         data: "03 май 2021",
//         button: 4,
//     }
//     ,
//     {
//         id: 5,
//         img: "https://avatars.mds.yandex.net/get-vertis-journal/4471904/DSCF5957_08.jpg_1697821810863/845x845",
//         title: 'Кукольный театр',
//         text: "Кукольный театр: популярная форма народного искусства, включающая представления с использованием театральных кукол ",
//         data: "28 декабря 2022",
//         button: 5,
//     },
//     {
//         id: 6,
//         img: "https://avatars.mds.yandex.net/get-marketcms/1534436/img-7bef8e5a-2551-48d2-9fc5-fc3d391ccf0f.jpeg/optimize",
//         title: 'Коклевание',
//         text: "Коклевание: традиционное русское ремесло, при помощи которого создаются узоры и изображения из разноцветных нитей на тканях.",
//         data: "21 февраля 2023",
//         button: 6,
//     },
//     {
//         id: 7,
//         img: "https://avatars.mds.yandex.net/get-marketcms/879900/img-3f30f55b-aed6-436e-8171-74311874997e.jpeg/optimize",
//         title: 'Лепка из глины',
//         text: "Лепка из глины: традиционное народное искусство, включающее создание различных фигур и украшений используемых в быту,из глины.",
//         data: "18 апрель 2022",
//         button: 7,
//     },
//     {
//         id: 8,
//         img: "https://avatars.mds.yandex.net/get-marketcms/879900/img-3f30f55b-aed6-436e-8171-74311874997e.jpeg/optimize",
//         title: 'Русская народная музыка',
//         text: "Русская народная музыка: богатое наследие народных песен, мелодий и инструментальной музыки, отражающее историю и дух народа.",
//         data: "29 август 2022",
//         button: 8,
//     },
//     {
//         id: 9,
//         img: "https://avatars.mds.yandex.net/get-marketcms/1534436/img-85ec6e8c-4783-46ca-ad8a-4a848502b216.jpeg/optimize",
//         title: 'Вышивка',
//         text: "Вышивка: популярное русское ремесло, включающее создание узоров и украшений на тканях с использованием разноцветных нитей.",
//         data: "01 августа 2019",
//         button: 9
//     },
// ]


const submit = async () => {

        const response = await fetch('data.json');

        const data = await response.json();
    console.log(data)


    for (let i = 0; i < data.length; i++) {
        const element = document.createElement('div')
        element.classList.add('col');
        element.innerHTML = `
                        <div class="card shadow-sm">
                            <img src="${data[i].img}" style="max-height: 254px" alt="">
                            <div class="card-body">
                            <b>${data[i].title}</b>
                                <p class="card-text">${data[i].text}</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-outline-primary fw-semibold" onclick="handleClick(${data[i].button - 1})">Узнать больше</button>
                                    </div>
                                    <small class="text-body-secondary">${data[i].data}</small>
                                </div>
                            </div>
                        </div>`
        ul.appendChild(element)
    }
}

submit()





const windowModal = document.querySelector('#modal-window')
const handleClick = (id) => {
    windowModal.innerHTML = `<div class="modal modal-sheet position-fixed top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center bg-body-secondary" id="modal">
        <div class="modal-dialog">
            <div class="modal-content rounded-4 shadow">

                <div class="modal-header border-bottom-0 d-flex flex-column">
                    <button type="button" class="btn-close mb-2" id="closeBtn"></button>
                    <img src="${dataRender[id].img}" class="img-thumbnail" alt="">
                    <h1 class="modal-title fs-5">${dataRender[id].title}</h1>
                </div>

                <div class="modal-body py-0">
                    <p>${dataRender[id].text}</p>
                </div>

            </div>
        </div>
    </div>`

    const btnClose = document.querySelector('#closeBtn')
    btnClose.addEventListener('click', function () {
        windowModal.innerHTML = ''
    })
}















// const baseUrl = 'https://randomfox.ca/floof';
const baseUrl = 'https://api.chucknorris.io/jokes/random';

const trocaImg = async () => {
    try {
        const data = await fetch(baseUrl);
        const json = await data.json();
        return json.image;
    } catch (error) {
        console.log(error.message);
    }
};

const loadImg = async ()=>{
    const img = document.getElementsByTagName('img')[0];
    img.src = await trocaImg();
}
loadImg();

const btn = document.getElementById('trocaImg');
btn.addEventListener('click', loadImg);
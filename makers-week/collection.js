let collectionSections = document.querySelectorAll('div.collection-story');
let lists = document.querySelectorAll('.collection-list');
activeLink = (li) => {
    lists.forEach((item) => item.classList.remove('active'));
    li.classList.add('active');
};
lists.forEach((item) => {
    item.addEventListener('click', () => activeLink(this));
});

window.onscroll = () => {
    section.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            const target = document.querySelector(`[href='#${id}']`).parentElement;
            activeLink(target);
        }
    });
}
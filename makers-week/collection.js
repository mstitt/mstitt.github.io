let collectionSections = document.querySelectorAll('div.collection-story');
let lists = document.querySelectorAll('.collection-list');
const firstOffset = collectionSections[0].offsetTop;
activeLink = (li) => {
    lists.forEach((item) => item.classList.remove('active'));
    li.classList.add('active');
};
lists.forEach((item) => {
    item.addEventListener('click', () => activeLink(this));
});

setActiveLink = () => {
    collectionSections.forEach((sec) => {
        let top = window.scrollY + 40;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        console.log('top', top);

        if (offset === firstOffset) {
            activeLink(lists[0]);
        }

        if (top >= offset && top < offset + height) {
            const target = document.querySelector(`[href='#${id}']`).parentElement;
            activeLink(target);
        }
    });
};

window.onload = () => {
    setActiveLink();
}

window.onscroll = () => {
    setActiveLink();
}
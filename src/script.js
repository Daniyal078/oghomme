document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');

    const activeLink = localStorage.getItem('activeLink');
    if (activeLink) {
        links.forEach(link => link.classList.remove('text-red-700'));
        const savedLink = document.querySelector(`nav ul li a[href="${activeLink}"]`);
        if (savedLink) {
            savedLink.classList.add('text-red-700');
        }
    }

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            links.forEach(link => link.classList.remove('text-red-700'));

            event.target.classList.add('text-red-700');

            localStorage.setItem('activeLink', event.target.getAttribute('href'));
        });
    });
});



document.querySelector('.sideNav-tog').addEventListener('click', () => {
    document.querySelector('.sideNav').classList.remove('left-[-100%]')
    document.querySelector('.mask').classList.remove('hidden')
    document.querySelector('.sideNav').classList.add('left-0')
})
document.querySelector('.sideNavClose').addEventListener('click', () => {
    document.querySelector('.sideNav').classList.add('left-[-100%]')
    document.querySelector('.mask').classList.add('hidden')
    document.querySelector('.sideNav').classList.remove('left-0')
})

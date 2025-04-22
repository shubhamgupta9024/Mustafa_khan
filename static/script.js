
```js
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: { delay: 3000, disableOnInteraction: false },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        pagination: { el: '.swiper-pagination', clickable: true }
    });
});
```
<script>
document.querySelectorAll('.media').forEach(media => {
    media.addEventListener('click', () => {
        media.classList.toggle('clicked');
    });
});
<script/>

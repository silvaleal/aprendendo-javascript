let themeButton = document.getElementById('page-theme')

themeButton.addEventListener('change', function () {
    document.body.classList.toggle('dark')
})
const spinnerLoading = document.querySelector('.spinner_loading')

window.addEventListener('load', () => {
    spinnerLoading.classList.remove('active-loading')
    spinnerLoading.classList.remove('preloading')
})
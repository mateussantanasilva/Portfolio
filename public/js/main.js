/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: '800',
    delay: 300
})

// Delay da home após pre loading
sr.reveal(`
    .home_data
`, { delay: 900 })

sr.reveal(`
    .home_handle
`, { delay: 1400 })

sr.reveal(`
    .home_social, .home_scroll
`, { delay: 1600, origin: 'bottom' })

// Restante da página
sr.reveal(`
    .section_subtitle
`)

sr.reveal(`
    .section_title,
    .footer_title
`, { delay: 500 })

sr.reveal(`
    .footer_copy 
`, { delay: 700, origin: 'bottom' })

sr.reveal(`
    .about_container,
    .skills_content,
    .services_container,
    .work_container,
    .contact_container,
    .footer_list, .footer_social
`, { delay: 800 })

/*=============== THEME COLOR ===============*/
const bodyElement = document.body
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Obtendo o tema contrário ao atual
const getContraryTheme = () => bodyElement.classList.contains(lightTheme) ? 'dark' : 'light'
const getContraryIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// Saber qual tema contrário ao atual no localStorage
const contrarySelectedTheme = localStorage.getItem('contrary-theme')
const contrarySelectedIcon = localStorage.getItem('contrary-icon')

// Verificando se o usuário alterou o tema quando reabrir a página
if (contrarySelectedTheme) {
    // trocando o tema atual
    bodyElement.classList[contrarySelectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
    themeButton.classList[contrarySelectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Ativação do botão de temas
themeButton.addEventListener('click', () => {
    // Alterando tema e ícone
    bodyElement.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // Salvando as preferências atuais
    localStorage.setItem('contrary-theme', getContraryTheme())
    localStorage.setItem('contrary-icon', getContraryIcon())
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

// Pegar todas as seções que possuem um id
const sections = document.querySelectorAll('section[id]')

//Fazer uma função scrollActive
const scrollActive = () => {
    // Pegar o valor da localização atual de onde estamos na página
    const scrollY = window.pageYOffset

    //para cada seção
    sections.forEach((section) => {
        //pegar a altura a acrescentar um topo negativo de 58 para não precisar o titulo bater no topo
        const sectionHeight = section.offsetHeight
        const sectionTop = section.offsetTop - 58
        const sectionHeightComplete = sectionTop + sectionHeight

        //pegar o id de cada seção
        const sectionId = section.getAttribute('id')

        //pegar cada bolinha de opção de menu que tem no nav_menu
        const optionMenu = document.querySelector(`.nav_menu a[href*= ${sectionId} ]`)

        //verificar se Chegou no começo de qual seção e se já não passou da sessão
        scrollY > sectionTop && scrollY <= sectionHeightComplete ?
            //Caso sim, acrescentar a bolinha uma class active
            optionMenu.classList.add('active-link') :
            optionMenu.classList.remove('active-link')
    })
}

// Fazer com que a window quando acontecer o scroll, rodar a função
window.addEventListener('scroll', scrollActive)

/*=============== SWIPER Work ===============*/
var swiper = new Swiper(".work_container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 48
        }
    }
});

/*=============== SERVICES MODAL ===============*/
const containerService = document.querySelector('.services_container')
const modalViews = document.querySelectorAll('.services_modal')
const modalButtons = document.querySelectorAll('.services_button')
const modalCloses = document.querySelectorAll('.services_modal-close')
const modalContact = document.querySelector('.contact_modal')

function openModal(modalClick) {
    containerService.setAttribute('style', '')
    bodyElement.classList.add('modal-active-body')
    modalViews[modalClick].classList.add('active-modal')
}

modalButtons.forEach((button, position) => {
    button.addEventListener('click', () => openModal(position))
})

modalCloses.forEach((close) => {
    close.addEventListener('click', () => {
        modalViews.forEach((modal) => modal.classList.remove('active-modal'))
        bodyElement.classList.remove('modal-active-body')
        modalContact.classList.remove('active-modal')
    })
})

/*=============== SEND EMAIL ===============*/
const formContact = document.querySelector('.contact_form')

$(document).ready((event) => {
    $(formContact).submit((event) => {
        event.preventDefault()
        spinnerLoading.classList.add('active-loading')
        document.body.classList.add('modal-active-body')

        const name = $('#input-name').val()
        const email = $('#input-email').val()
        const message = $('#input-message').val()

        $.ajax({
            url: '/send',
            type: 'POST',
            data: { name: name, email: email, message: message },
            success: () => {
                spinnerLoading.classList.remove('active-loading')
                modalContact.classList.add('active-modal')

                $('#input-name').val('')
                $('#input-email').val('')
                $('#input-message').val('')
            }
        })
    })
})
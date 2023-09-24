window.onload = function () {
    const pw_showhide = document.querySelector('.pw_showhide')
    const input_id = document.querySelector('input[type=text]')
    const input_pw = document.querySelector('input[type=password]')
    const id_error = document.querySelector('.id_error')
    const pw_error = document.querySelector('.pw_error')

    console.log(pw_showhide, input_id, input_pw, id_error, pw_error)

    input_id.addEventListener('click', function () {
        id_error.style.display = 'block'
    })
    input_pw.addEventListener('click', function () {
        pw_error.style.display = 'block'
    })

    let i = true
    pw_showhide.addEventListener('click', function () {
        if (i == true) {
            i = false
            pw_showhide.style.backgroundPosition = '-126px 0'
            i = false
        } else {
            pw_showhide.style.backgroundPosition = '-105px 0'
            i = true
        }
    }

    )
}
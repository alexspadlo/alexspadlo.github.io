const removeDnone = (str) => {
    return str?.replaceAll?.('d-none', '')?.trim?.()
}
const myFunk = () => {
    // inputs elements DOM
    const firstN = document.getElementById('firstname')
    const lastN = document.getElementById('lastname')
    const userAge = document.getElementById('ageinput')
    // message elements DOM
    const successMsg = document.getElementById('success')
    const errorMsg = document.getElementById('error')
    const dataUser = document.getElementById('datauser')
    // dnone cleanup STRING
    const successNodnone = removeDnone(successMsg.className)
    const errorNoDnone = removeDnone(errorMsg.className)
    const dtUsernoDnone = removeDnone(dataUser.className)
    if (!firstN?.value || !lastN?.value || !userAge?.value) {
        // show error
        dataUser.className = `${dtUsernoDnone} d-none`
        successMsg.className = `${successNodnone} d-none`
        errorMsg.className = errorNoDnone
    } else {
        // Success
        errorMsg.className = `${errorNoDnone} d-none`
        successMsg.className = successNodnone
        dataUser.textContent = `Name: ${firstN?.value} ${lastN?.value}, Age: ${userAge?.value}`
        dataUser.className = dtUsernoDnone
        firstN.value = ''
        lastN.value = ''
        userAge.value = ''
    }
    return null
}

window.addEventListener('load', () => {
    const myButton = document.getElementById('submitClick')
    return myButton.addEventListener('click', myFunk)
})
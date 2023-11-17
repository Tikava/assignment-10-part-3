export function setupGreeter() {
    const greeterInput = document.querySelector('#greeter')
    const greeterButton = document.querySelector('#greeter-bttn')
    const greetingMessage = document.querySelector('#greeting-message')

    let setGreeting = () => {
        greetingMessage.innerHTML = `Hello ${greeterInput.value || 'User'}`
    }

    greeterButton.addEventListener('click', setGreeting)

    setGreeting()  // Sets initial greeting
}


let mode = {
    development_mode: true,
}

const App_URL = mode.development_mode? 'http://127.0.0.1:8000/api' : ''

export default {
    App_URL,
}
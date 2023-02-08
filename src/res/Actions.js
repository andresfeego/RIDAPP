export const setUsuario = (auxi) => {
    return {
        type: 'SET_USUARIO',
        usuario: auxi
    }
}

export const clearUsuario = () => {
    return {
        type: 'CLEAR_USUARIO'
    }
}
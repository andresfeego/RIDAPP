import { errorText, HelpTexts } from "./HelpTexts"

export const validaUsuario = (text) => {
    return new Promise((resolve, reject) => {
        var newText = 'andres'
        resolve({error: true,text: newText, errorText: errorText.Email1})
    })
}


export const validaPassword = (text) => {
    return new Promise((resolve, reject) => {
        var newText = 'andres'
        resolve({error: true,text: newText, errorText: HelpTexts.ayudaEmail})
    })
}
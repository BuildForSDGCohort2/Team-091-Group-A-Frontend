import jwt_decode from 'jwt-decode'

export const saveToken = (token) => {
    localStorage.setItem('christianconnectauthtoken', token)
}

export const getToken = () => {
    return localStorage.getItem('christianconnectauthtoken')
}

export const setAuthToken = () => {
    return `Bearer ${localStorage.getItem('christianconnectauthtoken')}`
}

export const isLoggedIn = () => {
    if(getToken() === null || getToken() === undefined){
        return false
    }

    try{
        let { exp } = jwt_decode(getToken())
        if( exp < Math.ceil(new Date().getTime() / 1000)){
        localStorage.removeItem('christianconnectauthtoken')
        return false
        }
    }catch(e){
        return false
    }
        return true
}

export const logout = () => {
    localStorage.removeItem('christianconnectauthtoken')
    refreshCurrentPage()
}

const refreshCurrentPage = () => {
    if(!localStorage.getItem('christianconnectauthtoken')){
        window.location.reload()
    }
}



import jwt_decode from 'jwt-decode'

export const saveToken = (token) => {
    localStorage.setItem('transAllToken', token)
}

export const getToken = () => {
    return localStorage.getItem('transAllToken')
}

export const setAuthToken = () => {
    return `Bearer ${localStorage.getItem('transAllToken')}`
}

export const isLoggedIn = () => {
    if(getToken() === null || getToken() === undefined){
        return false
    }

    try{
        let { exp } = jwt_decode(getToken())
        if( exp < Math.ceil(new Date().getTime() / 1000)){
        localStorage.removeItem('transAllToken')
        return false
        }
    }catch(e){
        return false
    }
        return true
}

export const logout = () => {
    localStorage.removeItem('transAllToken')
    refreshCurrentPage()
}

const refreshCurrentPage = () => {
    if(!localStorage.getItem('transAllToken')){
        window.location.reload()
    }
}



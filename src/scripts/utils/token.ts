export const getToken = () => {
    const KEY_TOKEN = process.env.REACT_APP_KEY_TOKEN as string
    const isAuth = document.cookie.match(new RegExp("(?:^|; )" + KEY_TOKEN.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));


    return {
        isAuth: isAuth ? true : false,
        token: isAuth ? decodeURIComponent(isAuth[1]) : undefined
    };
}

export const cleanToken = () => {
    const KEY_TOKEN = process.env.REACT_APP_KEY_TOKEN as string

    document.cookie = `${KEY_TOKEN}=; Max-Age=0; path=/`;
}
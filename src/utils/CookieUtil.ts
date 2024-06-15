// Получение значения cookie по имени
function setCookie(name: string, data: any, days: number) {
    try {
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + days);
        const cookieValue = `${name}=${encodeURIComponent(JSON.stringify(data))}; expires=${expirationDate.toUTCString()}; path=/`;
        document.cookie = cookieValue;
        console.log("cookies tokens setted");

    } catch (error) {
        console.log(error);

    }

}

// Получение данных из cookie
function getCookie(name: string): any | null {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=');
        if (cookieName === name) {
            return JSON.parse(decodeURIComponent(cookieValue));
        }
    }
    return null;
}


// Удаление cookie по имени
function deleteCookie(name: string) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}

function isCookieExpired(name: string) {
    let cookieValue = getCookie(name);
    if (!cookieValue) {
        // Кука не найдена
        return true;
    }

    // Здесь можно использовать специфичную для вашего приложения логику
    // Например, если кука хранит информацию о времени истечения
    // или вы можете использовать document.cookie для получения куки и её параметров.

    // Предположим, что кука хранит время истечения в формате Unix timestamp
    let expiryTime = parseInt(cookieValue); // Пример, если кука хранит время истечения
    let currentTime = Math.floor(Date.now() / 1000); // Текущее время в формате Unix timestamp

    return currentTime > expiryTime;
}
export {
    getCookie,
    isCookieExpired,
    deleteCookie,
    setCookie
}
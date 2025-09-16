// Saves json data as a cookie.


const cookies = document.cookie

class choccyChips {

    constructor(data={}, cookie_name="UserData") {
        this.json_string = JSON.stringify(data)
        this.cookie_name = cookie_name
    }


    saveCookie(this, json_string) {
        document.cookie = `${this.cookie_name}=${json_string}`
    }

    loadCookie(this) { // loads as a JSON object
        if (checkCookie(this) === false) {
            console.log("Cookie not found. Try checking if the user has the cookie first.")
            return
        }


        const cookie_split = cookies.split(';')

        let my_data_cookie = ''
        for (let i = 0; i < cookie_split.length; i++) {
            let cookie = cookie_split[1].trim()
            my_data_cookie = cookie.substring(`${this.cookie_name}=`.length)
            break
        }
    }

    checkCookie(this) { // Checks if the cookie exists
        const cookie_split = cookies.split(';')
        for (let i = 0; i < cookie_split.length; i++) {
            let cookie = cookie[1].trim()
            if (cookie.startsWith(`${this.cookie_name}=`)) {
                return true
            } else {
                return false
            }
        }
    }
}
    



import { ChatPage } from "../page-objects/chatPage.js"

class Pages {
    constructor(){
        this.chatPage = new ChatPage()
    }
}

export const pages = new Pages()
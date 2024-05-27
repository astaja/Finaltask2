import { pages } from "../support/pages";

export class ChatPageTest {
    
    async openChatPage(){
        await browser.url('https://demos.mqtt.cool/chat/');
        await browser.maximizeWindow()
    }

    async fillNickname(nickname){
        await pages.chatPage.getNicknameInput().setValue(nickname)
    }

    async pressConnectButton(){
        await pages.chatPage.getConnectButton().click()
    }
    
    async fillMessage(message){
        await pages.chatPage.getMessageInput().setValue(message)
    }

    async sendMessage(){
        await pages.chatPage.getReplyBtn().click()
    }

    async assertUserConnected(){
        await pages.chatPage.getConnected().waitForDisplayed()
        await expect(pages.chatPage.getConnected()).toHaveText("Connected to the MQTT.Cool server")
    }

    async chatIsVisible(){
        await pages.chatPage.getChatContainer().waitForDisplayed()
        await expect(await pages.chatPage.getChatContainer()).toBeDisplayed()
    }
    
    async chatMsgVisible(){
        await pages.chatPage.getChatMessage().waitForDisplayed();
        await expect(await pages.chatPage.getChatMessage()).toBeDisplayed();
    }

    async openTab(){
        let firstTabId = await browser.getWindowHandle()
        await browser.switchToWindow(firstTabId)
        await browser.newWindow('https://demos.mqtt.cool/chat/')
    }

    async firstTab(){
        await browser.switchWindow('https://demos.mqtt.cool/chat/')
    }

    async userDisconnect(){
        await pages.chatPage.getDisconnect().click()
    }

    async userNotInList(){
        await expect(pages.chatPage.getUserList()).not.toHaveText("User0001")
    }


}
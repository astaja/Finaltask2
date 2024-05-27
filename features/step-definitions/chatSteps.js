import { Given, When, Then } from '@wdio/cucumber-framework';
import { tests } from '../support/tests.js';

When('User1 opens chat window', async()=>{
    await tests.chatPageTest.openChatPage()
})

Then('Chat window is visible', async()=>{
    await tests.chatPageTest.chatIsVisible()
})

When('User1 connects to the server', async()=>{
    await tests.chatPageTest.assertUserConnected()
})

When(/^User1 enters (.*)$/, async (nickname)=>{
    await tests.chatPageTest.fillNickname(nickname)
})

When('User1 connects', async()=>{
    await tests.chatPageTest.pressConnectButton()
})

When(/^User1 sends a message (.*)$/, async(message)=>{
    await tests.chatPageTest.fillMessage(message)
    await tests.chatPageTest.sendMessage()
})

Then(/^(.*) from User1 is visible$/, async(message)=>{
    await tests.chatPageTest.chatMsgVisible(message)
})

When('User1 opens another browser tab', async()=>{
    await tests.chatPageTest.openTab()
})

Then('User2 connects to the server', async()=>{
    await tests.chatPageTest.assertUserConnected()
})

When(/^User2 enters (.*)$/, async(nickname)=>{
    await tests.chatPageTest.fillNickname(nickname)
})

When('User2 connects', async()=>{
    await tests.chatPageTest.pressConnectButton()
})

When(/^User2 replies with a message (.*)$/, async(message)=>{
    await tests.chatPageTest.fillMessage(message)
    await tests.chatPageTest.sendMessage()
})

When('User2 goes back to the first browser tab', async()=>{
    await tests.chatPageTest.firstTab()
})

Then(/^(.*) from User2 is visible$/, async(message)=>{
    await tests.chatPageTest.chatMsgVisible(message)
})

When('User1 disconnects', async()=>{
    await tests.chatPageTest.userDisconnect()
})

Then('User1 is not in the list', async()=>{
    await tests.chatPageTest.userNotInList()
})




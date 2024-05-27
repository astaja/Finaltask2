export class ChatPage { 
    
    getNicknameInput(){      
        return $('#user')
    }

    getConnectButton(){      
        return $('#connectBtn')
    }

    getMessageInput(){      
        return $('#sendMessage')
    }

    getReplyButton(){      
        return $('#replyBtn')
    }

    getConnected(){
        return $('.text-success')
    }

    getChatMessage(){
        return $('#messages .loggedUser')
    }

    getReplyBtn(){
        return $('#replyBtn')
    }

    getChatContainer(){
        return $('#chat')
    }

    getDisconnect(){
        return $('#disconnectBtn')
    }
    
    getUserList(){
        return $('#usersList')
    }

}

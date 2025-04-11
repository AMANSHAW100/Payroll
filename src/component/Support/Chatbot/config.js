import { createChatBotMessage } from 'react-chatbot-kit';
import Avatar from './Avatar';
import StartBtn from './StartBtn';
import StartSlow from './StartSlow'
const config = {
  initialMessages: [createChatBotMessage(`Welcome to Salary Book Advisor `,{
    widget: "startBtn"
  })],
  botName: 'Salary Books Bot',
  customComponents: {
        userAvatar: (props) => <Avatar {...props}/>
      },
      widgets:[
        {
          widgetName:"startBtn",
          widgetFunc:(props)=><StartBtn {...props}/>
        },
        {
          widgetName:"startSlow",
          widgetFunc:(props)=><StartSlow {...props}/>
        }
      ]
};

export default config;
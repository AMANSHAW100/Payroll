import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {


const initialAction=()=>{
  const message=createChatBotMessage('Please enter your name');
  updateState(message,"age")
}

const afterNameMessage=()=>{
  const message=createChatBotMessage('Please enter your age');
  updateState(message,"prefrance")
}


const afterAgeMessage=()=>{
  const message=createChatBotMessage('Please enter your company');
  updateState(message,"prefrance1")
}

const aftercompanyMessage=()=>{
  const message=createChatBotMessage('Please enter your father name',{
    widget: "startSlow"
  })
  updateState(message)
}


  const updateState=(message,checker="")=>{
    
    setState((prev)=>({
        ...prev,
        messages: [...prev.messages, message],
        checker
    }))
  }
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            initialAction,afterNameMessage,afterAgeMessage,aftercompanyMessage
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
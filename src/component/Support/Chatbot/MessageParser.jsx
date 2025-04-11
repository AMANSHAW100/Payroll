import React from 'react';

const MessageParser = ({ children, actions }) => {
  console.log(children);
  const parse = (message) => {
    // if(message.includes('Abir')){
    //   console.log("verified");
    // }
    if(children.props.state.checker === 'age'){
        actions.afterNameMessage();
    }

    if(children.props.state.checker === 'prefrance' && Number(message)){
      actions.afterAgeMessage();
  }
  if(children.props.state.checker === 'prefrance1'){
    actions.aftercompanyMessage();
}
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions ,
        });
      })}
    </div>
  );
};

export default MessageParser;
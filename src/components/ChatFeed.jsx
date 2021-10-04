import MessageForm from "./MessageForm";
import MyMsg from "./MyMsg";
import TheirMsg from "./TheirMsg";

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;

  const chat = chats && chats[activeChat]; //it means if 'chats' exist find activeChat

  const renderReadReceipts = (message, isMyMsg) => {
    return chat.people.map(
      (person, index) =>
        person.last_read === message.id && (
          <div
            key={`read_${index}`}
            className="read-receipts"
            style={{
              float: isMyMsg ? "right" : "left",
              backgroundImage: `url(${person?.person?.avatar})`,
            }}
          />
        )
    );
  };

  const renderMessages = () => {
    const keys = Object.keys(messages);

    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : messages[index - 1];
      const isMyMsg = userName === message.sender.username;

      return (
        <div key={`msg_${index}`} style={{ width: "100%" }}>
          <div className="message-block">
            {isMyMsg ? (
              <MyMsg message={message} />
            ) : (
              <TheirMsg
                message={message}
                lastMessage={messages[lastMessageKey]}
              />
            )}
          </div>
          <div
            className="read-receipts"
            style={{
              marginRight: isMyMsg ? "18px" : "0px",
              marginLeft: isMyMsg ? "0px" : "68px",
            }}
          >
            {renderReadReceipts(message, isMyMsg)}
          </div>
        </div>
      );
    });
  };

  if (!chat) return "No Chats..";

  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat?.title}</div>
        <div className="chat-subtitle">
          {chat?.people.map((person) => `${person.person.username}`)}
        </div>
        {renderMessages()}
        <div style={{ height: "100px" }} />
        <div className="message-form-container">
          <MessageForm {...props} chatId={activeChat} />
        </div>
      </div>
    </div>
  );
};

export default ChatFeed;

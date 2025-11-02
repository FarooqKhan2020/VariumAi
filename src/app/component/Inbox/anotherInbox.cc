"use client";
import React, { useState } from 'react';
import { 
  FaSearch, FaEnvelope, FaRegEnvelope, FaTrash, FaStar, FaRegStar, 
  FaReply, FaArchive, FaBan, FaEdit, FaPaperPlane, FaTimes, FaPlus 
} from 'react-icons/fa';
import styles from './Inbox.module.css';

const Inbox = () => {
  const [activeTab, setActiveTab] = useState('INBOX');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMessages, setSelectedMessages] = useState(new Set());
  const [isComposing, setIsComposing] = useState(false);
  const [replyMessage, setReplyMessage] = useState(null);
  const [draftMessage, setDraftMessage] = useState(null);
  const [composeData, setComposeData] = useState({
    to: '',
    subject: '',
    body: ''
  });

  // Sample messages data
  const [messagesData, setMessagesData] = useState({
    INBOX: [
      { 
        id: 1, 
        from: '3D Tuning Team', 
        email: 'support@3dtuning.com',
        subject: 'Welcome to 3D Tuning!', 
        body: 'Thank you for joining our community. You can now start customizing your favorite vehicles with our advanced 3D tuning tools. Feel free to explore all the features and don\'t hesitate to contact us if you need any assistance.\n\nBest regards,\n3D Tuning Team', 
        date: '2 hours ago', 
        read: false, 
        starred: false 
      },
      { 
        id: 2, 
        from: 'Car Show Event', 
        email: 'events@carshows.com',
        subject: 'Invitation to Virtual Car Show', 
        body: 'We are excited to invite you to our monthly virtual car show happening next weekend. This is a great opportunity to showcase your customized vehicles and connect with other car enthusiasts from around the world.\n\nPlease submit your vehicles by Friday to be featured in the show.', 
        date: '1 day ago', 
        read: true, 
        starred: true 
      }
    ],
    SENT: [
      { 
        id: 101, 
        to: 'Support Team', 
        email: 'support@3dtuning.com',
        subject: 'Help with vehicle rendering', 
        body: 'Hello,\n\nI am having issues with the rendering of my customized BMW. The wheels appear distorted in the final render. Could you please assist me with this issue?\n\nThank you.', 
        date: '3 hours ago', 
        read: true, 
        starred: false 
      }
    ],
    DRAFTS: [
      { 
        id: 201, 
        to: 'Community Manager',
        email: 'community@3dtuning.com',
        subject: 'Feature request - More wheel options', 
        body: 'I would like to suggest adding more wheel options for Japanese cars, particularly for Honda and Toyota models. The current selection is good but could be expanded with more JDM style wheels.', 
        date: 'Yesterday', 
        isDraft: true 
      }
    ],
    ARCHIVED: [],
    SPAM: [],
    TRASH: []
  });

  const tabs = ['INBOX', 'SENT', 'DRAFTS', 'ARCHIVED', 'SPAM', 'TRASH'];

  // Start composing a new message
  const startNewMessage = () => {
    setComposeData({ to: '', subject: '', body: '' });
    setReplyMessage(null);
    setDraftMessage(null);
    setIsComposing(true);
  };

  // Start replying to a message
  const startReply = (message) => {
    setComposeData({ 
      to: message.from, 
      subject: `Re: ${message.subject}`,
      body: `\n\n--------------------------------\nOn ${message.date}, ${message.from} wrote:\n${message.body}`
    });
    setReplyMessage(message);
    setDraftMessage(null);
    setIsComposing(true);
  };

  // Edit a draft message
  const editDraft = (message) => {
    setComposeData({ 
      to: message.to, 
      subject: message.subject,
      body: message.body
    });
    setDraftMessage(message);
    setReplyMessage(null);
    setIsComposing(true);
  };

  // Handle input changes in compose form
  const handleComposeChange = (field, value) => {
    setComposeData(prev => ({ ...prev, [field]: value }));
  };

  // Send a message
  const sendMessage = () => {
    if (!composeData.to || !composeData.subject) {
      alert('Please fill in recipient and subject fields');
      return;
    }

    const newMessage = {
      id: Date.now(),
      to: composeData.to,
      email: composeData.to.includes('@') ? composeData.to : `${composeData.to.toLowerCase()}@3dtuning.com`,
      subject: composeData.subject,
      body: composeData.body,
      date: 'Just now',
      read: true
    };

    // Update sent messages
    const updatedData = { ...messagesData };
    updatedData.SENT = [newMessage, ...updatedData.SENT];

    // Remove draft if we were editing one
    if (draftMessage) {
      updatedData.DRAFTS = updatedData.DRAFTS.filter(draft => draft.id !== draftMessage.id);
    }

    setMessagesData(updatedData);
    setIsComposing(false);
    setComposeData({ to: '', subject: '', body: '' });
    alert('Message sent successfully!');
  };

  // Save as draft
  const saveDraft = () => {
    if (!composeData.subject && !composeData.body) {
      alert('Draft must have at least a subject or body content');
      return;
    }

    const draft = {
      id: draftMessage ? draftMessage.id : Date.now(),
      to: composeData.to,
      email: composeData.to.includes('@') ? composeData.to : `${composeData.to.toLowerCase()}@3dtuning.com`,
      subject: composeData.subject || '(No subject)',
      body: composeData.body,
      date: 'Just now',
      isDraft: true
    };

    const updatedData = { ...messagesData };
    
    if (draftMessage) {
      // Update existing draft
      updatedData.DRAFTS = updatedData.DRAFTS.map(d => 
        d.id === draftMessage.id ? draft : d
      );
    } else {
      // Add new draft
      updatedData.DRAFTS = [draft, ...updatedData.DRAFTS];
    }

    setMessagesData(updatedData);
    setIsComposing(false);
    setComposeData({ to: '', subject: '', body: '' });
    alert('Draft saved successfully!');
  };

  // Message actions
  const toggleSelectMessage = (messageId) => {
    const newSelected = new Set(selectedMessages);
    if (newSelected.has(messageId)) {
      newSelected.delete(messageId);
    } else {
      newSelected.add(messageId);
    }
    setSelectedMessages(newSelected);
  };

  const toggleStarMessage = (messageId) => {
    const updatedMessages = { ...messagesData };
    updatedMessages[activeTab] = updatedMessages[activeTab].map(msg => 
      msg.id === messageId ? { ...msg, starred: !msg.starred } : msg
    );
    setMessagesData(updatedMessages);
  };

  const markAsRead = (messageId) => {
    const updatedMessages = { ...messagesData };
    updatedMessages.INBOX = updatedMessages.INBOX.map(msg => 
      msg.id === messageId ? { ...msg, read: true } : msg
    );
    setMessagesData(updatedMessages);
  };

  const deleteMessages = () => {
    const updatedMessages = { ...messagesData };
    
    if (activeTab === 'TRASH') {
      // Permanent deletion from trash
      updatedMessages[activeTab] = updatedMessages[activeTab].filter(
        msg => !selectedMessages.has(msg.id)
      );
    } else {
      // Move to trash
      const messagesToDelete = updatedMessages[activeTab].filter(
        msg => selectedMessages.has(msg.id)
      );
      
      updatedMessages.TRASH = [...updatedMessages.TRASH, ...messagesToDelete];
      updatedMessages[activeTab] = updatedMessages[activeTab].filter(
        msg => !selectedMessages.has(msg.id)
      );
    }
    
    setMessagesData(updatedMessages);
    setSelectedMessages(new Set());
  };

  const archiveMessages = () => {
    const updatedMessages = { ...messagesData };
    const messagesToArchive = updatedMessages[activeTab].filter(
      msg => selectedMessages.has(msg.id)
    );
    
    updatedMessages.ARCHIVED = [...updatedMessages.ARCHIVED, ...messagesToArchive];
    updatedMessages[activeTab] = updatedMessages[activeTab].filter(
      msg => !selectedMessages.has(msg.id)
    );
    
    setMessagesData(updatedMessages);
    setSelectedMessages(new Set());
  };

  const markAsSpam = () => {
    const updatedMessages = { ...messagesData };
    const messagesToMarkAsSpam = updatedMessages[activeTab].filter(
      msg => selectedMessages.has(msg.id)
    );
    
    updatedMessages.SPAM = [...updatedMessages.SPAM, ...messagesToMarkAsSpam];
    updatedMessages[activeTab] = updatedMessages[activeTab].filter(
      msg => !selectedMessages.has(msg.id)
    );
    
    setMessagesData(updatedMessages);
    setSelectedMessages(new Set());
  };

  const restoreMessages = () => {
    const updatedMessages = { ...messagesData };
    const messagesToRestore = updatedMessages[activeTab].filter(
      msg => selectedMessages.has(msg.id)
    );
    
    updatedMessages.INBOX = [...updatedMessages.INBOX, ...messagesToRestore];
    updatedMessages[activeTab] = updatedMessages[activeTab].filter(
      msg => !selectedMessages.has(msg.id)
    );
    
    setMessagesData(updatedMessages);
    setSelectedMessages(new Set());
  };

  const filteredMessages = messagesData[activeTab].filter(message =>
    (message.from && message.from.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (message.to && message.to.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (message.subject && message.subject.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (message.body && message.body.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const getActionButtons = () => {
    if (selectedMessages.size === 0) return null;
    
    if (activeTab === 'TRASH') {
      return (
        <>
          <button onClick={restoreMessages} className={styles.restoreButton}>
            <FaReply /> Restore
          </button>
          <button onClick={deleteMessages} className={styles.deleteButton}>
            <FaTrash /> Delete Forever
          </button>
        </>
      );
    }
    
    if (activeTab === 'SPAM') {
      return (
        <>
          <button onClick={restoreMessages} className={styles.restoreButton}>
            <FaReply /> Not Spam
          </button>
          <button onClick={deleteMessages} className={styles.deleteButton}>
            <FaTrash /> Delete
          </button>
        </>
      );
    }
    
    return (
      <>
        <button onClick={archiveMessages} className={styles.archiveButton}>
          <FaArchive /> Archive
        </button>
        <button onClick={markAsSpam} className={styles.spamButton}>
          <FaBan /> Spam
        </button>
        <button onClick={deleteMessages} className={styles.deleteButton}>
          <FaTrash /> Delete
        </button>
      </>
    );
  };

  return (
    <div className={styles.inboxContainer}>
      {/* Header */}
      <div className={styles.inboxHeader}>
        <h1 className={styles.inboxTitle}>
          {activeTab} {activeTab === 'INBOX' && `(${messagesData.INBOX.filter(m => !m.read).length})`}
          {activeTab === 'SPAM' && `(${messagesData.SPAM.length})`}
          {activeTab === 'TRASH' && `(${messagesData.TRASH.length})`}
        </h1>
        <div className={styles.headerActions}>
          <button className={styles.composeButton} onClick={startNewMessage}>
            <FaPlus /> Compose
          </button>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search messages"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
            <FaSearch className={styles.searchIcon} />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className={styles.tabsContainer}>
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setSelectedMessages(new Set());
            }}
            className={`${styles.tabButton} ${activeTab === tab ? styles.tabActive : ''}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Action Bar */}
      {selectedMessages.size > 0 && (
        <div className={styles.actionBar}>
          <span>{selectedMessages.size} selected</span>
          <div className={styles.actionButtons}>
            {getActionButtons()}
          </div>
        </div>
      )}

      {/* Compose Message Modal */}
      {isComposing && (
        <div className={styles.composeModal}>
          <div className={styles.composeContent}>
            <div className={styles.composeHeader}>
              <h3>{draftMessage ? 'Edit Draft' : replyMessage ? 'Reply' : 'New Message'}</h3>
              <button className={styles.closeButton} onClick={() => setIsComposing(false)}>
                <FaTimes />
              </button>
            </div>
            <div className={styles.composeForm}>
              <input
                type="text"
                placeholder="To"
                value={composeData.to}
                onChange={(e) => handleComposeChange('to', e.target.value)}
                className={styles.composeInput}
              />
              <input
                type="text"
                placeholder="Subject"
                value={composeData.subject}
                onChange={(e) => handleComposeChange('subject', e.target.value)}
                className={styles.composeInput}
              />
              <textarea
                placeholder="Type your message here..."
                value={composeData.body}
                onChange={(e) => handleComposeChange('body', e.target.value)}
                className={styles.composeTextarea}
                rows="10"
              />
            </div>
            <div className={styles.composeActions}>
              <button className={styles.sendButton} onClick={sendMessage}>
                <FaPaperPlane /> Send
              </button>
              <button className={styles.saveDraftButton} onClick={saveDraft}>
                <FaEdit /> Save Draft
              </button>
              <button className={styles.cancelButton} onClick={() => setIsComposing(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Messages List */}
      <div className={styles.messagesList}>
        {filteredMessages.length === 0 ? (
          <div className={styles.emptyState}>
            <FaEnvelope className={styles.emptyIcon} />
            <p>No messages in {activeTab.toLowerCase()}</p>
            {activeTab === 'INBOX' && (
              <button className={styles.composeButton} onClick={startNewMessage}>
                <FaPlus /> Compose your first message
              </button>
            )}
          </div>
        ) : (
          filteredMessages.map(message => (
            <div
              key={message.id}
              className={`${styles.messageItem} ${!message.read && activeTab === 'INBOX' ? styles.unread : ''} ${selectedMessages.has(message.id) ? styles.selected : ''}`}
            >
              <div className={styles.messageCheckbox}>
                <input
                  type="checkbox"
                  checked={selectedMessages.has(message.id)}
                  onChange={() => toggleSelectMessage(message.id)}
                />
              </div>
              
              {(activeTab === 'INBOX' || activeTab === 'SENT' || activeTab === 'ARCHIVED') && (
                <div className={styles.messageStar} onClick={() => toggleStarMessage(message.id)}>
                  {message.starred ? (
                    <FaStar className={styles.starred} />
                  ) : (
                    <FaRegStar className={styles.notStarred} />
                  )}
                </div>
              )}

              <div className={styles.messageSender}>
                {activeTab === 'SENT' ? `To: ${message.to}` : message.from}
                {activeTab === 'DRAFTS' && <FaEdit className={styles.draftIcon} />}
              </div>

              <div 
                className={styles.messageContent}
                onClick={() => {
                  if (activeTab === 'INBOX') markAsRead(message.id);
                }}
              >
                <div className={styles.messageSubject}>
                  {message.subject}
                  {!message.read && activeTab === 'INBOX' && <span className={styles.unreadDot}></span>}
                </div>
                <div className={styles.messagePreview}>
                  {message.body.substring(0, 100)}...
                </div>
              </div>

              <div className={styles.messageDate}>
                {message.date}
              </div>

              <div className={styles.messageActions}>
                {activeTab === 'INBOX' && (
                  <button 
                    className={styles.actionButton}
                    onClick={() => startReply(message)}
                    title="Reply"
                  >
                    <FaReply />
                  </button>
                )}
                {activeTab === 'DRAFTS' && (
                  <button 
                    className={styles.actionButton}
                    onClick={() => editDraft(message)}
                    title="Edit Draft"
                  >
                    <FaEdit />
                  </button>
                )}
                {(activeTab === 'INBOX' || activeTab === 'SENT' || activeTab === 'ARCHIVED') && (
                  <div className={styles.messageStatus}>
                    {message.read ? (
                      <FaEnvelope className={styles.readIcon} />
                    ) : (
                      <FaRegEnvelope className={styles.unreadIcon} />
                    )}
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Inbox;














/* Inbox.module.css */
.inboxContainer {
  background-color: #1a1a1a;
  color: #ffffff;
  min-height: 100vh;
  padding: 20px;
  font-family: 'Arial', sans-serif;
  position: relative;
}

.inboxHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #333;
  flex-wrap: wrap;
  gap: 16px;
}

.inboxTitle {
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  color: #ffffff;
}

.headerActions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.composeButton {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  transition: background-color 0.2s;
}

.composeButton:hover {
  background-color: #0056b3;
}

.searchContainer {
  position: relative;
  width: 300px;
}

.searchInput {
  width: 100%;
  background-color: #2d2d2d;
  border: 1px solid #444;
  border-radius: 4px;
  padding: 10px 16px 10px 40px;
  color: #ffffff;
  font-size: 14px;
}

.searchInput:focus {
  outline: none;
  border-color: #666;
}

.searchInput::placeholder {
  color: #888;
}

.searchIcon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #888;
  font-size: 14px;
}

.tabsContainer {
  display: flex;
  gap: 2px;
  margin-bottom: 24px;
  border-bottom: 1px solid #333;
  overflow-x: auto;
}

.tabButton {
  padding: 12px 20px;
  background-color: transparent;
  border: none;
  color: #888;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border-bottom: 2px solid transparent;
  white-space: nowrap;
}

.tabButton:hover {
  color: #ffffff;
  background-color: #2d2d2d;
}

.tabActive {
  color: #ffffff;
  border-bottom-color: #007bff;
  background-color: #2d2d2d;
}

.actionBar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background-color: #2d2d2d;
  border-radius: 4px;
  margin-bottom: 16px;
}

.actionButtons {
  display: flex;
  gap: 8px;
}

.restoreButton {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
}

.restoreButton:hover {
  background-color: #218838;
}

.archiveButton {
  background-color: #6c757d;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
}

.archiveButton:hover {
  background-color: #5a6268;
}

.spamButton {
  background-color: #ffc107;
  color: #212529;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
}

.spamButton:hover {
  background-color: #e0a800;
}

.deleteButton {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
}

.deleteButton:hover {
  background-color: #c82333;
}

/* Compose Modal */
.composeModal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.composeContent {
  background-color: #2d2d2d;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.composeHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #3d3d3d;
  border-bottom: 1px solid #444;
}

.composeHeader h3 {
  margin: 0;
  color: #ffffff;
}

.closeButton {
  background: none;
  border: none;
  color: #888;
  cursor: pointer;
  font-size: 18px;
  padding: 4px;
}

.closeButton:hover {
  color: #ffffff;
}

.composeForm {
  padding: 16px;
  flex: 1;
  overflow-y: auto;
}

.composeInput {
  width: 100%;
  background-color: #3d3d3d;
  border: 1px solid #555;
  border-radius: 4px;
  padding: 10px 12px;
  color: #ffffff;
  margin-bottom: 12px;
  font-size: 14px;
}

.composeInput:focus {
  outline: none;
  border-color: #007bff;
}

.composeTextarea {
  width: 100%;
  background-color: #3d3d3d;
  border: 1px solid #555;
  border-radius: 4px;
  padding: 12px;
  color: #ffffff;
  font-size: 14px;
  resize: vertical;
  min-height: 200px;
  font-family: inherit;
}

.composeTextarea:focus {
  outline: none;
  border-color: #007bff;
}

.composeActions {
  padding: 16px;
  background-color: #3d3d3d;
  border-top: 1px solid #444;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.sendButton {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
}

.sendButton:hover {
  background-color: #0056b3;
}

.saveDraftButton {
  background-color: #6c757d;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
}

.saveDraftButton:hover {
  background-color: #5a6268;
}

.cancelButton {
  background-color: #6c757d;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

.cancelButton:hover {
  background-color: #5a6268;
}

/* Messages List */
.messagesList {
  background-color: #2d2d2d;
  border-radius: 8px;
  overflow: hidden;
}

.messageItem {
  display: grid;
  grid-template-columns: auto auto 1fr auto auto;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border-bottom: 1px solid #3d3d3d;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.messageItem:hover {
  background-color: #3d3d3d;
}

.messageItem.selected {
  background-color: #2c5282;
}

.messageItem.unread {
  background-color: #2d3748;
}

.messageItem.unread:hover {
  background-color: #3d4a61;
}

.messageCheckbox {
  display: flex;
  align-items: center;
}

.messageCheckbox input[type="checkbox"] {
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.messageStar {
  cursor: pointer;
  padding: 4px;
  border-radius: 50%;
  transition: background-color 0.2s ease;
}

.messageStar:hover {
  background-color: #4d4d4d;
}

.starred {
  color: #fbbf24;
}

.notStarred {
  color: #888;
}

.messageSender {
  font-weight: 600;
  color: #ffffff;
  min-width: 150px;
}

.messageContent {
  flex: 1;
  min-width: 0;
}

.messageSubject {
  font-weight: 600;
  margin-bottom: 4px;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 8px;
}

.unreadDot {
  width: 8px;
  height: 8px;
  background-color: #007bff;
  border-radius: 50%;
}

.messagePreview {
  color: #888;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.messageDate {
  color: #888;
  font-size: 14px;
  white-space: nowrap;
}

.messageActions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.actionButton {
  background: none;
  border: none;
  color: #888;
  cursor: pointer;
  padding: 6px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.actionButton:hover {
  background-color: #4d4d4d;
  color: #ffffff;
}

.messageStatus {
  display: flex;
  align-items: center;
}

.readIcon {
  color: #888;
  font-size: 14px;
}

.unreadIcon {
  color: #007bff;
  font-size: 14px;
}

.draftIcon {
  margin-left: 8px;
  color: #ffc107;
  font-size: 12px;
}

.emptyState {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  color: #888;
  text-align: center;
}

.emptyIcon {
  font-size: 48px;
  margin-bottom: 16px;
  color: #555;
}

/* Responsive Design */
@media (max-width: 768px) {
  .inboxHeader {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .headerActions {
    width: 100%;
    flex-direction: column;
    align-items: stretch;
  }
  
  .searchContainer {
    width: 100%;
  }
  
  .composeButton {
    width: 100%;
    justify-content: center;
  }
  
  .messageItem {
    grid-template-columns: auto auto 1fr auto;
    gap: 12px;
  }
  
  .messageDate {
    grid-column: 4;
    grid-row: 1;
  }
  
  .messageActions {
    grid-column: 2;
    grid-row: 1;
  }
  
  .messageSender {
    min-width: 120px;
  }
  
  .composeContent {
    width: 95%;
    height: 90vh;
  }
  
  .composeActions {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .inboxContainer {
    padding: 12px;
  }
  
  .messageItem {
    grid-template-columns: auto 1fr auto;
    gap: 8px;
  }
  
  .messageSender {
    grid-column: 2;
    grid-row: 1;
  }
  
  .messageContent {
    grid-column: 1 / -1;
    grid-row: 2;
  }
  
  .messageDate {
    grid-column: 3;
    grid-row: 1;
  }
  
  .messageActions {
    display: none;
  }
  
  .actionButtons {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .actionButtons button {
    flex: 1;
    min-width: 120px;
  }
}
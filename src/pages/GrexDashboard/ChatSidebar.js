import React from 'react';
import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody, Input, InputGroup } from 'reactstrap';
import SimpleBar from 'simplebar-react'; // Import SimpleBar

// Internal component to avoid duplicating the chat UI
const ChatBodyContent = () => (
    <>
        <SimpleBar className="flex-grow-1" style={{ height: "100%", padding: "1.2rem" }}>
            {/* Placeholder for chat messages */}
            <div className="d-flex align-items-start mb-3">
                <div className="flex-shrink-0">
                    <img src="https://themesbrand.com/velzon/html/default/assets/images/users/avatar-2.jpg" alt="" className="avatar-xs rounded-circle" />
                </div>
                <div className="flex-grow-1 ms-3">
                    <h5 className="fs-13">Admin <small className="text-muted ms-2">10:00 AM</small></h5>
                    <div className="p-3 bg-light rounded">
                        <p className="mb-0">Hola, ¿en qué puedo ayudarte?</p>
                    </div>
                </div>
            </div>
            <div className="d-flex align-items-start justify-content-end mb-3">
                <div className="flex-grow-1 me-3 text-end">
                    <h5 className="fs-13">Tú <small className="text-muted ms-2">10:01 AM</small></h5>
                    <div className="p-3 bg-primary text-white rounded">
                        <p className="mb-0">Tengo una pregunta sobre los gráficos.</p>
                    </div>
                </div>
                <div className="flex-shrink-0">
                    <img src="https://themesbrand.com/velzon/html/default/assets/images/users/avatar-1.jpg" alt="" className="avatar-xs rounded-circle" />
                </div>
            </div>
        </SimpleBar>
        <div className="mt-auto p-3 bg-light border-top">
            <InputGroup>
                <Input type="text" className="form-control" placeholder="Escribe un mensaje..." />
                <Button color="primary" type="button">
                    <i className="bx bxs-send"></i>
                </Button>
            </InputGroup>
        </div>
    </>
);

const ChatSidebar = ({ isOpen, toggle, isDesktop }) => {

    if (isDesktop) {
        // Render as an integrated sidebar on desktop
        return (
            <div className={'chat-sidebar-wrapper ' + (isOpen ? 'open' : '')}>
                <div className="chat-sidebar-inner">
                    <div className="p-3 border-bottom">
                        <h5 className="mb-0">Chat</h5>
                    </div>
                    <ChatBodyContent />
                </div>
            </div>
        );
    }

    // Render as an Offcanvas on mobile
    return (
        <Offcanvas isOpen={isOpen} toggle={toggle} direction="end" className="vh-100">
            <OffcanvasHeader toggle={toggle}>
                Chat
            </OffcanvasHeader>
            <OffcanvasBody className="d-flex flex-column h-100 p-0">
                <ChatBodyContent />
            </OffcanvasBody>
        </Offcanvas>
    );
};

export default ChatSidebar;

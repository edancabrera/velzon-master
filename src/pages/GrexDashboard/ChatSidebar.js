import React from 'react';
import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody, Input, InputGroup } from 'reactstrap';

const ChatSidebar = ({ isOpen, toggle }) => {
    return (
        <Offcanvas isOpen={isOpen} toggle={toggle} direction="end" className="vh-100">
            <OffcanvasHeader toggle={toggle}>
                Chat
            </OffcanvasHeader>
            <OffcanvasBody className="d-flex flex-column h-100">
                <div className="flex-grow-1" style={{ overflowY: "auto" }}>
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
                </div>
                <div className="mt-auto p-3 bg-light border-top">
                    <InputGroup>
                        <Input type="text" className="form-control" placeholder="Escribe un mensaje..." />
                        <Button color="primary" type="button">
                            <i className="bx bxs-send"></i>
                        </Button>
                    </InputGroup>
                </div>
            </OffcanvasBody>
        </Offcanvas>
    );
};

export default ChatSidebar;

import { useState } from "react";
import { Button, Form, Dropdown, InputGroup } from "react-bootstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt, faUserAlt, faCaretDown } from "@fortawesome/free-solid-svg-icons"

const SidebarWrapper = styled.div`
  background: white;
  min-width: 150px;
  max-width: 240px;
  min-height: calc(100vh - 80px);
  padding: 15px;
`;

export const SidebarDashboard = () => {

  return (
    <SidebarWrapper className="shadow-sm">
      <InputGroup className="mb-2">
        <InputGroup.Text>
          <Button variant="primary" className="">
            <span className="">Añadir</span>
          </Button>
          <FontAwesomeIcon icon={faCaretDown} className="mx-2" />
        </InputGroup.Text>
      </InputGroup>

    </SidebarWrapper>
  );
};

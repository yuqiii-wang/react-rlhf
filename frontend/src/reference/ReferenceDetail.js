import React, { useState, useContext, useEffect, useRef, useCallback } from "react";
import { Container, Row, Col, Form, Button, InputGroup, Card } from "react-bootstrap";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import ImageReferenceDetails from "./ImageReferenceDetails";
import CodeReferenceDetails from "./CodeReferenceDetails";
import { GlobalAppContext } from "../GlobalAppContext";
import {ReferenceContext, ReferenceContextManager} from './ReferenceContext';
import InputCmd from "./InputCmd";
import "./css/ReferenceDetail.css"

const ReferenceDetailComponent = () => {
    const { referenceResults, referenceImageResults, setExecutionLoading } = useContext(GlobalAppContext);
    const { codeRows, setCodeRows } = useContext(ReferenceContext);

  const handleAddNotesClick = () => {
    const newRow = ({ id: codeRows.length+1, code: '# Double click this area to edit. \
                                                    \n# You can add your comments here as free text that will be referenced by AI.' });
    
    setCodeRows(codeRows => [...codeRows, newRow]);
  };


  return (
    <Container className="border reference-detail-container">
      <Row >
        <Col>
        {referenceImageResults != null ? (
          <ImageReferenceDetails />
        ) : ("")}
          <CodeReferenceDetails/>
        </Col>
      </Row>
      <InputCmd></InputCmd>
    </Container>
  );
};

export default ReferenceDetailComponent;

import React from "react";
import {
  Card, CardBody, CardTitle} from 'reactstrap';
export default function CharacterCard(props) {
  return(
    <div>
      <Card>
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
        </CardBody>
      </Card>
    </div>
  ); 
}

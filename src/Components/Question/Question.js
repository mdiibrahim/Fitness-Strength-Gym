import React from 'react';
import Accordion from 'react-bootstrap/Accordion';




function Question() {
    return (
        
        
    <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>How does <strong>React</strong> works?</Accordion.Header>
                <Accordion.Body>
                    While building client-side apps, a team of Facebook developers realized that the DOM is slow for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated. So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser's DOM.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>What are the differences between props and state ?</Accordion.Header>
                <Accordion.Body>
                    <p><b>props: </b></p>
                    <p>The Data is passed from one component to another. It is Immutable. Props can be used with state and functional components. Props are read-only. </p>
                    <p><b>state: </b></p>
                    <p>The Data is passed within the component only. It is Mutable. The this.setState property is used to update the state values in the component. State is both read and write.</p>


                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Uses of useEffect() except loading data with API!</Accordion.Header>
                <Accordion.Body>
                    <p>The useEffect Hook allows you to perform side effects in your components.Such as: directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.</p>
                    <p>By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our "effect"), and call it later after performing the DOM updates.</p>
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
            
  );
}


export default Question;
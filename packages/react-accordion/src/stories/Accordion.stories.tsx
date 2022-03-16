import * as React from 'react';
import { Accordion, AccordionItem, AccordionPanel, AccordionHeader } from '../index';

export const BasicAccordionExample = () => {
  return (
    <Accordion>
      <AccordionItem value="1">
        <AccordionHeader>Accordion Header 1</AccordionHeader>
        <AccordionPanel>
          <div>Accordion Panel 1</div>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="2">
        <AccordionHeader>Accordion Header 2</AccordionHeader>
        <AccordionPanel>
          <div>Accordion Panel 2</div>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="3">
        <AccordionHeader>Accordion Header 3</AccordionHeader>
        <AccordionPanel>
          <div>Accordion Panel 3</div>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export const SizeAccordionExample = () => {
  return (
    <Accordion>
      <AccordionItem value="1">
        <AccordionHeader size="large">Accordion Header 1</AccordionHeader>
        <AccordionPanel>
          <div>Accordion Panel 1</div>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="2">
        <AccordionHeader size="small">Accordion Header 2</AccordionHeader>
        <AccordionPanel>
          <div>Accordion Panel 2</div>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="3">
        <AccordionHeader size="extra-large">Accordion Header 3</AccordionHeader>
        <AccordionPanel>
          <div>Accordion Panel 3</div>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export const NestedAccordionExample = () => {
  return (
    <Accordion>
      <AccordionItem value="1">
        <AccordionHeader>Accordion Header 1</AccordionHeader>
        <AccordionPanel>
          <div>Accordion Panel 1</div>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="2">
        <AccordionHeader>Accordion Header 2</AccordionHeader>
        <AccordionPanel>
          <Accordion>
            <AccordionItem value="1">
              <AccordionHeader>Accordion Header 1</AccordionHeader>
              <AccordionPanel>
                <div>Accordion Panel 1</div>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem value="2">
              <AccordionHeader>Accordion Header 2</AccordionHeader>
              <AccordionPanel>
                <div>Accordion Panel 2</div>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem value="3">
              <AccordionHeader>Accordion Header 3</AccordionHeader>
              <AccordionPanel>
                <div>Accordion Panel 3</div>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="3">
        <AccordionHeader>Accordion Header 3</AccordionHeader>
        <AccordionPanel>
          <div>Accordion Panel 3</div>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default {
  title: 'Components/Accordion',
  component: Accordion,
};

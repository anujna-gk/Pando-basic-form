import { Admonition, AdmonitionHeading, Badge, Button, Checkbox, FormControlProvider,
  Radio,
  Textarea,
  TextLink, } from '@pluralsight/react';
import { CheckCircleFilledIcon } from '@pluralsight/react/icons';
import { ChangeEvent, useState } from 'react';

export function Pando() {

  const [checked, setChecked] = useState<boolean>(false)
  

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setChecked(e.currentTarget.checked)
  }

  return (
  <>
    <div className='font-container' style={{ backgroundColor: "rgb(210, 202, 249)", width: "750px", padding: "730px 45px 82px 45px" }}>
      <Admonition style={{
        width: "650px"
      }}>
        <AdmonitionHeading>Completion of all details is necessary for the successful processing of your application</AdmonitionHeading>
      </Admonition>
      <div><Badge palette="danger">CONFIDENTIAL</Badge></div>
      <h3>Give a short description on why you are most suitable for this job role?</h3>
      <FormControlProvider>
        <Textarea id="name" name="name" placeholder="Description" />
      </FormControlProvider>
      <Button>Submit answer</Button>
      <h3>Select all the skills below you have experience in :</h3>
      <FormControlProvider>
        <Checkbox
          id="sub1"
          name="sub1"
          onChange={handleChange}
          checked={checked}
        >
          React
        </Checkbox>

        <Checkbox
          id="sub2"
          name="sub2"
        >
          Javascript
        </Checkbox>

        <Checkbox
          id="sub3"
          name="sub3"
        >
          Python
        </Checkbox>
      </FormControlProvider><div className="radio-group">
        <h3>What is your proficiency in ReactJS?</h3>
        <FormControlProvider>
          <div><Radio
            name="normal"
            onChange={handleChange}
            value="normal"
            defaultChecked={true}
          >
            beginner
          </Radio></div>

          <div><Radio
            name="normal"
            onChange={handleChange}
            value="normal"
          >
            intermediate
          </Radio></div>

          <div><Radio
            name="normal"
            onChange={handleChange}
            value="normal"
          >
            advanced
          </Radio></div>
        </FormControlProvider>
      </div>
      <FormControlProvider>
        <Checkbox
          id="privacy"
          name="privacy"
          onChange={handleChange}
          checked={true}
        >
          <h3>
            I have read and accept the{' '}
            <TextLink>
              <a href="https://duckduckgo.com">Information and Privacy policy</a>
            </TextLink>
          </h3>
        </Checkbox>
      </FormControlProvider><div className='submit'>
        <Button>Submit form <CheckCircleFilledIcon /></Button></div>
    </div>


    <div>
      <div data-theme="inkyBlue" data-color-mode="dark" style={{ backgroundColor: "rgb(17 11 43)", width: "750px", padding: "82px 45px 82px 45px"}}>
      <Admonition style={{
        width: "650px"}}>
        <AdmonitionHeading>Admonition for Dark theme</AdmonitionHeading>
      </Admonition>
      <div><Badge palette="info">Dark Badge - Info</Badge></div>
      <div><Badge palette="danger">Dark Badge - Danger</Badge></div>
      <div><Badge palette="success">Dark Badge - Success</Badge></div>
      <div><Badge palette="warning">Dark Badge - Warning</Badge></div>
      </div>

      <div data-theme="inkyBlue" data-color-mode="light" style={{ backgroundColor: "rgb(255 255 255)", width: "750px", padding: "82px 45px 82px 45px" }}>
      <Admonition style={{width: "650px"}}>
        <AdmonitionHeading>Admonition for Light theme</AdmonitionHeading>
      </Admonition>
      <div><Badge palette="info">Dark Badge - Info</Badge></div>
      <div><Badge palette="danger">Dark Badge - Danger</Badge></div>
      <div><Badge palette="success">Dark Badge - Success</Badge></div>
      <div><Badge palette="warning">Dark Badge - Warning</Badge></div>
      </div>
    </div>
      
  </>
  );
}

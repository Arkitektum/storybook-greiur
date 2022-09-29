import { Meta } from '@storybook/web-components';
import { Story, Canvas } from '@storybook/addon-docs/blocks';
import { html } from 'lit-html';
import { BodyText, BodyTextOptions } from './body-text';

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: 'Example/BodyText',
  // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
  argTypes: {
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args

const htmlContent = document.createElement('p');
const strongText = document.createElement('strong');

htmlContent.innerHTML = 'yo bro';
strongText.innerHTML = 'strong bro'
htmlContent.appendChild(strongText);

const Template = (props) => html`<body-text>${props.children}</body-text>`;


export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/web-components/writing-stories/args
Default.args = {
  children: html`<p>normal tekst <b>fet tekst</b></p>`
};

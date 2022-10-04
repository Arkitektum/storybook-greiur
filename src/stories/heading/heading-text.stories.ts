import { Meta } from '@storybook/web-components';
import { Story, Canvas } from '@storybook/addon-docs/blocks';
import { html } from 'lit-html';
import { HeadingText } from './heading';

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: 'Example/Heading',
  // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
  argTypes: {
    size: {h1: 'h1',h2: 'h2',h3: 'h3',h4: 'h4'}
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args

const htmlContent = document.createElement('h1');

htmlContent.innerHTML = 'Overskrift';

const Template = (props) => html`<heading-text>${props.children}</heading-text>`;


export const H1 = Template.bind({});
// More on args: https://storybook.js.org/docs/web-components/writing-stories/args
H1.args = {
  children: html`<h1>normal tekst</h1>`
};

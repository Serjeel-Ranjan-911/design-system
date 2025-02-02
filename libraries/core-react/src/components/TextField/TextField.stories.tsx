import React from 'react'
import { TextField, TextFieldProps, Icon } from '../..'
import { Story, Meta } from '@storybook/react'
import { thumbs_up, warning_filled, error_filled } from '@equinor/eds-icons'

const icons = {
  thumbs_up,
  warning_filled,
  error_filled,
}

Icon.add(icons)
import styled from 'styled-components'

export default {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    inputIcon: {
      control: {
        type: 'select',
        options: {
          error: [<Icon name="error_filled" key="error" />],
          warning: [<Icon name="warning_filled" key="warning" />],
          success: [<Icon name="thumbs_up" key="thumbs" />],
        },
      },
      description:
        'Please note that the option list of icons is not complete, this selection is only for demo purposes',
    },
    helperIcon: {
      control: {
        type: 'select',
        options: {
          error: [<Icon name="error_filled" key="error" />],
          warning: [<Icon name="warning_filled" key="warning" />],
          success: [<Icon name="thumbs_up" key="thumbs" />],
        },
      },
      description:
        'Please note that the option list of icons is not complete, this selection is only for demo purposes',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `A text field lets users enter, interact and edit content,
        typically in forms and dialogs.
        `,
      },
    },
  },
} as Meta

const Wrapper = styled.div`
  margin: 32px;
  display: grid;
  grid-gap: 32px;
  grid-template-columns: repeat(2, fit-content(100%));
`
export const Default: Story<TextFieldProps> = (args) => (
  <TextField
    meta="meta"
    id="playWithMe"
    label="Play with me"
    unit="Unit"
    helperText="Helper text"
    style={{ resize: 'none' }}
    rows={3}
    {...args}
  ></TextField>
)

export const types: Story<TextFieldProps> = () => (
  <Wrapper>
    <TextField
      id="textfield-normal"
      placeholder="Placeholder text"
      label="Text"
      helperText="Helper text"
      autoComplete="off"
    />
    <TextField
      type="number"
      id="textfield-number"
      placeholder="Placeholder text"
      label="Number"
      meta="pt. tonn"
      helperText="Helper text"
    />

    <TextField
      type="search"
      id="textfield-search"
      placeholder="Placeholder text"
      label="Search"
      meta="Meta"
      helperText="Helper Text"
    />
    <TextField
      type="password"
      id="textfield-password"
      placeholder="Placeholder text"
      label="Password"
      meta="Meta"
      helperText="Helper Text"
    />
    <TextField
      type="email"
      id="textfield-email"
      placeholder="Placeholder text"
      label="Email"
      meta="Meta"
      helperText="Helper Text"
    />
  </Wrapper>
)

types.storyName = 'Types of input fields'

export const Multiline: Story<TextFieldProps> = () => (
  <>
    <TextField
      id="storybook-multiline"
      placeholder="Placeholder text"
      label="Multiline"
      helperText="Helper Text"
      multiline
      style={{ resize: 'none' }}
      rows={5}
    />
    <div style={{ height: '2rem' }} />
    <TextField
      id="storybook-multiline-two"
      placeholder="Placeholder text"
      label="Multiline with icon"
      multiline
      style={{ resize: 'none' }}
      rows={3}
      inputIcon={<Icon name="warning_filled" />}
    />
  </>
)
Multiline.parameters = {
  docs: {
    storyDescription: `With multiline we recommend to use <code>rows</code> in combination with a CSS rule of
    <code>resize: 'none'</code>`,
  },
}

export const Disabled: Story<TextFieldProps> = () => (
  <Wrapper>
    <TextField
      id="storybook-disabled"
      placeholder="Placeholder text"
      label="Disabled"
      meta="Meta"
      helperText="Helper Text"
      disabled
    />
    <TextField
      id="storybook-unit-four"
      placeholder="Placeholder text text text"
      label="Disabled price"
      unit="$"
      disabled
      inputIcon={<Icon name="warning_filled" />}
    />
    <TextField
      id="storybook-disabled-two"
      defaultValue="Input text"
      label="Disabled"
      meta="Meta"
      helperText="Helper Text"
      disabled
    />
    <TextField
      id="storybook-disabled-thumbs"
      defaultValue="Input text"
      label="Disabled with value"
      meta="Meta"
      disabled
      helperText="Helper Text"
      inputIcon={<Icon name="thumbs_up" />}
    />

    <TextField
      id="storybook-unit-four-input"
      defaultValue="Input value"
      label="Disabled price"
      unit="$"
      disabled
      inputIcon={<Icon name="warning_filled" />}
    />
  </Wrapper>
)
export const WithUnit: Story<TextFieldProps> = () => (
  <Wrapper>
    <TextField
      id="storybook-unit"
      placeholder="Placeholder text text text"
      label="Price"
      unit="$"
    />
    <TextField
      id="storybook-unit-two"
      placeholder="Placeholder text text text"
      label="Speed"
      unit="km/h"
    />
  </Wrapper>
)

WithUnit.storyName = 'With unit'

export const WithIcons: Story<TextFieldProps> = () => (
  <Wrapper>
    <TextField
      id="storybook-warning-icon"
      placeholder="Placeholder text"
      label="Label text"
      inputIcon={<Icon name="thumbs_up" />}
    />
    <TextField
      id="storybook-disabled-with-icons"
      placeholder="Placeholder text"
      label="Disabled input"
      disabled
      inputIcon={<Icon name="warning_filled" />}
    />

    <TextField
      id="icons-text"
      defaultValue="Input text"
      label="Label text"
      meta="Meta"
      helperText="Helper Text"
      inputIcon={<Icon name="thumbs_up" />}
    />
  </Wrapper>
)
WithIcons.storyName = 'With icons'

export const Variants: Story<TextFieldProps> = () => (
  <Wrapper>
    <TextField
      id="storybook-error"
      placeholder="Placeholder text Placeholder text Placeholder text"
      label="Error"
      meta="Meta"
      helperText="Validation error"
      variant="error"
      helperIcon={<Icon name="error_filled" title="Error" />}
    />
    <TextField
      id="storybook-error-two"
      placeholder="Placeholder text "
      label="Error"
      unit="Unit"
      helperText="Validation error"
      variant="error"
      inputIcon={<Icon name="error_filled" title="Error" />}
    />
    <TextField
      id="storybook-warning"
      placeholder="Placeholder text Placeholder text Placeholder text"
      label="Warning"
      meta="Meta"
      helperText="Helper/warning text"
      variant="warning"
      helperIcon={<Icon name="warning_filled" title="Warning" />}
    />
    <TextField
      id="storybook-warning-two"
      placeholder="Placeholder text Placeholder text Placeholder text"
      label="Warning"
      meta="Meta"
      helperText="Helper/warning text"
      variant="warning"
      inputIcon={<Icon name="warning_filled" title="Warning" />}
    />
    <TextField
      id="storybook-success"
      placeholder="Placeholder text Placeholder text Placeholder text"
      label="Success"
      meta="Meta"
      helperText="Helper text"
      variant="success"
      helperIcon={<Icon name="thumbs_up" title="Success" />}
    />
    <TextField
      id="storybook-success-two"
      placeholder="Placeholder text Placeholder text Placeholder text"
      label="Success"
      meta="Meta"
      helperText="Helper text"
      variant="success"
      inputIcon={<Icon name="thumbs_up" title="Success" />}
    />
    <TextField
      id="multi-error"
      label="Multiline"
      multiline
      style={{ resize: 'none' }}
      rows={3}
      helperText="Validation error"
      variant="error"
      helperIcon={<Icon name="error_filled" title="Error" />}
    />
    <TextField
      id="multi-error-two"
      label="Multiline"
      multiline
      style={{ resize: 'none' }}
      rows={3}
      helperText="Validation error"
      variant="error"
      inputIcon={<Icon name="warning_filled" title="Warning" />}
    />
    <TextField
      id="multi-warning"
      label="Multiline"
      multiline
      style={{ resize: 'none' }}
      rows={3}
      helperText="Helper/warning text"
      variant="warning"
      helperIcon={<Icon name="error_filled" title="Error" />}
    />
    <TextField
      id="multi-warning-two"
      label="Multiline"
      multiline
      style={{ resize: 'none' }}
      rows={3}
      helperText="Helper/warning text"
      variant="warning"
      inputIcon={<Icon name="warning_filled" title="Warning" />}
    />
    <TextField
      id="multi-success"
      label="Multiline"
      multiline
      style={{ resize: 'none' }}
      rows={3}
      helperText="Helper text"
      variant="success"
      helperIcon={<Icon name="error_filled" title="Error" />}
    />
    <TextField
      id="multi-success-two"
      label="Multiline"
      multiline
      style={{ resize: 'none' }}
      rows={3}
      helperText="Helper text"
      variant="success"
      inputIcon={<Icon name="warning_filled" title="Warning" />}
    />
  </Wrapper>
)

Variants.parameters = {
  docs: {
    storyDescription: `Examples of validation states. You can add the icon in the helper
    text or inside the text input, both not in both places.`,
  },
}

import { Story, Meta } from '@storybook/react'
import Logo, { LogoPropos } from '.'

export default {
  title: 'Logo',
  component: Logo,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<LogoPropos> = (args) => <Logo {...args} />

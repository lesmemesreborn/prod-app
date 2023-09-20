import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Loader } from './Loader';

export default {
    title: 'widget/Loader',
    component: Loader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Loader>;

const Template: StoryFn<typeof Loader> = (args) => <Loader {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Text>;

const Template: StoryFn<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title',
    text: 'Text lorem ipsum',
};

export const Error = Template.bind({});
Error.args = {
    title: 'Title',
    text: 'Text lorem ipsum',
    theme: TextTheme.ERROR,
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Title',
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'Text lorem ipsum',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title',
    text: 'Text lorem ipsum',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'Title',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: 'Text lorem ipsum',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

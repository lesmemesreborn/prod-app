import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom'; // Импортируем Router для корректной работы Link
import { AppLink, AppLinkTheme } from './AppLink';

export default {
    title: 'AppLink',
    component: AppLink,
} as Meta;

const Template: StoryFn = (args) => (
    <Router>
        <AppLink to="/" {...args}>Sample Link</AppLink>
    </Router>
);

export const Primary = Template.bind({});
Primary.args = {
    theme: AppLinkTheme.PRIMARY,
};

export const Secondary = Template.bind({});
Secondary.args = {
    theme: AppLinkTheme.SECONDARY,
};

export const Red = Template.bind({});
Red.args = {
    theme: AppLinkTheme.RED,
};

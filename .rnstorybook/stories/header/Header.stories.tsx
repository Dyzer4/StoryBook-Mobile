import type { Meta, StoryObj } from '@storybook/react-native';
import { Header } from './Header';

const meta = {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    backgroundColor: { control: 'color' },
    buttonTextColor: { control: 'color' },
    buttonBackgroundColor: { control: 'color' },
  },
  args: {
    texto: 'Minha Tela',
    backgroundColor: '#FF0000',
    buttonTextColor: '#FFFFFF',
    buttonBackgroundColor: '#000000',
  },
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CustomColors: Story = {
  args: {
    texto: 'Header Azul',
    backgroundColor: '#1E90FF',
    buttonTextColor: '#FFFFFF',
    buttonBackgroundColor: '#333333',
  },
};

export const WithLogo: Story = {
  args: {
    texto: 'Com Logo',
    logo: require('../../../assets/favicon.png'),
    backgroundColor: '#222222',
    buttonTextColor: '#FFFFFF',
    buttonBackgroundColor: '#555555',
  },
};
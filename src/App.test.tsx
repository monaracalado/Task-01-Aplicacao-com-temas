
import { render, screen, fireEvent} from '@testing-library/react';
import App from './App';
import path from 'path';

test('changes background image when clicking on house buttons', () => {
  render(<App />);
  const appWrapper = screen.getByTestId('app-wrapper');

    expect(appWrapper).toHaveStyle(`background-image: url("${path.resolve(__dirname, '../assets/backgroundImg.jpg')}")`);

    const gryffindorButton = screen.getByText('Gryffindor');
    fireEvent.click(gryffindorButton);
    expect(appWrapper).toHaveStyle(`background-image: url("${path.resolve(__dirname, '../assets/Gryffindor.jpg')}")`);
  
  });

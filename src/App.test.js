import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('calculate1 returns correct result', () => {
  render(<App />);
  const inputs = screen.getAllByRole('textbox');
  const calculateButton1 = screen.getByTestId('calculate1-button');

  fireEvent.change(inputs[0], { target: { value: '25' } });
  fireEvent.change(inputs[1], { target: { value: '500' } });
  fireEvent.click(calculateButton1);

  expect(inputs[0].value).toBe('25');
  expect(inputs[1].value).toBe('500');
  expect(screen.getByText('125.00')).toBeInTheDocument();
});

test('calculate2 returns correct result', () => {
  render(<App />);
  const inputs = screen.getAllByRole('textbox');
  const calculateButton2 = screen.getByTestId('calculate2-button');

  fireEvent.change(inputs[2], { target: { value: '2' } });
  fireEvent.change(inputs[3], { target: { value: '50' } });
  fireEvent.click(calculateButton2);

  expect(inputs[2].value).toBe('2');
  expect(inputs[3].value).toBe('50');
  expect(screen.getByText('4.00')).toBeInTheDocument();
});

test('calculate3 returns correct result', () => {
  render(<App />);
  const inputs = screen.getAllByRole('textbox');
  const calculateButton3 = screen.getByTestId('calculate3-button');

  fireEvent.change(inputs[4], { target: { value: '100' } });
  fireEvent.change(inputs[5], { target: { value: '110' } });
  fireEvent.click(calculateButton3);

  expect(inputs[4].value).toBe('100');
  expect(inputs[5].value).toBe('110');
  expect(screen.getByText('10.00')).toBeInTheDocument();
});

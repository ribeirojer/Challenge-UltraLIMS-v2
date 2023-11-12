import React from 'react';
import Message from '../src/components/Message';
import { render } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
// @vitest-environment happy-dom

describe('Message component', () => {
  it('should render the Message component with the correct message and color', () => {
    const { container } = render(<Message color="blue">Hello, World!</Message>);
    const messageElement = container.children[0]
    expect(messageElement).toBeTruthy();
    expect(messageElement).toHaveProperty('className', 'text-center text-blue-500 mt-4');
  });

  it('should not render anything if the message prop is empty', () => {
    const { container } = render(<Message color="red"></Message>);
    expect(container.firstChild).toBeNull();
  });
  
  it('should have the correct color class for different color props', () => {
    const { container } = render(<Message color="green">Testing color classes</Message>);
    const messageElement = container.children[0]
    expect(messageElement).toHaveProperty('className', 'text-center text-green-500 mt-4');

    // Test with a different color
    const { getByText } = render(<Message color="yellow">Another color</Message>);
    const anotherMessageElement = getByText('Another color');
    expect(anotherMessageElement).toHaveProperty('className', 'text-center text-yellow-500 mt-4');
  });
});

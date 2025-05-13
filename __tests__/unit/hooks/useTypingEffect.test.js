import '@testing-library/jest-dom';

const { renderHook } = require('@testing-library/react');

import useTypingEffect from '../../../src/hooks/useTypingEffect';

// Mock de document.getElementById
beforeAll(() => {
  document.getElementById = jest.fn(() => ({
    textContent: ''
  }));
});

test('initialise correctement le hook', () => {
  const texts = [{ id: 'test', text: 'Hello' }];
  renderHook(() => useTypingEffect(texts));
  
  expect(document.getElementById).toHaveBeenCalledWith('test');
});
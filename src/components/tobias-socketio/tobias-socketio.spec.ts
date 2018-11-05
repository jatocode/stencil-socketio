import { TestWindow } from '@stencil/core/testing';
import { TobiasSocketio } from './tobias-socketio';

describe('tobias-socketio', () => {
  it('should build', () => {
    expect(new TobiasSocketio()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLTobiasSocketioElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [TobiasSocketio],
        html: '<tobias-socketio></tobias-socketio>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});

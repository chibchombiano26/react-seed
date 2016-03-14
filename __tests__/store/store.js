/*global waitsFor, jest, expect, runs, pit*/
jest.unmock('../../app/services/twits');

import * as twits from '../../app/services/twits';

describe('async tests', () => {
  // Use `pit` instead of `it` for testing promises.
  // The promise that is being tested should be returned.
  pit('works with promises', () => {
    return twits.getTwits(5)
      .then(name => {
        expect(name.length).toBeGreaterThan(0);
      });
  });
});
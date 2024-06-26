import { flushSync } from 'svelte';
import { test } from '../../test';

export default test({
	async test({ assert, target }) {
		target.querySelector('button')?.click();
		flushSync();
		await Promise.resolve();

		const options = target.querySelectorAll('option');
		assert.equal(options[0].selected, false);
		assert.equal(options[1].selected, true);
		assert.equal(options[2].selected, false);
		assert.equal(options[3].selected, false);
		assert.equal(options[4].selected, true);
		assert.equal(options[5].selected, false);
	}
});

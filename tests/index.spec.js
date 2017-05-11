import delayOk from '../src/index'

test('test delay', async () => {
    const res = await delayOk();
    expect(res).toBe('ok!');
});
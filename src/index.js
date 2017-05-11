

export default () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve('ok!'), 500);
    });
}
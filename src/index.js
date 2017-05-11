

export const foo = (someValue) => {
    return `You provided ${someValue}`;
}


export default () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve('ok!'), 500);
    });
}
export type TPretty<T> = {
    [K in keyof T]: T[K] & {};
};

export type TValueOf<T> = T[keyof T];

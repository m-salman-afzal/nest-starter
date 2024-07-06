export type TPretty<T> = {
    [K in keyof T]: T[K] & {};
};

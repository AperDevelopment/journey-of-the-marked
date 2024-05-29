export interface User {
    token: {
        value: string;
        expiration: Date;
    };
    name: string;
    role: string;
}
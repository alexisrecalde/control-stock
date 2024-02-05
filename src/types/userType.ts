export type User = {
    id: string;
    nombre: string;
    apellido: string;
    email: string;
    rol: string;
    password: string;
}

export type EncryptedPassword = {
    password: string;
}

export type AuthTokenResponse = {
    access_token: string;
    user: Partial<User>;
};
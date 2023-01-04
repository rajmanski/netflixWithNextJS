import { Magic } from 'magic-sdk';

const MAGIC_KEY = process.env.NEXT_PUBLIC_MAGIC_KEY
export const createMagic = () => {
    return (typeof window !== 'undefined' && 
    new Magic(MAGIC_KEY));
}

const magic = createMagic();





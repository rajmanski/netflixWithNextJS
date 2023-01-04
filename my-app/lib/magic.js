import { Magic } from 'magic-sdk';

const MAGIC_KEY = process.env.NEXT_PUBLIC_MAGIC_KEY
const createMagic = () => {
    return (typeof window !== 'undefined' && 
    new Magic(process.env.NEXT_PUBLIC_MAGIC_KEY));
}

export const magic = createMagic();





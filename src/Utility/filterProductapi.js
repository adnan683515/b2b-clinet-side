

export const productsPromise = (cetagory) => {
    const  encodedCategory = encodeURIComponent(cetagory);
    return fetch(`https://b2b-server-side.vercel.app/filterProduct?cetagory=${encodedCategory}`).then((res) => res.json())
}
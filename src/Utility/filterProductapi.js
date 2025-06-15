


export const productsPromise = (cetagory,email,token) => {

    

    const  encodedCategory = encodeURIComponent(cetagory);
    
    return fetch(`https://b2b-server-side.vercel.app/filterProduct?cetagory=${encodedCategory}&email=${email}`,{
        headers : {
            Authorization : `Bearar ${token}`
        }
    }).then((res) => res.json())
}
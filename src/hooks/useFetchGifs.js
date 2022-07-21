import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false);
    }                                        
    useEffect( () => {
        getImages();
        
    }, []);

    return {

        images,//images: images, (con ES6 cuando una propiedad que apunta a una variable on el mism nombre se puede poner solo el nombre de la propiedad)
        isLoading
    }

}

import React, {useState} from 'react';

interface ImageUtilsProps {
    img: string,
    defaultImage: string,
    click?: boolean
}

export const Image = (props: ImageUtilsProps) => {
    const {img, defaultImage, click} = props;
    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
        setImageError(true);
    };

    // const handleImageClick = () => {
    //
    // }

    return (
        <img
            src={imageError ? defaultImage : img}
            alt="default"
            onError={handleImageError}
            // onClick={click && handleImageClick}
        />
    );
}
import React, { Fragment } from 'react';
import CatItem from './../catItem/CatItem';
import Select from './../select/Select';
import Fade from 'react-reveal/Fade';


const Interactions = ({ interaction, index, handleSelectedActions, options }) => {
    return (
        <Fragment key={index}>
            <Fade left>
                <CatItem key={ImageBitmapRenderingContext} text={interaction}> </CatItem>
            </Fade>
            <Fade right>
                <Select
                    handleSelectedActions={handleSelectedActions}
                    options={options} />
            </Fade>
        </Fragment>
    );
};

export default Interactions;
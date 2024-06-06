import React, { FC } from 'react';
import { Preloader } from '../../icons';

type LoaderProps = {
    height?: number
    width?: number,
    fill?: string
}
const Loader: FC<LoaderProps> = ({ height = 100, width = 100, fill = "#fb0" }) => {
    return (
        <div className="f-c-col infiniteSpin w-content h-content">
            <Preloader fill={fill} height={height} width={width} />
        </div>
    );
};

export default Loader;
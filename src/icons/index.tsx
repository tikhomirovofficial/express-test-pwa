import React, { FC } from 'react';

interface IconProps {
    width?: number,
    height?: number,
    fill?: string,
    stroke?: string
}

export const CloseIcon: FC<IconProps> = ({ width = 21, height = 21 }) => {
    return (

        <svg width={width} height={height} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.453073 17.2239C0.232369 17.4401 0.238567 17.7849 0.466816 17.994C0.69512 18.2031 1.05908 18.1972 1.27973 17.9809L17.9516 1.64194C18.1722 1.42566 18.1661 1.08085 17.9378 0.871815C17.7095 0.662727 17.3456 0.668599 17.1249 0.884835L0.453073 17.2239Z" fill="black" />
            <path d="M17.1249 17.9809C17.3456 18.1972 17.7095 18.203 17.9378 17.9939C18.1661 17.7849 18.1722 17.4401 17.9516 17.2238L1.27972 0.884848C1.05907 0.668586 0.695106 0.66274 0.46683 0.871803C0.238553 1.08084 0.232382 1.42564 0.453059 1.64191L17.1249 17.9809Z" fill="black" />
        </svg>

    );
};
export const TickBlueIcon: FC<IconProps> = ({ width = 18, height = 18 }) => {
    return (

        <svg xmlns="http://www.w3.org/2000/svg" style={{ minHeight: height, minWidth: width }} width={width} height={height} viewBox="0 0 18 18" fill="none">
            <path d="M2.51466 6.71282C3.00328 4.62975 4.62976 3.00328 6.71282 2.51466C8.21719 2.16178 9.78281 2.16178 11.2872 2.51466C13.3702 3.00328 14.9967 4.62976 15.4853 6.71283C15.8382 8.21719 15.8382 9.78281 15.4853 11.2872C14.9967 13.3702 13.3702 14.9967 11.2872 15.4853C9.78281 15.8382 8.21719 15.8382 6.71283 15.4853C4.62976 14.9967 3.00328 13.3702 2.51466 11.2872C2.16178 9.78281 2.16178 8.21719 2.51466 6.71282Z" fill="#36CACB" fill-opacity="0.15" stroke="#36CACB" stroke-width="1.125" />
            <path d="M6.9375 8.8125L8.4375 10.3125L11.0625 7.5" stroke="#36CACB" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
        </svg>


    );
};
export const DocumentIcon: FC<IconProps> = ({ width = 40, height = 40 }) => {
    return (

        <svg width={width} height={height} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="#F4FAFA" />
            <path d="M22.4774 22.8156H17.6641" stroke="#4D4D4D" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M22.4774 20.0246H17.6641" stroke="#4D4D4D" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M19.5007 17.2401H17.6641" stroke="#4D4D4D" stroke-linecap="round" stroke-linejoin="round" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.6058 13.8333C22.6058 13.8333 17.4878 13.8359 17.4798 13.8359C15.6398 13.8473 14.5005 15.0579 14.5005 16.9046V23.0353C14.5005 24.8913 15.6485 26.1066 17.5045 26.1066C17.5045 26.1066 22.6218 26.1046 22.6305 26.1046C24.4705 26.0933 25.6105 24.8819 25.6105 23.0353V16.9046C25.6105 15.0486 24.4618 13.8333 22.6058 13.8333Z" stroke="#4D4D4D" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    );
};



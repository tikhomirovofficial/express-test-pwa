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
export const SearchIcon: FC<IconProps> = ({ width = 16, height = 16 }) => {
    return (

        <svg width={width} height={height} viewBox="0 0 17 18" fill="none">
            <path d="M0 7.43555C0 6.52246 0.171549 5.66748 0.514648 4.87061C0.857747 4.0682 1.33366 3.36263 1.94238 2.75391C2.55111 2.14518 3.25391 1.66927 4.05078 1.32617C4.85319 0.983073 5.71094 0.811523 6.62402 0.811523C7.53711 0.811523 8.39209 0.983073 9.18896 1.32617C9.99137 1.66927 10.6969 2.14518 11.3057 2.75391C11.9144 3.36263 12.3903 4.0682 12.7334 4.87061C13.0765 5.66748 13.248 6.52246 13.248 7.43555C13.248 8.19369 13.1263 8.91309 12.8828 9.59375C12.6449 10.2744 12.3128 10.8914 11.8867 11.4448L15.9458 15.5288C16.0343 15.6174 16.1007 15.7197 16.145 15.8359C16.1948 15.9521 16.2197 16.0767 16.2197 16.2095C16.2197 16.3921 16.1782 16.5581 16.0952 16.7075C16.0177 16.8569 15.9071 16.9731 15.7632 17.0562C15.6193 17.1447 15.4533 17.189 15.2651 17.189C15.1323 17.189 15.005 17.1641 14.8833 17.1143C14.7671 17.07 14.6592 17.0008 14.5596 16.9067L10.4756 12.8145C9.93327 13.2018 9.33561 13.5062 8.68262 13.7275C8.02962 13.9489 7.34342 14.0596 6.62402 14.0596C5.71094 14.0596 4.85319 13.888 4.05078 13.5449C3.25391 13.2018 2.55111 12.7259 1.94238 12.1172C1.33366 11.5085 0.857747 10.8057 0.514648 10.0088C0.171549 9.20638 0 8.34863 0 7.43555ZM1.41943 7.43555C1.41943 8.15495 1.55225 8.83008 1.81787 9.46094C2.08903 10.0863 2.46257 10.6369 2.93848 11.1128C3.41992 11.5887 3.97331 11.9622 4.59863 12.2334C5.22949 12.5046 5.90462 12.6401 6.62402 12.6401C7.34342 12.6401 8.01579 12.5046 8.64111 12.2334C9.27197 11.9622 9.82536 11.5887 10.3013 11.1128C10.7772 10.6369 11.1507 10.0863 11.4219 9.46094C11.693 8.83008 11.8286 8.15495 11.8286 7.43555C11.8286 6.71615 11.693 6.04378 11.4219 5.41846C11.1507 4.7876 10.7772 4.23421 10.3013 3.7583C9.82536 3.27686 9.27197 2.90332 8.64111 2.6377C8.01579 2.36654 7.34342 2.23096 6.62402 2.23096C5.90462 2.23096 5.22949 2.36654 4.59863 2.6377C3.97331 2.90332 3.41992 3.27686 2.93848 3.7583C2.46257 4.23421 2.08903 4.7876 1.81787 5.41846C1.55225 6.04378 1.41943 6.71615 1.41943 7.43555Z" fill="#3C3C43" fill-opacity="0.6" />
        </svg>

    );
};
export const AvatarIcon: FC<IconProps> = ({ width = 40, height = 40 }) => {
    return (

        <svg width={width} height={height} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="#F4FAFA" />
            <circle cx="19.7193" cy="16.8519" r="3.18535" stroke="#4D4D4D" stroke-linecap="round" stroke-linejoin="round" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6667 24.4672C14.6658 24.2433 14.7159 24.0221 14.8131 23.8204C15.1182 23.2102 15.9787 22.8867 16.6926 22.7403C17.2075 22.6304 17.7295 22.557 18.2548 22.5206C19.2272 22.4352 20.2053 22.4352 21.1777 22.5206C21.7029 22.5574 22.2249 22.6308 22.7399 22.7403C23.4539 22.8867 24.3143 23.1796 24.6194 23.8204C24.8149 24.2316 24.8149 24.709 24.6194 25.1202C24.3143 25.7609 23.4539 26.0538 22.7399 26.1941C22.2256 26.3086 21.7034 26.384 21.1777 26.4199C20.3862 26.487 19.5911 26.4993 18.7979 26.4565C18.6148 26.4565 18.4378 26.4565 18.2548 26.4199C17.7311 26.3845 17.2109 26.309 16.6987 26.1941C15.9787 26.0538 15.1243 25.7609 14.8131 25.1202C14.7164 24.9161 14.6664 24.693 14.6667 24.4672Z" stroke="#4D4D4D" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    );
};
export const UncheckedCircle: FC<IconProps> = ({ width = 24, height = 24 }) => {
    return (

        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="9.25" fill="white" stroke="#4D4D4D" stroke-width="1.5" />
        </svg>

    );
};
export const ArrowRight: FC<IconProps> = ({ width = 24, height = 24 }) => {
    return (

        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5 5L15.5 12L8.5 19" stroke="#A9A9A9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    );
};


export const CheckedCircle: FC<IconProps> = ({ width = 24, height = 24 }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="9.25" fill="url(#paint0_linear_502_751)" stroke="url(#paint1_linear_502_751)" stroke-width="1.5" />
            <path d="M8.43994 12L10.8139 14.373L15.5599 9.62695" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <defs>
                <linearGradient id="paint0_linear_502_751" x1="2.75" y1="21.25" x2="21.25" y2="2.75" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#12B2B3" />
                    <stop offset="1" stop-color="#56E0E0" />
                </linearGradient>
                <linearGradient id="paint1_linear_502_751" x1="2.75" y1="21.25" x2="21.25" y2="2.75" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#12B2B3" />
                    <stop offset="1" stop-color="#56E0E0" />
                </linearGradient>
            </defs>
        </svg>

    );
};
export const AddIcon: FC<IconProps> = ({ width = 24, height = 24 }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6857 2H7.31429C4.04762 2 2 4.31208 2 7.58516V16.4148C2 19.6879 4.0381 22 7.31429 22H16.6857C19.9619 22 22 19.6879 22 16.4148V7.58516C22 4.31208 19.9619 2 16.6857 2Z" fill="#FFCF00" stroke="#FFCF00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 8.32715V15.6535" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M15.6667 11.9904H8.33337" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );
};
export const RemoveIcon: FC<IconProps> = ({ width = 24, height = 24 }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6857 2.5H7.31429C4.04762 2.5 2 4.81208 2 8.08516V16.9148C2 20.1879 4.0381 22.5 7.31429 22.5H16.6857C19.9619 22.5 22 20.1879 22 16.9148V8.08516C22 4.81208 19.9619 2.5 16.6857 2.5Z" fill="url(#paint0_linear_502_6077)" stroke="url(#paint1_linear_502_6077)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M15.6667 12.4904H8.33337" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <defs>
                <linearGradient id="paint0_linear_502_6077" x1="2" y1="22.5" x2="22" y2="2.5" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#12B2B3" />
                    <stop offset="1" stop-color="#56E0E0" />
                </linearGradient>
                <linearGradient id="paint1_linear_502_6077" x1="2" y1="22.5" x2="22" y2="2.5" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#12B2B3" />
                    <stop offset="1" stop-color="#56E0E0" />
                </linearGradient>
            </defs>
        </svg>

    );
};
export const HeartIcon: FC<IconProps> = ({ width = 18, height = 18 }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.82076 15.6403C7.1928 14.6384 5.67833 13.4592 4.30447 12.1239C3.33858 11.1622 2.60325 9.98983 2.15482 8.69654C1.34786 6.18773 2.29045 3.31562 4.92834 2.46564C6.31471 2.01933 7.82884 2.27441 8.99707 3.15111C10.1657 2.27548 11.6793 2.02048 13.0658 2.46564C15.7037 3.31562 16.6531 6.18773 15.8461 8.69654C15.3977 9.98983 14.6623 11.1622 13.6965 12.1239C12.3226 13.4592 10.8081 14.6384 9.18016 15.6403L9.00385 15.75L8.82076 15.6403Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M11.8044 5.28955C12.6034 5.54478 13.1711 6.26208 13.2421 7.10604" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    );
};
export const TrashIcon: FC<IconProps> = ({ width = 24, height = 24 }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.3249 9.46777C19.3249 9.46777 18.7819 16.2028 18.4669 19.0398C18.3169 20.3948 17.4799 21.1888 16.1089 21.2138C13.4999 21.2608 10.8879 21.2638 8.27991 21.2088C6.96091 21.1818 6.13791 20.3778 5.99091 19.0468C5.67391 16.1848 5.13391 9.46777 5.13391 9.46777" stroke="#F40F0F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M20.7082 6.23926H3.75024" stroke="#F40F0F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M17.4407 6.23949C16.6557 6.23949 15.9797 5.68449 15.8257 4.91549L15.5827 3.69949C15.4327 3.13849 14.9247 2.75049 14.3457 2.75049H10.1127C9.5337 2.75049 9.0257 3.13849 8.8757 3.69949L8.6327 4.91549C8.4787 5.68449 7.8027 6.23949 7.0177 6.23949" stroke="#F40F0F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    );
};

export const LogoIcon: FC<IconProps> = ({ width = 44, height = 64 }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 44 64" fill="none">
            <path d="M0.0854874 -0.000250816L0.0854874 12.1504L43.6949 12.1504V-0.000250816L0.0854874 -0.000250816Z" fill="#FFCF00" />
            <path d="M43.6095 18.2231H11.5754H0V30.3738V63.9997H11.5754V38.9639L35.426 63.9997L43.6095 55.4096L19.7589 30.3738H43.6095V18.2231Z" fill="#FFCF00" />
        </svg>
    );
};
export const AnalysisIcon: FC<IconProps> = ({ width = 64, height = 64 }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="32" fill="#F4FAFA" />
            <rect opacity="0.01" x="20" y="20" width="24" height="24" fill="black" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M30.3984 22H22.7812C22.3497 22 22 22.3497 22 22.7812C22 23.2128 22.3497 23.5625 22.7812 23.5625H23.1719V38.582C23.1719 40.4666 24.7052 42 26.5898 42C28.4745 42 30.0078 40.4666 30.0078 38.582V29.4219C30.0078 28.9904 29.6581 28.6406 29.2266 28.6406H24.7344V23.5625H28.4453V25.5156C28.4453 25.9471 28.795 26.2969 29.2266 26.2969C29.6581 26.2969 30.0078 25.9471 30.0078 25.5156V23.5625H30.3984C30.83 23.5625 31.1797 23.2128 31.1797 22.7812C31.1797 22.3497 30.83 22 30.3984 22ZM28.4453 30.2031V38.582C28.4453 39.6051 27.6129 40.4375 26.5898 40.4375C25.5667 40.4375 24.7344 39.6051 24.7344 38.582V30.2031H28.4453ZM41.2188 22H33.6016C33.17 22 32.8203 22.3497 32.8203 22.7812C32.8203 23.2128 33.17 23.5625 33.6016 23.5625H33.9922V38.582C33.9922 40.4666 35.5255 42 37.4102 42C39.2948 42 40.8281 40.4666 40.8281 38.582V31.7656C40.8281 31.3341 40.4784 30.9844 40.0469 30.9844H35.5547V23.5625H39.2656V27.8594C39.2656 28.2909 39.6154 28.6406 40.0469 28.6406C40.4784 28.6406 40.8281 28.2909 40.8281 27.8594V23.5625H41.2188C41.6503 23.5625 42 23.2128 42 22.7812C42 22.3497 41.6503 22 41.2188 22ZM39.2656 32.5469V38.582C39.2656 39.6051 38.4333 40.4375 37.4102 40.4375C36.3871 40.4375 35.5547 39.6051 35.5547 38.582V32.5469H39.2656Z" fill="#4D4D4D" />
        </svg>

    );
};
export const DownloadIcon: FC<IconProps> = ({ width = 24, height = 24 }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.1222 15.436L12.1222 3.39502" stroke="#D7D7D7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M15.0382 12.5083L12.1222 15.4363L9.20619 12.5083" stroke="#D7D7D7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path opacity="0.4" d="M16.755 8.12793H17.688C19.723 8.12793 21.372 9.77693 21.372 11.8129V16.6969C21.372 18.7269 19.727 20.3719 17.697 20.3719L6.55699 20.3719C4.52199 20.3719 2.87199 18.7219 2.87199 16.6869V11.8019C2.87199 9.77293 4.51799 8.12793 6.54699 8.12793L7.48899 8.12793" stroke="#D7D7D7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    );
};









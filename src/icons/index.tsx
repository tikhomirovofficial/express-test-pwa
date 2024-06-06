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
export const TelegramIcon: FC<IconProps> = ({ width = 77, height = 64 }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 77 64" fill="none">
            <path d="M28.7056 60.1517C26.4243 60.1517 26.8337 59.2743 26.0148 57.1099L19.3464 35.1158L60.7609 9.26099L65.616 10.5479L61.5798 21.5449L28.7056 60.1517Z" fill="#C8DAEA" />
            <path d="M28.7056 60.1519C30.4605 60.1519 31.2209 59.333 32.2153 58.397C33.7362 56.9347 53.2735 37.9238 53.2735 37.9238L41.2821 34.999L30.168 42.0184L28.7056 59.5669V60.1519Z" fill="#A9C9DD" />
            <path d="M29.8755 42.2524L58.1871 63.1352C61.4044 64.89 63.7442 64.0126 64.5631 60.1519L76.0866 5.8685C77.2565 1.1304 74.2733 -0.97542 71.173 0.428461L3.55276 26.5173C-1.06835 28.3891 -1.00986 30.9629 2.73382 32.0743L20.1069 37.5143L60.293 12.186C62.1648 11.0161 63.9197 11.6595 62.5158 12.9464L29.8755 42.2524Z" fill="url(#paint0_linear_474_23003)" />
            <defs>
                <linearGradient id="paint0_linear_474_23003" x1="46.8338" y1="30.1761" x2="61.4576" y2="53.5741" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#EFF7FC" />
                    <stop offset="1" stop-color="white" />
                </linearGradient>
            </defs>
        </svg>

    );
};
export const WhatsAppIcon: FC<IconProps> = ({ width = 64, height = 64 }) => {
    return (

        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 64 64" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M54.6474 9.28914C48.6241 3.2911 40.6438 0 32.1222 0C14.5675 0 0.268864 14.2145 0.268864 31.7201C0.268864 37.3026 1.73714 42.7652 4.52878 47.5671L0 64L16.893 59.5875C21.544 62.1224 26.7851 63.4402 32.1222 63.4402H32.1466C49.7013 63.4402 64 49.2013 64 31.7201C63.9756 23.2342 60.6689 15.2854 54.6474 9.28914ZM32.1222 58.075C27.3717 58.075 22.6963 56.8076 18.6319 54.3927L17.6769 53.8311L7.63817 56.4407L10.3076 46.7135L9.67036 45.7138C7.02537 41.5204 5.63042 36.668 5.63042 31.694C5.63042 17.1631 17.5041 5.33913 32.1205 5.33913C39.1965 5.33913 45.8308 8.09475 50.8501 13.067C55.8451 18.0411 58.6105 24.672 58.5861 31.7184C58.5878 46.2493 46.7142 58.075 32.1222 58.075ZM46.6408 38.3266C45.8325 37.9372 41.9392 36.0109 41.206 35.7431C40.4727 35.4754 39.9577 35.3537 39.4182 36.1326C38.8787 36.9375 37.3616 38.7161 36.8972 39.229C36.4328 39.7662 35.9666 39.8148 35.1827 39.4237C34.3744 39.0342 31.8289 38.1806 28.7928 35.498C26.4185 33.4013 24.8262 30.7917 24.3618 30.0128C23.8974 29.2079 24.3129 28.7941 24.704 28.4029C25.0707 28.0378 25.5124 27.4763 25.9034 27.0138C26.2945 26.5513 26.4429 26.2088 26.7118 25.6977C26.9806 25.1605 26.834 24.698 26.6384 24.3086C26.4429 23.9192 24.8507 20.0178 24.1907 18.4322C23.5535 16.8971 22.8936 17.0918 22.403 17.0675C21.9386 17.0431 21.3991 17.0431 20.8858 17.0431C20.3463 17.0431 19.4909 17.2379 18.7559 18.0428C18.0208 18.8478 15.9642 20.7498 15.9642 24.6494C15.9642 28.549 18.8047 32.3042 19.2203 32.8415C19.6113 33.3787 24.8262 41.3743 32.8083 44.8132C34.7183 45.6182 36.1866 46.105 37.3371 46.4718C39.2471 47.082 40.986 46.9829 42.3565 46.7882C43.8736 46.5692 47.0581 44.8619 47.718 43.0086C48.3797 41.1553 48.3797 39.5714 48.1824 39.229C47.9625 38.9351 47.4247 38.7404 46.6408 38.3266Z" fill="white" />
        </svg>
    );
};
export const HomeIcon: FC<IconProps> = ({ width = 24, height = 24 }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.15722 20.7714V17.7047C9.1572 16.9246 9.79312 16.2908 10.581 16.2856H13.4671C14.2587 16.2856 14.9005 16.9209 14.9005 17.7047V17.7047V20.7809C14.9003 21.4432 15.4343 21.9845 16.103 22H18.0271C19.9451 22 21.5 20.4607 21.5 18.5618V18.5618V9.83784C21.4898 9.09083 21.1355 8.38935 20.538 7.93303L13.9577 2.6853C12.8049 1.77157 11.1662 1.77157 10.0134 2.6853L3.46203 7.94256C2.86226 8.39702 2.50739 9.09967 2.5 9.84736V18.5618C2.5 20.4607 4.05488 22 5.97291 22H7.89696C8.58235 22 9.13797 21.4499 9.13797 20.7714V20.7714" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    );
};
export const PhoneIcon: FC<IconProps> = ({ width = 24, height = 24 }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.98995 4.87351C3.30627 4.34875 5.05018 2.44377 6.2929 2.50127C6.66469 2.53311 6.99334 2.75698 7.26037 3.01783H7.2614C7.87351 3.61756 9.62974 5.88094 9.72834 6.35745C9.97175 7.52611 8.57806 8.19978 9.00428 9.37769C10.0909 12.0364 11.9632 13.9086 14.6232 14.994C15.8002 15.4212 16.4739 14.0287 17.6427 14.2711C18.1192 14.3707 20.3839 16.1257 20.9826 16.7388V16.7388C21.2425 17.0048 21.4684 17.3344 21.4992 17.7062C21.5454 19.0155 19.5222 20.7829 19.1278 21.0088C18.1973 21.6753 16.9833 21.663 15.5034 20.975C11.3737 19.2569 4.77391 12.782 3.02384 8.49657C2.35421 7.02496 2.30902 5.8029 2.98995 4.87351Z" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M14.5654 2.75C18.2674 3.161 21.1904 6.081 21.6064 9.782" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M14.5654 6.29297C16.3354 6.63797 17.7184 8.02097 18.0634 9.79097" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );
};
export const ProfileIcon: FC<IconProps> = ({ width = 24, height = 24 }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11.5789" cy="7.27803" r="4.77803" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.00002 18.7013C3.99873 18.3654 4.07385 18.0336 4.2197 17.7311C4.67736 16.8157 5.96798 16.3306 7.03892 16.1109C7.81128 15.9461 8.59431 15.836 9.38217 15.7814C10.8408 15.6533 12.3079 15.6533 13.7666 15.7814C14.5544 15.8366 15.3374 15.9467 16.1099 16.1109C17.1808 16.3306 18.4714 16.77 18.9291 17.7311C19.2224 18.3479 19.2224 19.0639 18.9291 19.6807C18.4714 20.6418 17.1808 21.0812 16.1099 21.2917C15.3384 21.4633 14.5551 21.5766 13.7666 21.6304C12.5794 21.731 11.3866 21.7494 10.1968 21.6853C9.92221 21.6853 9.65677 21.6853 9.38217 21.6304C8.59663 21.5772 7.81632 21.464 7.04807 21.2917C5.96798 21.0812 4.68652 20.6418 4.2197 19.6807C4.0746 19.3746 3.99955 19.04 4.00002 18.7013Z" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    );
};
export const ProfileCircleIcon: FC<IconProps> = ({ width = 64, height = 64 }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="32" fill="#F4FAFA" />
            <circle cx="31.5789" cy="27.278" r="4.77803" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M24 38.7013C23.9987 38.3654 24.0739 38.0336 24.2197 37.7311C24.6774 36.8157 25.968 36.3306 27.0389 36.1109C27.8113 35.9461 28.5943 35.836 29.3822 35.7814C30.8408 35.6533 32.3079 35.6533 33.7666 35.7814C34.5544 35.8366 35.3374 35.9467 36.1099 36.1109C37.1808 36.3306 38.4714 36.77 38.9291 37.7311C39.2224 38.3479 39.2224 39.0639 38.9291 39.6807C38.4714 40.6418 37.1808 41.0812 36.1099 41.2917C35.3384 41.4633 34.5551 41.5766 33.7666 41.6304C32.5794 41.731 31.3866 41.7494 30.1968 41.6853C29.9222 41.6853 29.6568 41.6853 29.3822 41.6304C28.5966 41.5772 27.8163 41.464 27.0481 41.2917C25.968 41.0812 24.6865 40.6418 24.2197 39.6807C24.0746 39.3746 23.9996 39.04 24 38.7013Z" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>


    );
};
export const FinancesIcon: FC<IconProps> = ({ width = 64, height = 64 }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="32" fill="#F4FAFA" />
            <path d="M41.6389 34.3957H37.5906C36.1042 34.3948 34.8993 33.1909 34.8984 31.7045C34.8984 30.218 36.1042 29.0141 37.5906 29.0132H41.6389" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M38.0485 31.6429H37.7369" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M27.7477 23H36.3911C39.2892 23 41.6388 25.3495 41.6388 28.2477V35.4247C41.6388 38.3229 39.2892 40.6724 36.3911 40.6724H27.7477C24.8495 40.6724 22.5 38.3229 22.5 35.4247V28.2477C22.5 25.3495 24.8495 23 27.7477 23Z" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M27.0356 27.5382H32.4346" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    );
};
export const PatientsIcon: FC<IconProps> = ({ width = 64, height = 64 }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="32" fill="#F4FAFA" />
            <path d="M37.5948 30.9319C39.1972 30.9319 40.497 29.633 40.497 28.0306C40.497 26.4283 39.1972 25.1294 37.5948 25.1294" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M38.9291 34.0847C39.4076 34.1177 39.8833 34.1856 40.3517 34.291C41.0026 34.4184 41.7854 34.6851 42.0641 35.2691C42.2419 35.6431 42.2419 36.0785 42.0641 36.4534C41.7863 37.0373 41.0026 37.3031 40.3517 37.437" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M26.29 30.9319C24.6877 30.9319 23.3878 29.633 23.3878 28.0306C23.3878 26.4283 24.6877 25.1294 26.29 25.1294" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M24.9558 34.0847C24.4773 34.1177 24.0015 34.1856 23.5331 34.291C22.8823 34.4184 22.0994 34.6851 21.8217 35.2691C21.6429 35.6431 21.6429 36.0785 21.8217 36.4534C22.0985 37.0373 22.8823 37.3031 23.5331 37.437" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M31.9378 34.7095C35.1846 34.7095 37.9584 35.2008 37.9584 37.1671C37.9584 39.1324 35.2029 39.6421 31.9378 39.6421C28.69 39.6421 25.9171 39.1507 25.9171 37.1845C25.9171 35.2182 28.6726 34.7095 31.9378 34.7095Z" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M31.9377 31.9049C29.7964 31.9049 28.0795 30.188 28.0795 28.0457C28.0795 25.9044 29.7964 24.1875 31.9377 24.1875C34.0791 24.1875 35.796 25.9044 35.796 28.0457C35.796 30.188 34.0791 31.9049 31.9377 31.9049Z" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );
};
export const LogoCircleIcon: FC<IconProps> = ({ width = 64, height = 64 }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="32" fill="#F4FAFA" />
            <path d="M24.032 19.9999V24.5564H40.3856V19.9999H24.032Z" fill="#FFCF00" />
            <path d="M40.3536 26.8337H28.3408H24V31.3902V44H28.3408V34.6116L37.2848 44L40.3536 40.7787L31.4096 31.3902H40.3536V26.8337Z" fill="#FFCF00" />
        </svg>
    );
};
export const ThemeDarkIcon: FC<IconProps> = ({ width = 64, height = 64 }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="32" fill="#F4FAFA" />
            <path d="M33.3986 27.6461C33.495 27.3772 33.88 27.3772 33.9764 27.6461L34.2401 28.3811C34.271 28.4672 34.3395 28.5348 34.4266 28.5653L35.1709 28.8258C35.443 28.921 35.443 29.3012 35.1709 29.3964L34.4266 29.6569C34.3395 29.6874 34.271 29.7551 34.2401 29.8411L33.9764 30.5762C33.88 30.845 33.495 30.845 33.3986 30.5762L33.1349 29.8411C33.104 29.7551 33.0355 29.6874 32.9484 29.6569L32.2041 29.3964C31.932 29.3012 31.932 28.921 32.2041 28.8258L32.9484 28.5653C33.0355 28.5348 33.104 28.4672 33.1349 28.3811L33.3986 27.6461Z" fill="#4D4D4D" />
            <path d="M36.3074 30.9122C36.3717 30.733 36.6283 30.733 36.6926 30.9122L36.8684 31.4022C36.889 31.4596 36.9347 31.5047 36.9928 31.525L37.4889 31.6987C37.6704 31.7622 37.6704 32.0156 37.4889 32.0791L36.9928 32.2527C36.9347 32.2731 36.889 32.3182 36.8684 32.3756L36.6926 32.8656C36.6283 33.0448 36.3717 33.0448 36.3074 32.8656L36.1316 32.3756C36.111 32.3182 36.0653 32.2731 36.0072 32.2527L35.5111 32.0791C35.3296 32.0156 35.3296 31.7622 35.5111 31.6987L36.0072 31.525C36.0653 31.5047 36.111 31.4596 36.1316 31.4022L36.3074 30.9122Z" fill="#4D4D4D" />
            <path d="M37.7693 23.2918C37.9089 22.9027 38.4661 22.9027 38.6057 23.2918L39.0842 24.6255C39.1288 24.7501 39.2281 24.8481 39.3542 24.8922L40.7045 25.3647C41.0985 25.5026 41.0985 26.0529 40.7045 26.1908L39.3542 26.6634C39.2281 26.7075 39.1288 26.8055 39.0842 26.93L38.6057 28.2637C38.4661 28.6528 37.9089 28.6528 37.7693 28.2637L37.2908 26.93C37.2462 26.8055 37.1469 26.7075 37.0208 26.6634L35.6705 26.1908C35.2765 26.0529 35.2765 25.5026 35.6705 25.3647L37.0208 24.8922C37.1469 24.8481 37.2462 24.7501 37.2908 24.6255L37.7693 23.2918Z" fill="#4D4D4D" />
            <path d="M23 33.4597C23 37.6241 26.4742 41 30.7598 41C34.0591 41 36.8774 38.9993 38 36.1783C37.1109 36.5841 36.1181 36.8109 35.0709 36.8109C31.2614 36.8109 28.1732 33.8101 28.1732 30.1084C28.1732 28.5603 28.7134 27.1347 29.6205 26C25.875 26.5355 23 29.6713 23 33.4597Z" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    );
};
export const LogoutIcon: FC<IconProps> = ({ width = 64, height = 64 }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="32" fill="#F4FAFA" />
            <path d="M35.016 27.3895V26.4565C35.016 24.4215 33.366 22.7715 31.331 22.7715H26.456C24.422 22.7715 22.772 24.4215 22.772 26.4565V37.5865C22.772 39.6215 24.422 41.2715 26.456 41.2715H31.341C33.37 41.2715 35.016 39.6265 35.016 37.5975V36.6545" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M41.8094 32.0215H29.7684" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M38.8812 29.1062L41.8092 32.0212L38.8812 34.9372" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );
};
export const Preloader: FC<IconProps> = ({ width = 14, height = 14, fill = "#E2E2E9" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 14 14" fill="none">
            <path
                d="M7 13C5.81331 13 4.65327 12.6481 3.66658 11.9888C2.67988 11.3295 1.91085 10.3925 1.45672 9.2961C1.0026 8.19974 0.883777 6.99334 1.11529 5.82946C1.3468 4.66557 1.91824 3.59647 2.75736 2.75736C3.59647 1.91824 4.66557 1.3468 5.82946 1.11529C6.99334 0.883777 8.19974 1.0026 9.2961 1.45672C10.3925 1.91085 11.3295 2.67988 11.9888 3.66658C12.6481 4.65327 13 5.81331 13 7"
                stroke={fill} strokeWidth="1" />
        </svg>
    )
}
export const WifiProblemIcon: FC<IconProps> = ({ width = 140, height = 116 }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"  width={width} height={height} viewBox="0 0 140 116" fill="none">
            <path d="M70 108H70.062M8 36.7956C18.5209 26.6702 31.1983 19.0825 45.2 14.9271M26.6 63.7229C31.9476 58.0862 38.2407 53.4828 45.2 50.2135M94.8 14.9271C108.801 19.0825 121.479 26.6702 132 36.7956M94.8 50.2135C101.759 53.4828 108.052 58.0862 113.4 63.7229M70 8V81.3331" stroke="#FFCF00" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    )
}







import Main from "../pages/Main";
import NeededAuth from "../pages/NeededAuth";
import Login from "../pages/Login";
import { RoutesList } from "../types/router.types";
import { WelcomePatients } from "../pages/Welcome/WelcomePatients";
import { WelcomeConditions } from "../pages/Welcome/WelcomeConditions";
import { WelcomeFinish } from "../pages/Welcome/WelcomeFinish";
import { PatientPinned } from "../pages/Informational/PatientPinned";
import { PatientInvited } from "../pages/Informational/PatientInvited";
import { OrderSent } from "../pages/Informational/OrderSent";
import { HowGetResults } from "../pages/Informational/HowGetResults";
import { PhoneLogin } from "../pages/PhoneLogin";
import { SmsLogin } from "../pages/SmsLogin";
import { PinCreate } from "../pages/Pin/PinCreate";
import { PinLogin } from "../pages/Pin/PinLogin";
import { ProfileCreate } from "../pages/ProfileCreate";
import { DocumentAccept } from "../pages/DocumentAccept";
import { InvitingForm } from "../pages/InvitingForm";
import { InvitingPhone } from "../pages/InvitingPhone";
import { OrderPatient } from "../pages/OrderPatient";
import { OrderCategory } from "../pages/OrderCategory";
import { OrderAnalysis } from "../pages/OrderAnalysis";
import { OrderCart } from "../pages/Cart";
import { Orders } from "../pages/Orders";

export interface RoutesCollection {
    auth: RoutesList,
    public: RoutesList,
    non_auth: RoutesList
}


export const routes: RoutesCollection = {
    public: [
        {
            Component: Main,
            path: "/s"
        },
        {
            Component: WelcomePatients,
            path: "/"
        },
        {
            Component: WelcomeConditions,
            path: "/welcome-conditions"
        },
        {
            Component: WelcomeFinish,
            path: "/welcome-finish"
        },
        {
            Component: PatientPinned,
            path: "/patient-pinned"
        },
        {
            Component: PatientInvited,
            path: "/patient-invited"
        },
        {
            Component: OrderSent,
            path: "/order-sent"
        },
        {
            Component: HowGetResults,
            path: "/how-get-results"
        },
        {
            Component: PhoneLogin,
            path: "/login/phone"
        },
        {
            Component: SmsLogin,
            path: "/login/sms"
        },
        {
            Component: PinCreate,
            path: "/login/pin/create"
        },
        {
            Component: PinLogin,
            path: "/login/pin/login"
        },
        {
            Component: ProfileCreate,
            path: "/register/profile"
        },
        {
            Component: DocumentAccept,
            path: "/register/docs"
        },
        {
            Component: InvitingPhone,
            path: "/inviting/phone"
        },
        {
            Component: InvitingForm,
            path: "/inviting/form"
        },
        {
            Component: OrderPatient,
            path: "/order/patient"
        },
        {
            Component: OrderCategory,
            path: "/order/category"
        },
        {
            Component: OrderAnalysis,
            path: "/order/analysis"
        },
        {
            Component: OrderCart,
            path: "/order/cart"
        },
        {
            Component: Orders,
            path: "/orders"
        }
    ],
    auth: [
        {
            Component: NeededAuth,
            path: "/profile"
        }
    ],
    non_auth: [
        {
            Component: Login,
            path: "/login"
        }
    ]
}

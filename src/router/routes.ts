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
            path: "/welcome-patients"
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

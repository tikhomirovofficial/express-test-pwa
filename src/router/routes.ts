
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
import { ProfileCreate } from "../pages/ProfileCreate";
import { DocumentAccept } from "../pages/DocumentAccept";
import { InvitingForm } from "../pages/InvitingForm";
import { InvitingPhone } from "../pages/InvitingPhone";
import { OrderPatient } from "../pages/OrderPatient";
import { OrderCategory } from "../pages/OrderCategory";
import { OrderAnalysis } from "../pages/OrderAnalysis";
import { OrderCart } from "../pages/Cart";
import { Orders } from "../pages/Orders";
import { Help } from "../pages/Help";
import { Profile } from "../pages/Profile";
import { LoadingPage } from "../pages/LoadingPage";
import { WifiProblem } from "../pages/WifiProblem";
import { PinCreateContainer } from "../containers/RouteContainers/PinCreateContainer";
import { PinLoginContainer } from "../containers/RouteContainers/PinLoginContainer";
import { ProfileCreateContainer } from "../containers/RouteContainers/ProfileCreateContainer";
import { ProfileContainer } from "../containers/RouteContainers/ProfileContainer";
import { DocumentAcceptContainer } from "../containers/RouteContainers/DocumentAcceptContainer";
import { InvitingLinkedContainer } from "../containers/RouteContainers/InvitingLinkedContainer";
import { InvitingCreateContainer } from "../containers/RouteContainers/InvitingCreateContainer";
import { InvitedContainer } from "../containers/RouteContainers/InvitedContainer";
import { SelectedPatientContainer } from "../containers/RouteContainers/SelectedPatientContainer";
import { PhoneSmsContainer } from "../containers/RouteContainers/PhoneSmsContainer";

export interface RoutesCollection {
    auth: RoutesList,
    public: RoutesList,
    access: RoutesList,
    has_profile: RoutesList,
    non_auth: RoutesList,
    non_accessed: RoutesList
}


export const routes: RoutesCollection = {
    public: [
        {
            Component: LoadingPage,
            path: "/loading"
        },
        {
            Component: WifiProblem,
            path: "/wifi-problem"
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
    ],
    auth: [],
    access: [
        {
            Component: ProfileCreateContainer,
            path: "/register/profile"
        }
    ],
    non_accessed: [
        {
            Component: PinCreateContainer,
            path: "/login/pin/create"
        },
        {
            Component: PinLoginContainer,
            path: "/login/pin/login"
        },
    ],
    has_profile: [
        {

            Component: ProfileContainer,
            path: "/"
        },
        {
            Component: Help,
            path: "/help"
        },
        {
            Component: Profile,
            path: "/profile"
        },

        {
            Component: DocumentAcceptContainer,
            path: "/register/docs"
        },
        {
            Component: InvitingPhone,
            path: "/inviting/phone"
        },
        {
            Component: InvitingCreateContainer,
            path: "/inviting/form"
        },
        {
            Component: OrderPatient,
            path: "/order/patient"
        },
        {
            Component: () => SelectedPatientContainer({ Component: OrderCategory }),
            path: "/order/category"
        },
        {
            Component: () => SelectedPatientContainer({ Component: OrderAnalysis }),
            path: "/order/analysis"
        },
        {
            Component: () => SelectedPatientContainer({ Component: OrderCart }),
            path: "/order/cart"
        },
        {
            Component: InvitingLinkedContainer,
            path: "/patient-pinned"
        },
        {
            Component: InvitedContainer,
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

    ],
    non_auth: [
        {
            Component: PhoneLogin,
            path: "/login/phone"
        },
        {
            Component: PhoneSmsContainer,
            path: "/login/sms"
        },

    ]
}

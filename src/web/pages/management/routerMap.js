import Home from './home/Home';
import Destination from './destination/Destination';
import TravelPeople from './travelPeople/TravelPeople';
import AppointTourism from './appointTourism/AppointTourism';
import OutdoorGear from './outdoorGear/OutdoorGear';
import Photographer from './photographer/Photographer';
import TravelNodes from './travelNodes/TravelNodes';
import QuestionAnswer from './questionAnswer/QuestionAnswer';
import Register from './register/Register';
import Login from './login/Login';
import Detail from './detail/Detail';

export default [
    { path: "/", name: "Home", component: Home },
    { path: "/destination", name: "Destination", component: Destination },
    { path: "/travelPeople", name: "TravelPeople", component: TravelPeople },
    { path: "/appointTourism", name: "AppointTourism", component: AppointTourism },
    { path: "/outdoorGear", name: "OutdoorGear", component: OutdoorGear },
    { path: "/photographer", name: "Photographer", component: Photographer },
    { path: "/travelNodes", name: "TravelNodes", component: TravelNodes },
    { path: "/questionAnswer", name: "QuestionAnswer", component: QuestionAnswer },
    { path: "/detail", name: "Detail", component: Detail},
    { path: "/register", name: "Register", component: Register },
    { path: "/login", name: "Login", component: Login }
]
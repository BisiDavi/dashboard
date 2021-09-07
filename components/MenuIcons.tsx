import AssessmentIcon from "@material-ui/icons/Assessment";
import PieChartIcon from "@material-ui/icons/PieChart";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LoopIcon from "@material-ui/icons/Loop";
import NoteAddIcon from "@material-ui/icons/NoteAdd";

export default function menuIcons(icons) {
  switch (icons) {
    case "overview": {
      return <AssessmentIcon />;
    }
    case "analytics": {
      return <PieChartIcon />;
    }
    case "finance": {
      return <MonetizationOnIcon />;
    }
    case "account": {
      return <AccountCircleIcon />;
    }
    case "customers": {
      return <PeopleAltIcon />;
    }
    case "products": {
      return <ShoppingCartIcon />;
    }
    case "orders": {
      <LoopIcon />;
    }
    case "invoices": {
      <NoteAddIcon />;
    }
    default:
      return null;
  }
}

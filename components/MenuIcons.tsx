import AssessmentIcon from "@material-ui/icons/Assessment";
import PieChartIcon from "@material-ui/icons/PieChart";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";

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
    }
    case "customers": {
    }
    case "products": {
    }
    case "orders": {
    }
    case "invoices": {
    }
    default:
      return null;
  }
}

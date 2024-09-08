import routes from "@/app/dashboard/routes";
import { MdHistory } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { GrMoney } from "react-icons/gr";
import { GrHostMaintenance } from "react-icons/gr";

export const NavList = [
  { name: "Dashboard", icon: GrHostMaintenance, src: routes.Home() },
  { name: "History", icon: MdHistory, src: routes.History() },
  { name: "Billing", icon: GrMoney, src: routes.Billing() },
  { name: "Settings", icon: IoSettingsSharp, src: routes.Settings() },
];

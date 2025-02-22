import AccountIcon from "@/components/icon/AccountIcon";
import BankNoteIcon from "@/components/icon/BankNoteIcon";
import BranchesIcon from "@/components/icon/BranchesIcon";
import CardCheckIcon from "@/components/icon/CardCheckIcon";
import CardEditIcon from "@/components/icon/CardEditIcon";
import CardIcon from "@/components/icon/CardIcon";
import CardPlusIcon from "@/components/icon/CardPlusIcon";
import CardShieldIcon from "@/components/icon/CardShieldIcon";
import CreditCardIcon from "@/components/icon/CreditCardIcon";
import DashboardIcon from "@/components/icon/DashboardIcon";
import HourGlassIcon from "@/components/icon/HourGlassIcon";
import ListIcon from "@/components/icon/ListIcon";
import ProfileIcon from "@/components/icon/ProileIcon";
import QueueIcon from "@/components/icon/QueueIcon";
import RequestIcon from "@/components/icon/RequestIcon";
import RoleIcon from "@/components/icon/RoleIcon";
import SchemeIcon from "@/components/icon/SchemeIcon";
import StockIcon from "@/components/icon/StockIcon";
import TrailIcon from "@/components/icon/TrailIcon";
import UsersIcon from "@/components/icon/UsersIcon";

export const NavLinkData = [
  {
    text: "Dashboard",
    href: "/dashboard",
    Icon: DashboardIcon,
  },
  {
    text: "Branches",
    href: "#",
    Icon: BranchesIcon,
  },
  {
    text: "Roles",
    href: "#",
    Icon: RoleIcon,
  },
  {
    text: "Users",
    href: "#",
    Icon: UsersIcon,
  },
  {
    text: "Card Scheme",
    href: "#",
    Icon: SchemeIcon,
  },
  {
    text: "Card Profile",
    href: "/card-profile",
    Icon: ProfileIcon,
  },
  {
    text: "Card Request",
    href: "/card-request",
    Icon: RequestIcon,
  },
  {
    text: "Stock",
    href: "#",
    Icon: StockIcon,
  },
  {
    text: "Cards",
    href: "#",
    Icon: CardIcon,
  },
  {
    text: "Autthorization List",
    href: "#",
    Icon: ListIcon,
  },
  {
    text: "Autthorization Queue",
    href: "#",
    Icon: QueueIcon,
  },
  {
    text: "Trail",
    href: "#",
    Icon: TrailIcon,
  },
  {
    text: "Account",
    href: "#",
    Icon: AccountIcon,
  },
];

export const quickAccessData = [
  {
    text: "Manage a Card",
    Icon: CardShieldIcon,
  },
  {
    text: "Issue Instant Card",
    Icon: CreditCardIcon,
  },
  {
    text: "Issue Personalized Card",
    Icon: CardEditIcon,
  },
  {
    text: "Review Card Requests",
    Icon: CardPlusIcon,
  },
];

export const analyticsCardData = [
  {
    title: "Total Active Cards",
    amount: "26,478",
    isPending: false,
    percent: "+9%",
    period: "this month",
    text: "",
    Icon: CardCheckIcon,
    color: "#00984C",
  },
  {
    title: "Total Personalized Cards",
    amount: "15,703",
    isPending: false,
    percent: "8.5%",
    period: "this month",
    text: "",
    Icon: CardEditIcon,
    color: "#8020E7",
  },
  {
    title: "Today’s Revenue",
    amount: "₦9.3M",
    isPending: false,
    percent: "+6%",
    period: "vs yesterday",
    text: "",
    Icon: BankNoteIcon,
    color: "#2087E7",
  },
  {
    title: "Pending Requests",
    amount: "38",
    isPending: true,
    percent: "",
    period: "",
    text: "Requires attention",
    Icon: HourGlassIcon,
    color: "#E78020",
  },
];

export const recentRequestTableData = [
  "Branch",
  "Card Type",
  "Quantity",
  "Status",
  "Action",
];

export const recentRequestTableBodyData = [
  {
    branch: "Corporate",
    type: "Instant",
    quantity: "10",
    status: "Ready",
  },
  {
    branch: "Corporate",
    type: "Personalized",
    quantity: "10",
    status: "In Progress",
  },
  {
    branch: "Corporate",
    type: "Personalized",
    quantity: "10",
    status: "Acknowledged",
  },
  {
    branch: "Corporate",
    type: "Instant",
    quantity: "10",
    status: "Pending",
  },
];

export const cardProfileTableHeadData = [
  "Card Name",
  "Currency",
  "Expiration",
  "Bin Prefix",
  "Date Created",
  "Action",
];
export const cardrequestTableHeadData = [
  "Branch",
  "Initiator",
  "Quantity",
  "Batch",
  "Date Requested",
  "Status",
  "Action",
];

export const cardRequestTableData = [
  {
    branch: "Corporate",
    initator: "RootUser",
    quantity: "10",
    batch: "847264905",
    created: "11/14/2024  10:27:43",
    status: "Ready",
  },
  {
    branch: "Corporate",
    initator: "RootUser",
    quantity: "10",
    batch: "847264905",
    created: "11/14/2024  10:27:43",
    status: "Ready",
  },
  {
    branch: "Corporate",
    initator: "RootUser",
    quantity: "10",
    batch: "847264905",
    created: "11/14/2024  10:27:43",
    status: "In Progress",
  },
  {
    branch: "Corporate",
    initator: "RootUser",
    quantity: "10",
    batch: "847264905",
    created: "11/14/2024  10:27:43",
    status: "Pending",
  },
  {
    branch: "Corporate",
    initator: "RootUser",
    quantity: "10",
    batch: "847264905",
    created: "11/14/2024  10:27:43",
    status: "Acknowledged",
  },
];

export const feedTableHeadData = [
  "Name",
  "Value",
  "Frequency",
  "Currency",
  "Time",
  "Account Pad",
  "Account",
];

export const cardProfileTableData = [
  {
    name: "Verve-1",
    currency: "NGN",
    expiration: "40 months",
    bin: "50611234",
    created: "11/10/2024  23:21:03",
  },
  {
    name: "Verve-1",
    currency: "NGN",
    expiration: "40 months",
    bin: "50611234",
    created: "11/10/2024  23:21:03",
  },
  {
    name: "Verve-1",
    currency: "NGN",
    expiration: "40 months",
    bin: "50611234",
    created: "11/10/2024  23:21:03",
  },
];

export const cardSchemeData = [
  {
    label: "Verve",
    value: "verve",
  },
];

export const currencySchemeData = [
  {
    label: "NGN",
    value: "ngn",
  },
];
export const branchofficeeData = [
  {
    label: "Head Office",
    value: "head-office",
  },
];

export const currencyData = ["NGN", "USD"];

export const feeFreqData = ["One Off", "Monthy"];
export const feeImpactData = ["Issuance", "Pin Reissue"];
export const accountPadData = [
  "None",
  "Branch Code Prefix",
  "Branch Code Suffix",
];

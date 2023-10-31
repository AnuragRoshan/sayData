import Allfiles from "../component/Allfiles";
import MainArea from "../component/MainArea";

const menuitem = [
    { item: "Home", component: MainArea, icon: "home" },
    { item: "All Files", component: Allfiles, icon: "folder" },
    { item: "Saved", component: MainArea, icon: "bookmark" }, // Import Saved component
    { item: "Integrations", component: MainArea, icon: "share" }, // Import Integration component
    { item: "Trash", component: MainArea, icon: "delete" },
    { item: "Setting", component: MainArea, icon: "settings" },
    { item: "Help and Support", component: MainArea, icon: "help" }
];

export default menuitem;
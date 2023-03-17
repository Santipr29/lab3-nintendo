interface DataSection {
    name: string;
    image: string;
    description: string;
    buttontext: string;
}

const Sectionsdata: DataSection[] = [
    {
        name: "Featured",
        image: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.25/c_scale,w_1200/ncom/en_US/merchandising/secondary-centerstage/2023/MAR10%20Day/Sale/3580x1080_MAR10-Day-Sale-W1_Secondary_Desktop",
        description: "Save through 3/23 at 11:59 p.m. PT",
        buttontext: "Shop now",
    },
    {
        name: "Online store",
        image: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.25/c_scale,w_1200/ncom/en_US/merchandising/MNS_desktop_TEST",
        description: "Shop games, exclusive Nintendo merchandise, and more! Plus, get free shipping on orders $50 and over.",
        buttontext: "Start shopping",
    },
    {
        name: "Gaming systems",
        image: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.0/c_scale,w_1200/ncom/en_US/merchandising/Nintendo_Switch_family_wide_TEST-1",
        description: "Find the perfect Nintendo Switch system for you",
        buttontext: "Explore now",
    },
];

export default Sectionsdata;
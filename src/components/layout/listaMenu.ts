type MenuProps ={
    name: string;
    rout: string;
    children?: MenuProps[];
}
export const listaMenu: MenuProps[] = [
    {
        name: "Inicio",
        rout: '/'
    },
    {
        name: "Interacciones",
        rout: '/interacciones'
    },
    {
        name: "Logistica",
        rout: '/logistica'
    },
    {
        name: "Mentores",
        rout: '/mentores',
        children: [],
    },
    {
        name: "Ingresa",
        rout: '/login',
        children: [],
    }
];
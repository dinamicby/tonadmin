const MENU_ITEMS = [
    { key: 'navigation', label: 'Navigation', isTitle: true },
    { key: 'validator', label: 'Validator', isTitle: false, icon: 'mdi mdi-vote-outline', url: '/dashboard/validator' },
    { key: 'miner', label: 'Miner', isTitle: false, icon: 'mdi mdi-pickaxe', url: '/dashboard/miner' },
    { key: 'validators-list', label: 'Validators list', isTitle: false, icon: 'mdi mdi-format-list-bulleted', url: '/validators' },
];

export default MENU_ITEMS;

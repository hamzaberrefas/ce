export const domainsList = [
    {
        name: 'user-store.com',
        status: 1,
        type: 0,
    },
    {
        name: 'store.riwam.com',
        status: 0,
        type: 1,
    },
    {
        name: 'store.r.dz',
        status: 2,
        type: 2,
    },
];

export const status = [{
    content: 'Approved',
    color: "success/10 text-success"
},
{
    content: 'Error',
    color: "danger/10 text-danger"
    
},
{
    content: 'Pending',
    color: "warning/10 text-warning"
},];

export const types = [
    { value: 0, label: 'Primary', description: 'Primary Domain...etc' },
    { value: 1, label: 'Redirect', description: 'Domain for redirect...etc' },
    { value: 2, label: 'Alias', description: 'Alias domain...etc' },
];

export const records = [
    {
        name: "@",
        type: "A",
        value: "62.223.92.0"
    },
    {
        name: "@",
        type: "A",
        value: "74.51.166.37"
    },
    {
        name: "www",
        type: "CNAME",
        value: "store.riwam.com"
    },
]
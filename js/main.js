var app = new Vue ({
    el: "#app",
    data: {
        logo: 'img/white-logo-2.png',
        links: [
            {
                name: 'Home'
            },
            {
                name: 'About'
            },
            {
                name: 'Services'
            },
            {
                name: 'Blog'
            },
            {
                name: 'Contact'
            },
            {
                name: 'Portfolio'
            }
        ],
        button: {
            name: 'Sign In'
        },
        quicklinks: [
            {
                name: 'Services'
            },
            {
                name: 'Contact'
            },
            {
                name: 'Blog'
            }
        ],
        resourceslinks: [
            {
                name: 'Art Design'
            },
            {
                name: 'Computer'
            },
            {
                name: 'IT News'
            },
            {
                name: 'Networking'
            },
            {
                name: 'Web Security'
            }
        ],
        contactus: {
                address: 'Patricia C. Amedee 4401 Waldeck Street Grapevine Nashville, Tx 76051',
            
                phone: '+99 (0) 101 0000 888',
            
                email: 'Info@yourdomain.com',
            },
    },
    
    methods: {
        
    }
});
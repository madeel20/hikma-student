const CURRENT_ENV = process.env.NODE_ENV;
const API_URL = {
    development: "https://teacher.hikmaonline.com",
    production: "https://teacher.hikmaonline.com"
};
const DOMAIN = {
    development: "http://localhost:3001",
    production: "http://localhost:3001"
};

//     API_URL = ['http://18.222.122.101:4041', 'http://localhost:4040', 'http://192.168.0.52:4040',
//         'http://192.168.0.7:4042', 'http://18.188.77.58:4040']

export {
    API_URL,
    CURRENT_ENV,
    DOMAIN
}

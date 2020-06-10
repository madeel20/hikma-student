const firstName = [
    {
        required: true,
        message: 'Please enter your first name!',
    },
];
const lastNameRule = [
    {
        required: true,
        message: 'Please enter your last name!',
    },
];
const nickNameRule = [
    {
        required: true,
        message: 'Please enter your nick name!',
    },
];
const middleNameRule = [
    {
        required: true,
        message: 'Please enter your last name!',
    },
];
const hourlyRatesRule = [
    {
        required: true,
        message: 'Please enter your hourly rates!',
    },
];
const monthlyRatesRule = [
    {
        required: true,
        message: 'Please enter your monthly rates!',
    },
];
const passwordRule = [
    {
        required: true,
        message: 'Please enter password!',
    },
    { min: 8, message: 'please enter at least 8 digit password!' },
];
const newPasswordRule = [
    {
        required: true,
        message: 'Please enter new password!',
    },
    { min: 8, message: 'please enter at least 8 digit password!' },
];
const confirmPasswordRule = (validatePassword) => [
    {
        required: true,
        message: 'Please enter confirm password!',
    },
    { min: 8, message: 'please enter at least 8 digit password!' },
    { validator: validatePassword }
];
const phoneRule = [
    {
        required: true,
        message: 'Please enter phone number!',
    },
];
const emailRule = [
    {
        type: 'email',
        message: 'Please enter your valid email!',
    },
    {
        required: true,
        message: 'Please enter your email!',
    },
];
const countryRule = [
    {
        required: true,
        message: 'Please enter your country!',
    }
];
const addressRule = [
    {
        required: true,
        message: 'Please enter your address!',
    }
];
const sateRule = [
    {
        required: true,
        message: 'Please enter your state!',
    }
];
const cityRule = [
    {
        required: true,
        message: 'Please enter your city!',
    }
];
const zipCodeRule = [
    {
        required: true,
        message: 'Please enter your zip code!',
    }
];
const gpaRule = [
    {
        min: 0.0,
        max: 4.0,
        message: 'please enter gpa least less than 4.0!' },];

export {
    firstName,
    lastNameRule,
    nickNameRule,
    middleNameRule,
    hourlyRatesRule,
    monthlyRatesRule,
    passwordRule,
    confirmPasswordRule,
    newPasswordRule,
    phoneRule,
    emailRule,
    countryRule,
    addressRule,
    sateRule,
    cityRule,
    zipCodeRule,
    gpaRule
}

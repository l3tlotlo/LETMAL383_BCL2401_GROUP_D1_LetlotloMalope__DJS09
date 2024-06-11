const reviewTotalDisplay: HTMLElement = document.querySelector('#reviews')!
const returningUserDisplay: HTMLElement = document.querySelector('#returningUser')!
const userNameDisplay: HTMLElement = document.querySelector('#userName')!
let isOpen : boolean

const reviews : {
    name: string;
    stars: number;
    loyaltyUser: boolean;
    date: string;
}[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
]

function showReviewTotal(value: number, reviewer: string, isLoyalty: boolean) {
    const iconDisplay = isLoyalty ? '⭐' : ''
    reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay
}

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

const you: {
    firstName : string;
    lastName: string;
    isReturning: boolean;
    age: number;
    stayedAt: string[];
} = {
   firstName: 'Bobby', 
   lastName: 'Brown',
   isReturning: true,
   age: 35,
   stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}

const properties : {
    title: string;
    image: string;
    isAvailable: boolean;
    contact: string;
    price: number;
    location: {
        firstLine: string;
        city: string;
        code: number;
        country: string;
    };
}[] = [
    {
        image: '',
        title: "Cottage",
        price: 68,
        location: {
            firstLine: "house 54",
            city: "Gazalkent",
            code: 54546,
            country: "Uzbekistan"
        },
        contact: "kinggheedorah@mfdoom.com",
        isAvailable: false  
    },
    {
        image: '',
        title: 'Log Cabin',
        price: 54,
        location: {
            firstLine: "no 75",
            city: "Far Far away",
            code: 9818,
            country: 'Ofmilkandhoney'
        },
        contact: 'Shrek@hotmail.com',
        isAvailable: true
    },
        {
        image: '',
        title: "Igloo",
        price: 565,
        location: {
            firstLine: 'no 01',
            city: 'North Pole',
            code: 3903,
            country: "Antarctica"
        },
        contact: "stNick@northpole.com",
        isAvailable: false 
    }
]

function populateUser(isReturning: boolean, userName: string) {
    if (isReturning) {
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}

populateUser(you.isReturning, you.firstName)
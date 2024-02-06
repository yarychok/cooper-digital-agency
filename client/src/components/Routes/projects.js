import Aso1 from '@/assets/Projects/Aso1.jpg'
import Aso2 from '@/assets/Projects/Aso2.png'
import Aso3 from '@/assets/Projects/Aso3.png'
import Aso4 from '@/assets/Projects/Aso4.png'

import SSTR1 from '@/assets/Projects/SSTR1.jpg'
import SSTR2 from '@/assets/Projects/SSTR2.jpg'
import SSTR3 from '@/assets/Projects/SSTR3.jpg'
import SSTR4 from '@/assets/Projects/SSTR4.jpg'

import Bimini1 from '@/assets/Projects/Bimini1.jpg'
import Bimini2 from '@/assets/Projects/Bimini2.png'
import Bimini3 from '@/assets/Projects/Bimini3.png'
import Bimini4 from '@/assets/Projects/Bimini4.png'

import Daiwo1 from '@/assets/Projects/Daiwo1.jpg'
import Daiwo2 from '@/assets/Projects/Daiwo2.png'
import Daiwo3 from '@/assets/Projects/Daiwo3.png'
import Daiwo4 from '@/assets/Projects/Daiwo4.png'

import Knebel1 from '@/assets/Projects/Knebel1.jpg'
import Knebel2 from '@/assets/Projects/Knebel2.png'
import Knebel3 from '@/assets/Projects/Knebel3.png'
import Knebel4 from '@/assets/Projects/Knebel4.png'

import Rent1 from '@/assets/Projects/Rent1.jpg'
import Rent2 from '@/assets/Projects/Rent2.png'
import Rent3 from '@/assets/Projects/Rent3.png'
import Rent4 from '@/assets/Projects/Rent4.png'

import Uwe1 from '@/assets/Projects/Uwe1.jpg'
import Uwe2 from '@/assets/Projects/Uwe2.png'
import Uwe3 from '@/assets/Projects/Uwe3.png'
import Uwe4 from '@/assets/Projects/Uwe4.png'

import Yesor1 from '@/assets/Projects/Yesor1.jpg'
import Yesor2 from '@/assets/Projects/Yesor2.png'
import Yesor3 from '@/assets/Projects/Yesor3.png'
import Yesor4 from '@/assets/Projects/Yesor4.png'
import Yesor5 from '@/assets/Projects/Yesor5.png'

import Yoti1 from '@/assets/Projects/Yoti1.jpg'
import Yoti2 from '@/assets/Projects/Yoti2.png'
import Yoti3 from '@/assets/Projects/Yoti3.png'
import Yoti4 from '@/assets/Projects/Yoti4.png'
import Yoti5 from '@/assets/Projects/Yoti5.png'
import Yoti6 from '@/assets/Projects/Yoti6.png'

export const imagesList = {
    'aso': [Aso1, Aso2, Aso3, Aso4],
    'bimini': [Bimini1, Bimini2, Bimini3, Bimini4],
    'daiwo': [Daiwo1, Daiwo2, Daiwo3, Daiwo4],
    'knebel': [Knebel1, Knebel2, Knebel3, Knebel4],
    'rent-my-car': [Rent1, Rent2, Rent3, Rent4],
    'uwe-hub': [Uwe1, Uwe2, Uwe3, Uwe4],
    'yes-or': [Yesor1, Yesor2, Yesor3, Yesor4, Yesor5],
    'yoti': [Yoti1, Yoti2, Yoti3, Yoti4, Yoti5, Yoti6],
    'sstr': [SSTR1, SSTR2, SSTR3, SSTR4],
}

export const projects = [
    {
        id: 'yes-or',
        'card-title': 'YesOr',
        title: 'YesOR: Corporate Website',
        description: {
            concept: "The corporate website we created for YesOR is a digital beacon that not only mirrors their corporate persona but also affirms their position as a market leader.",
            year: '2023',
            client: 'YesOR',
            website: 'June 2, 2023',
        },
        tags: [ 'UI/UX', 'Development' ],
        images: [imagesList['yes-or']],
    },
    {
        id: 'knebel',
        'card-title': 'Knebel',
        title: 'Knebel: E-Commerce Development',
        description: {
            concept: "The e-commerce development endeavour for Knebel has revolutionized online retail experience, providing a robust platform that heightens customer engagement and propels sales.",
            year: '2023',
            client: 'Knebel',
            website: 'June 2, 2023',
        },
        tags: [ 'UI/UX','Development','E-Commerce' ],
        images: [imagesList.knebel]
    },
    {
        id: 'uwe-hub',
        'card-title': 'Uwehub',
        title: 'Uwehub: Educational Website',
        description: {
            concept: "The multilingual website for Uwehub Educational Center that we built serves as a universal platform for education, demolishing language barriers and making learning accessible to an international audience.",
            year: '2022',
            client: 'Uwehub',
            website: 'June 2, 2023',
        },
        tags: [ 'UI/UX', 'Development' ],
        images: [imagesList['uwe-hub']],
    },
    {
        id: 'yoti',
        'card-title': 'Yoti',
        title: 'Yoti: E-Commerce Business Branding',
        description: {
            concept: "Our branding project with Yoti has established a strong brand identity that fosters trust and encourages customer loyalty, which is key to e-commerce triumph.",
            year: '2023',
            client: 'Yoti',
            website: 'June 2, 2023',
        },
        tags: [ 'Branding','Research', ],
        images: [imagesList.yoti],
    },
    {
        id: 'd-a-i-wo',
        'card-title': 'D.A.I.Wo',
        title: 'D.A.I.Wo: Branding & Web3 Development',
        description: {
            concept: "We've created a harmonious fusion of branding and Web3 development for D.A.I.Wo, resulting in a visually captivating and technologically advanced digital ecosystem.",
            year: '2023',
            client: 'D.A.I.Wo',
            website: 'June 2, 2023',
        },
        tags: ['UI/UX','Development', 'Web3'
        ],
        images: [imagesList['daiwo']],
    },
    {
        id: 'sstr',
        'card-title': 'SSTR',
        title: 'SSTR: Branding & Pitch-Deck Design',
        description: {
            concept: "Our collaboration with SSTR merges captivating branding with a dynamic pitch-deck design. It tells the compelling narrative of a burgeoning startup through a powerful visual identity.",
            year: '2023',
            client: 'SSTR',
            website: 'June 2, 2023'
        },
        tags: ['Branding', 'PitchDesk', ],
        images: [imagesList.sstr],
    },
    {
        id: 'rent-my-car',
        'card-title': 'RentMyCar',
        title: 'RentMyCar: Prototyping & UI/UX Design',
        description: {
            concept: "The RentMyCar project is a testament to our proficiency in prototyping and UI/UX design. We've crafted a user-oriented experience that is set to redefine the car rental industry.",
            year: '2022',
            client: 'RentMyCar',
            website: 'June 2, 2023',
        },
        tags: ['Prototyping','UI/UX','App',],
        images: [imagesList['rent-my-car']],
    },
    {
        id: 'bimini',
        'card-title': 'Bimini',
        title: 'Bimini: Logistic Company Website',
        description: {
            concept: "Our website for Bemini epitomizes efficiency and user-friendliness, optimizing logistics operations and ensuring a smooth supply chain.",
            year: '2023',
            client: 'Bimini',
            website: 'June 2, 2022',
        },
        tags: ['UI/UX','Development',
        ],
        images: [imagesList.bimini],
    },
    {
        id: 'aso',
        'card-title': 'ASO',
        title: 'ASO Marketing: Growth Agency Branding',
        description: {
            concept: "Our branding for ASO Marketing is a magnet for success, reflecting their unwavering commitment to delivering results and driving growth.",
            year: '2023',
            client: 'Aso',
            website: 'June 2, 2023',
        },
        tags: ['Branding','Research',
        ],
        images: [imagesList.aso],
    },
]




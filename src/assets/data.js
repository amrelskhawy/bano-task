import profile1 from '../assets/images/avatars/Rectangle 3-1.png'
import profile2 from '../assets/images/avatars/Rectangle 3-2.png'
import profile3 from '../assets/images/avatars/Rectangle 3-3.png'
import profile4 from '../assets/images/avatars/Rectangle 3-4.png'
import profile5 from '../assets/images/avatars/Rectangle 6-1.png'
import profile6 from '../assets/images/avatars/Rectangle 6-2.png'
import profile7 from '../assets/images/avatars/Rectangle 6-3.png'
import profile8 from '../assets/images/avatars/Rectangle 6-4.png'

import cover1 from '../assets/images/covers/Rectangle 5.png'
import cover2 from '../assets/images/covers/Rectangle 5-1.png'
import cover3 from '../assets/images/covers/Rectangle 5-2.png'
import cover4 from '../assets/images/covers/Rectangle 5-3.png'
import cover5 from '../assets/images/covers/Rectangle 5-5.png'

const data = {
    avatars: {
        avatar_1: profile1,
        avatar_2: profile2,
        avatar_3: profile3,
        avatar_4: profile4,
        avatar_5: profile5,
    }
    , covers: {
        cover_1: cover1,
        cover_2: cover2,
        cover_3: cover3,
        cover_4: cover4,
        cover_5: cover5,
    }
}
const { avatars, covers } = data

export const RECOMMENDED = [
    { name: 'Leisure', pic: profile5 },
    { name: 'Activism', pic: profile6 },
    { name: 'MBA', pic: profile7 },
    { name: 'Philosophy', pic: profile8 },

]

export default [
    {
        article_icon: '',
        article_type: 'article',
        post_cover: covers.cover_1,
        headline: 'What if famous brands had regular fonts? Meet RegulaBrands!',
        description: 'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',
        avatar: avatars.avatar_1,
        person_name: 'Sarthak Kamra',
        views_count: '1.4K'
    },
    {
        article_icon: '',
        article_type: 'education',
        post_cover: covers.cover_2,
        headline: 'Tax Benefits for Investment under National Pension Scheme launched by Government',
        description: 'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',
        avatar: avatars.avatar_2,
        person_name: 'Sarah West',
        views_count: '1.4K'
    },
    {
        article_icon: '',
        article_type: 'article',
        post_cover: covers.cover_1,
        headline: 'What if famous brands had regular fonts? Meet RegulaBrands!',
        description: 'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',
        avatar: avatars.avatar_1,
        person_name: 'Sarthak Kamra',
        views_count: '1.4K'
    },
    {
        article_icon: '',
        article_type: 'education',
        post_cover: covers.cover_2,
        headline: 'Tax Benefits for Investment under National Pension Scheme launched by Government',
        description: 'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',
        avatar: avatars.avatar_2,
        person_name: 'Sarah West',
        views_count: '1.4K'
    },

]
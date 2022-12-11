import React, {useContext} from 'react'
import Landing from '../../components/Landing/Landing'
import SubNav from '../../components/sub-nav/sub-nav'
import PostsContainer from '../../components/postsContainer/PostsContainer'
import Recommended from '../../components/Recommended/Recommended'
import SignUp from '../../components/sign-up/signUp'
import { SignUpContext } from '../../context/signup.context'
const Home = () => {
    const {isOpen} = useContext(SignUpContext)
    return (
        <div className=''>
            <Landing />
            <SubNav />
            <div className='container xs:grid xs:grid-cols-2 xs:gap-8 relative'>
                <PostsContainer />
                <Recommended />
            </div>
            {isOpen && <SignUp />}
        </div>

    )


}

export default Home

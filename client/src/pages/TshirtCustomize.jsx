import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from '../config/motion';
import state from '../store';
import { CustomButton } from '../components';

import Navbar from '../components/NavBar/Navbar';

const TshirtCustomize = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
        {snap.intro && (
            <section className='home'>
                <Navbar />
                <div className='home-content'>
                    <div className='w-8/12'>
                        <h1 className="head-text">
                            Discover your style with <span className='text-yellow-300'>Aphrodite Fashion</span>
                        </h1>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <p className='max-w-md font-normal text-neutral-300 text-base'>
                            Create your own exclusive t-shirt with our brand-new 3D customization tool. <strong>Unleash your imagination</strong> and define your own style
                        </p>
                        <div className='flex flex-row gap-6 w-3/12'>
                            <CustomButton
                                type= "outline"
                                title= "Shop"
                                handleClick= {() => state.intro = false}
                                customStyles= "py-2.5 font-bold text-sm"
                            />
                            <CustomButton
                                type= "filled"
                                title= "Customize It"
                                handleClick= {() => state.intro = false}
                                customStyles= "w-fit py-2.5 font-bold text-sm"
                            />
                        </div>
                    </div>
                </div>
            </section>
        )}
    </AnimatePresence>
    
  )
}

export default TshirtCustomize
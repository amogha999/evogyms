import useMediaQuery from '@/hooks/useMediaQuery'
import ActionButton from '@/shared/ActionButton'
import { SelectedPage } from '@/shared/types'
import HomePageText from '@/assets/HomePageText.png'
import HomePageGraphic from '@/assets/HomePageGraphic.png'
import SponsorRedBull from '@/assets/SponsorRedBull.png'
import SponsorForbes from '@/assets/SponsorFortune.png'
import SponsorFortune from '@/assets/SponsorForbes.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion'


type Props = {
    setSelectPage:(value:SelectedPage) =>void
}

const Home = ({setSelectPage}: Props) => {
  const isAboveMediumScreens=useMediaQuery("(min-width:1060px")
    return (
    <section id='home' className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'>
        <motion.div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'
        onViewportEnter={()=>setSelectPage(SelectedPage.Home)}>
        <div className='z-10 mt-32 md:basis-3/5'>
            <motion.div className='md:-mt-20'
            initial="hidden" whileInView="visible"
            viewport={{once:true,amount:0.5}}
            transition={{duration:0.8}}
            variants={{
                hidden:{opacity:0,x:-50},
                visible:{opacity:1,x:0}
            }}
            >
                <div className='relative '>
                    <div className='before:absolute before:-top-20 
                      before:-left-20 before:z-[-1]  md:before:content-evolvetext'>
                        <img src={HomePageText} alt="text" />
                    </div>
                </div>
                <p className='mt-8 text-sm '>
                    Mast Gym Come learn how to workout .If you dont know how to workout we will teach you We have our Trainer venki. Who has been workong out since LKG.Get to the Dream body within few Days.
                </p>
            </motion.div>
            <motion.div className='mt-8 flex items-center gp-8 md:justify-start'
            initial="hidden" whileInView="visible"
            viewport={{once:true,amount:0.5}}
            transition={{delay:0.2,duration:0.8}}
            variants={{
                hidden:{opacity:0,x:-50},
                visible:{opacity:1,x:0}
            }}>
                <ActionButton setSelectPage={setSelectPage}>
                    Join Now
                </ActionButton>
                <AnchorLink className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
                onClick={()=>setSelectPage(SelectedPage.contactus)}
                href={`#${SelectedPage.contactus}`}
                >
                    <p className='p-12'>Learn More   </p>
                </AnchorLink>
            </motion.div>
            </div>
            <div className='flex basis-3/5 justify-center md:z-10
            md:ml-40 md:mt-16 justify-items-end'>
            <img src={HomePageGraphic} alt="" />
            </div>
        </motion.div>
        {isAboveMediumScreens &&(
            <div className='h-[150px] w-full bg-primary-100 py-100'>
                <div className='mx-auto w-5/6'>
                    <div className='flex w-3/5 items-center justify-between gap-8 py-8'>
                        <img src={SponsorRedBull} alt="" />
                        <img src={SponsorFortune} alt="" />
                        <img src={SponsorForbes} alt="" />
                    
                    </div>
                </div>
            </div>
        )}
    </section>
  )
}

export default Home
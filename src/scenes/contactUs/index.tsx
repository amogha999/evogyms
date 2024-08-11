import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import ContactUsGraphic from '@/assets/ContactUsPageGraphic.png'
import HText from "@/shared/HText"

type Props = {setSelectPage:(value:SelectedPage)=>void}

const contactUs = (setSelectPage: Props) => {
const inputStyles=`mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`
  const{
  register,
    trigger,
  formState:{errors}
}=useForm();
  const onsubmit =async(e:any)=>{
  const isValid=await trigger()
  if(!isValid){
    e.preventDefault()
  }
}
  return (
    <section id='contactus' className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div onViewportEnter={()=> setSelectPage(SelectedPage.contactus)}>
      <motion.div className="md:w-3/5"
      initial="hidden" whileInView="visible"
      viewport={{once:true,amount:0.5}}
      transition={{duration:0.8}}
      variants={{
          hidden:{opacity:0,x:-50},
          visible:{opacity:1,x:0}
      }}>
        <HText>
          <span className="text-primary-500">Join Now</span> To get in Shape of ur Body
        </HText>
        <p className="my-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat iusto et omnis facilis corrupti facere cumque ab vitae assumenda sed quidem distinctio, reprehenderit provident natus error, rem in mollitia molestias.</p>
      </motion.div>
      <div className="mt-10 justify-between md:flex">
        <motion.div className="mt-10 basis:3/5 md:mt-0"
        initial="hidden" whileInView="visible"
        viewport={{once:true,amount:0.5}}
        transition={{duration:0.8}}
        variants={{
            hidden:{opacity:0,y:50},
            visible:{opacity:1,y:0}
        }}
        >
          <form target="_blank" onSubmit={onsubmit}
          method="POST" action="https://formsubmit.co/amogha0711@gmail.com"
          >
            <input className={inputStyles} type='text' placeholder="Name"{...register('name',{
              required:true,
              maxLength:100
            })} />{errors.name &&(
              <p className="mt-1 text-primary-500 ">
                {errors.name.type === "required" && "This Field is Required"}
                {errors.name.type==='maxLength'&& "MaxLength is 100 Characters "}
              </p>
            )}
            <input type="text" className={inputStyles} placeholder="EMAIL"{...register('email',{
              required:true,
              maxLength:100
            })} />{errors.email &&(
              <p className="mt-1 text-primary-500">
                {errors.email.type ==='required' &&
                "This Field is Required"}{
                  errors.email.type==='maxLength'&&"MaxLength is 100 cahracters"
                }
              </p>
            )}
            <textarea rows={4} cols={50} className={inputStyles} placeholder="Description"{...register('desc',{
              required:true,
              maxLength:2000
            })} />{errors.desc &&(
              <p className="mt-1 text-primary-500">
                {errors.desc.type ==='required' &&
                "This Field is Required"}{
                  errors.desc.type==='maxLength'&&"MaxLength is 100 cahracters"
                }
              </p>
            )}
  <button type="submit" className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration:500 hover:text-white">SUBMIT</button>
          </form>
        </motion.div>
        <motion.div className="relative mt-16 basis-2/5 md:mt-0"
        initial="hidden" whileInView="visible"
        viewport={{once:true,amount:0.5}}
        transition={{delay:0.2,duration:0.8}}
        variants={{
            hidden:{opacity:0,x:-50},
            visible:{opacity:1,x:0}
        }}>
          <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
            <img className="w-full md:mx-20" src={ContactUsGraphic} />
          </div>
        </motion.div>
      </div>
      </motion.div>
    </section>
  )
}

export default contactUs
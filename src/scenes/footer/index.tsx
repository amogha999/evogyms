import Logo from '@/assets/Logo.png'

function footer() {
  return (
    <footer className='bg-primary-100 py-16'>
        <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
            <div className='mt-16 basis-1/2 md:mt-0'>
                <img src={Logo}/>
                <p className='my-5'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit obcaecati quidem magni ut illo inventore exercitationem natus laudantium vel culpa deleniti quod, cumque asperiores soluta, placeat adipisci repellat similique. Aliquid?
                </p>
                <p>
                    &#169; EvoGym All Rights Reserved
                </p>
            </div>
            <div className='mt-16 basis-1/4 md:mt-0'><h4 className='font-bold'>LINKS</h4>
            <p className='my-5'>Lorem</p>
            <p className='my-5'>Lorem</p>
            <p className='my-5'>Lorem</p>
            <p className='my-5'>Lorem</p>
            <p>Lorem</p></div>
            <div className='mt-16 basis-1/4 md:mt-0'><h4 className='font-bold'>Contact us</h4>
            <p className='my-5'>Lorem</p>
            <p className='my-5'>Lorem</p>
            <p className='my-5'>Lorem</p>
            <p>Lorem</p></div>
        </div>
    </footer>
  )
}

export default footer
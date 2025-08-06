import { GithubLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-[#5B6355] text-white">
                <div className="container flex flex-col items-center py-4">
                    <div className='flex gap-2'>
                        <a href="https://www.linkedin.com/in/nataliataira/" target="_blank">
                            <LinkedinLogoIcon size={30} weight='light' color='#F3F1EE'/>
                        </a>
                        <a href="https://github.com/nataliataira" target="_blank">
                            <GithubLogoIcon size={30} weight='light' color='#F3F1EE'/>
                        </a>
                    </div>
                    <hr className="border-t border-[#737B6E] w-full my-4" />
                    <p className='text-l font-semibold text-[#F3F1EE]'>
                        Natalia Gomes Taira,  Copyright: {data}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer;
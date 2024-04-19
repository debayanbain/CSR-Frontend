import clsx from 'clsx';
import Button from "@/components/Base/Button";
import LoadingIcon from "@/components/Base/LoadingIcon";

export const Card1 = ({ imageUrl, title, buttonText }: { imageUrl: string, title: string, buttonText: string }) => {
    return (
        <div className={clsx([
            "zoom-in",
            "w-[348px] h-[403px]",
        ])}>
            <div className=" w-[354px] h-[409px] top-0 left-0 bg-[#a8baf0] rounded-[15px] hover:border-[3px] border-solid border-[#1d4ce2] shadow-[0px_15px_20px_5px_#00000026]">
                <div className="flex flex-col justify-evenly items-center p-8 w-full h-full overflow-hidden">

                    <div className="relative flex-none bg-white rounded-full w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 image-fit">
                        <img
                            alt="Midone Tailwind HTML Admin Template"
                            className="w-2 rounded-full"
                            src={imageUrl}
                        />
                    </div>
                    <div className="font-extrabold text-[#2c3e50] text-[36px] tracking-[0] leading-[normal]">
                        {title}
                    </div>
                    <div className="flex justify-center items-center">
                        <Button variant="primary" className='w-[150px] h-[60px] text-lg uppercase tracking-wide'>
                            {buttonText}
                            <LoadingIcon
                                icon="oval"
                                color="white"
                                className="w-5 h-5 ml-2"
                            />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Card2 = ({ imageUrl, title, buttonText }: { imageUrl: string, title: string, buttonText: string }) => {
    return (
        <div className={clsx([
            "zoom-in",
            "w-[348px] h-[403px]",
        ])}>
            <div className=" w-[354px] h-[409px] top-0 left-0 bg-[#a8baf0] rounded-[15px] hover:border-[3px] border-solid border-[#1d4ce2] shadow-[0px_15px_20px_5px_#00000026]">
                <div className="flex flex-col justify-evenly items-center p-8 w-full h-full overflow-hidden">

                    <div className="relative flex-none bg-white rounded-full w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 image-fit">
                        <img
                            alt="Midone Tailwind HTML Admin Template"
                            className="rounded-full"
                            src={imageUrl}
                        />
                    </div>
                    <div className="font-extrabold text-[#2c3e50] text-[36px] tracking-[0] leading-[normal]">
                        {title}
                    </div>
                    <div className="flex justify-center items-center">
                        <Button variant="primary" className='w-[150px] h-[60px] text-lg uppercase tracking-wide'>
                            {buttonText}
                            <LoadingIcon
                                icon="oval"
                                color="white"
                                className="w-5 h-5 ml-2"
                            />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Card3 = ({ imageUrl, title, buttonText }: { imageUrl: string, title: string, buttonText: string }) => {
    return (
        <div className={clsx([
            "zoom-in",
            "w-[348px] h-[403px]",
            "mb-4"
        ])}>
            <div className=" w-[354px] h-[409px] top-0 left-0 bg-[#a8baf0] rounded-[15px] hover:border-[3px] border-solid border-[#1d4ce2] shadow-[0px_15px_20px_5px_#00000026]">
                <div className="flex flex-col justify-evenly items-center p-8 w-full h-full overflow-hidden">

                    <div className="relative flex-none bg-white rounded-full w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 image-fit">
                        <img
                            alt="Midone Tailwind HTML Admin Template"
                            className="rounded-full"
                            src= {imageUrl}
                        />
                    </div>
                    <div className="font-extrabold text-[#2c3e50] text-[36px] tracking-[0] leading-[normal]">
                        {title}
                    </div>
                    <div className="flex justify-center items-center">
                        <Button variant="primary" className='w-[150px] h-[60px] text-lg uppercase tracking-wide'>
                            {buttonText}
                            <LoadingIcon
                                icon="oval"
                                color="white"
                                className="w-5 h-5 ml-2"
                            />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
import { ICONS } from "../../../assets";


const HeadingContainer = ({title}:{title:string}) => {
    return (
        <div className="bg-[#DE3C4B] p-8 md:p-[64px] relative">
            <h1 className="text-white font-Rajdhani text-3xl md:text-[64px] xl:text-[82px] font-bold leading-[80px] md:leading-[72px] xl:leading-[80px] uppercase text-center">{title}</h1>
            <img src={ICONS.stripDown} alt="" className="absolute -bottom-1 md:-bottom-2 xl:-bottom-3 w-full left-0" />
        </div>
    );
};

export default HeadingContainer;
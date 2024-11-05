import Container from "../../Shared/Container/Container";


const BringingComfort = () => {
    return (
        <div className="bg-[#FBF5F3] py-[128px]">
            <Container>
            <div className="font-Poppins">
                <div className="px-6 py-3 rounded-[100px] border border-[#E28413] text-[#E28413] font-medium leading-5 uppercase tracking-tighter w-fit">Student Tiffin</div>
            <h1 className="text-[#293241] text-[48px] font-bold leading-[64px] tracking-tighter mt-6 max-w-[752px] text-balance">
            Bringing the comfort of home to your table, every day.
            </h1>

            <p className="text-[#424B54] text-2xl leading-9 max-w-[716px] mt-3">
              Savor homestyle Indian cuisine crafted with tradition, perfect for
              every craving.
            </p>

            <button className="px-8 py-4 text-white bg-primary-gradient shadow-custom-shadow border border-white-opacity-25 rounded-2xl text-xl leading-5 font-semibold tracking-tighter mt-6">Let’s Get Started</button>
          </div>
            </Container>
        </div>
    );
};

export default BringingComfort;
import { Link, useParams } from "react-router-dom";
import { ICONS } from "../../assets";
import Badge from "../../components/Shared/Badge/Badge";
import Container from "../../components/Shared/Container/Container";
import { useGetSingleProductQuery } from "../../redux/Features/Menus/menuApi";

const MenuDetails = () => {
  const { id } = useParams<{ id: string }>();

  // Fetch the data using the id
  const { data,isLoading } = useGetSingleProductQuery(id);

  return (
    <div className="bg-[#F4F8FA] px-5 md:px-10 xl:px-0 py-[64px] md:py-[96px]">
      <Container>
        <div className="bg-white rounded-[32px] p-5 md:p-9 w-full flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to={"/menu"}>
                <img
                  src={ICONS.leftArrow2}
                  alt="left-arrow"
                  className="size-8"
                />
              </Link>
              <h1 className="text-[#293241] font-Poppins text-xl md:text-2xl font-semibold leading-6 md:leading-9">
                {data?.product?.name}
              </h1>
            </div>
            <Badge variant="Meat" />
          </div>

          <div className="flex flex-col lg:flex-row gap-9 w-full">
            {/* Image */}
            <div className="bg-[#FFEBEC] flex items-center justify-center rounded-2xl p-3 w-full lg:w-[390px] h-[200px]">
              <img
                src={data?.product?.image?.thumbnailUrl}
                alt="menu-img"
                className=" rounded-xl"
              />
            </div>

            <div className="w-full flex flex-col gap-4">
              {/* Description */}
              <p className="text-[#6E7883] leading-6 font-Poppins">
              {data?.product?.description}
              </p>

              <div>
                <h1 className="text-[#293241] font-Poppins text-xl md:text-2xl font-semibold leading-6 md:leading-9">
                  Ingredients
                </h1>

                {data?.product?.ingredients?.map((ingredient:string, index:number) => (
                  <div key={index} className="flex items-center gap-1">
                    <img src={ICONS.pointer} alt="pointer" className="size-8" />
                    <p className="text-[#6E7883] leading-6 font-Poppins">
                      {ingredient}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MenuDetails;

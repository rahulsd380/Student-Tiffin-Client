import { ICONS, IMAGES } from "../../assets";
import Badge from "../../components/Shared/Badge/Badge";
import Container from "../../components/Shared/Container/Container";

const MenuDetails = () => {
  const ingredients = [
    "500 grams boneless chicken thighs, cut into bite-sized pieces",
    "1 cup plain yogurt",
    "2 tablespoons ginger-garlic paste",
    "2 tablespoons lemon juice",
    "1 teaspoon red chili powder",
    "1 teaspoon garam masala",
    "1 teaspoon ground cumin",
    "Salt to taste",
    "3 tablespoons unsalted butter",
    "1 large onion, finely chopped",
    "2 cups pureed tomatoes",
    "1 cup heavy cream",
    "Fresh cilantro for garnish",
  ];

  return (
    <div className="bg-[#F4F8FA] px-5 md:px-10 xl:px-0 py-[64px] md:py-[96px]">
      <Container>
        <div className="flex flex-col lg:flex-row gap-9 bg-white rounded-[32px] p-5 md:p-9 w-full">
          {/* Image */}
          <img
            src={IMAGES.menu1}
            alt="menu-img"
            className="w-full xl:w-[308px] h-[200px] rounded-xl object-cover"
          />

          <div className="w-full flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={ICONS.leftArrow2}
                  alt="left-arrow"
                  className="size-8"
                />
                <h1 className="text-[#293241] font-Poppins text-xl md:text-2xl font-semibold leading-6 md:leading-9">
                  Butter Chicken
                </h1>
              </div>
              <Badge variant="Meat" />
            </div>

            {/* Description */}
            <p className="text-[#6E7883] leading-6 font-Poppins">
              Butter Chicken, also known as Murgh Makhani, is a classic Indian
              dish that originates from the rich culinary traditions of North
              India. This dish features tender chicken pieces marinated in a
              blend of yogurt and spices, then grilled to perfection before
              being simmered in a velvety sauce made from butter, cream, and
              tomatoes. The result is a rich and creamy curry that is both
              flavorful and comforting. The subtle spices, combined with the
              sweetness of the tomatoes and the richness of the butter, create a
              balanced taste that tantalizes the palate. Butter Chicken is best
              served with naan or steamed basmati rice, making it a beloved
              choice for anyone craving a taste of authentic Indian cuisine.
            </p>

            <div>
              <h1 className="text-[#293241] font-Poppins text-xl md:text-2xl font-semibold leading-6 md:leading-9">
                Ingredients
              </h1>

              {ingredients.map((ingredient, index) => (
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
      </Container>
    </div>
  );
};

export default MenuDetails;
